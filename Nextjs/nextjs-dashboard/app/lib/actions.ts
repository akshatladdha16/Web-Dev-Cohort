'use-server';
//server action that willl  be called out when the form is submitted
// now all functions here exported will be treated a server actions

export async function createInvoice(formData:FormData){
    const rawFormData={
        customerId:formData.get('customerId'),
        amount:formData.get('amount'),
        status:formData.get('status'),
    };
    ///testing it out
    console.log(rawFormData);
}