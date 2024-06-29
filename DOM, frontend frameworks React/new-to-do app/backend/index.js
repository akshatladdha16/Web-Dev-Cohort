const { todo } = require("./db");
const { createTodo } = require("./types");

const express = require("express");
const app=express();

app.use(express.json());

app.post('/todo', async (req,res)=>{
    const createpayload=req.body;
    const safeload=createTodo.safeParse(createpayload);
    if(!safeload.success){
        res.status(411).json({
            msg:"invalid input"
        })
        return;
    } //if everything is alright then put it in mongodb
    await todo.create({  //ideally a async function as we should wait for to do to be created (in case if system turns off in mid if not async it will show to do created so it should wait for to do to be created properly)
        title:createpayload.title,
        description: createpayload.description,
        completed:false 
    })
    res.json({
        msg:"To Do created!!"
    })
})

app.get('/todos', async (req,res)=>{
    const todos=await todo.find({}); //todo.find will hit the database and so it will take time to return the results so this is a async function
    res.json({
        todos
    })
})

app.put('/completed',async (req,res)=>{
    const createpayload=req.body;
    const parsedpayload=createTodo.safeParse(createpayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"invalid input entered"
        })
        return;
    }
    await todo.updateOne({ //take two input: first is condition and 2nd is what changes to process
        _id:req.body._id  //automatically _id is created by mongodb for every todo we create 
    },{
        completed:true
    })

})

app.listen(3000);
