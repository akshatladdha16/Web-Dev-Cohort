//using mongoose library to connect backedn with database.CRUD operations: create, read, update and delete
const express=require("express");
const app=express();
app.use(express.json());

const mongoose=require("mongoose");
const { string } = require("zod");
mongoose.connect("mongodb+srv://akshat_laddha16:aM0pM36sYHBJ8dZo@cluster0.uhtjlhp.mongodb.net/")

//describing the model
const User =mongoose.model('Users',{
    name:String,
    email:String,
    password:String
});

//manual way  of creating user 
// const user=new User({
//     name:"Akshat Rai Laddha",
//     email:"laddhakshatrai@gmail.com",
//     password:"12345"
// });
// user.save();

///but isntead of writing this manually , we canget post request from users and directly it will save in db
app.post('/signup',async function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const existinguser=await User.findOne({email:username});
    if(existinguser){
        return res.status(403).send("Username already exists");
    }
    const user=new User({
        name:name,
        email:username,
        password:password
    });
    user.save();
    res.json({
        msg:"user created successfully"
    });
})
app.listen(3000);

