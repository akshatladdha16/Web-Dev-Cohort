//here we will define our schema for mongoose to structure our data 

const mongoose=require("mongoose");

//connect to mongoose 
mongoose.connect('mongodb+srv://akshat_laddha16:aM0pM36sYHBJ8dZo@cluster0.uhtjlhp.mongodb.net/');

//defining schemas
//1. admin
const AdminSchema=new mongoose.Schema({
    username: String,
    password: String
})
//2. user
const UserSchema=new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Courses" //giving a ref to another schema to structure it well
    }]
})

//3. course schema
const Courses=new mongoose.Schema({
    title: String,
    description: String,
    imagelink: String,
    price:Number
})

//modelling
const Admin= mongoose.model('Admin',AdminSchema);
const User= mongoose.model('User',UserSchema);
const courses=mongoose.model('Courses',Courses);

module.exports=Admin;
module.exports=User;
module.exports=courses;
