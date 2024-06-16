const express=require("express");
const app=express();
const zod=require("zod");//a validation library, can be used for any validation purpose without express also
const schema=zod.array(zod.number());//rule to stand by for this schema

//another example of schema with multiple checks inputs
const schema2=zod.object({  
    email:zod.string().email(),
    pass:zod.string(),
    country:zod.literal("IN").or(zod.literal("US")),
    kidney:zod.array(zod.number())
})

app.use(express.json());
app.post('/health',(req,res)=>{
    const kidney=req.body.kidney
    const response=schema.safeParse(kidney);
    if(!response.success){
        res.status(411).json({
            msg:"input invalid"
        })
    }
    else{
        res.json({
            msg:"correct kidney"
        })
    }
})
app.listen(3000);