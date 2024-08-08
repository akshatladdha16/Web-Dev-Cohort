'use server';
//server action that willl  be called out when the form is submitted
// now all functions here exported will be treated a server actions

//to revalidate the input datatype
import {z} from 'zod';
import {sql} from '@vercel/postgres';
//importing data to our database

//revalide and redirect
import {revalidatePath} from 'next/cache';
import { redirect } from 'next/navigation';
const FormSchema=z.object({
    id:z.string(),
    customerId:z.string(),
    amount:z.coerce.number(),
    //amount field is specifically set to coerce (change) from a string to a number
    status:z.enum(['pending','paid']),
    date:z.string(),
})

//updateing invoice
const UpdateInvoice=FormSchema.omit({id:true,date:true});

export async function updateInvoice(id:string,formData:FormData){
    const {customerId,amount,status}=UpdateInvoice.parse({
        customerId:formData.get('customerId'),
        amount:formData.get('amount'),
        status:formData.get('status'),
    })

    const amountInCents=amount*100;

    await sql`UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}`
}


const CreateInvoice=FormSchema.omit({
    id:true,
    date:true
});

export async function createInvoice(formData:FormData){
    
    const {customerId,amount,status}=CreateInvoice.parse({
        customerId:formData.get('customerId'),
        amount:formData.get('amount'),
        status:formData.get('status'),
    });
    const amountInCents=amount*100;
    const date =new Date().toISOString().split('T')[0];

    await sql`
    INSERT INTO invoices (customer_id,amount,status,date)
    VALUES (${customerId},${amountInCents},${status},${date})
    `;

    revalidatePath('dashboard/invoices');//now that data is revalidated to invoices page 

    redirect('dashboard/invoices');//send users back to updated invoices page
}
export async function deleteInvoice(id: string) {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');//here no need to redirect as we are deleting from dashboard/invoices only
  }