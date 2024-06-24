const express=require("express");
const adminmiddleware=require("../middlewares/admin.js")
const {Admin}=require("../db/index.js");
const courses = require("../db/index.js");
const router=express.Router();

router.post('/signup',async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    //check if user with this username exists ideally then only create the user
    await Admin.create({
        username:username,
        password:password
    })  
    res.json({
        msg:"Admin created successfully"
    })
});

// course post request ; here middleware required as admin is only allowed to give post request in courses not users(for users it's get)
router.post('/courses',adminmiddleware,async (req,res)=>{
    // for input validation always use lib like zod in real world scenerios
    const title=req.body.title;
    const imagelink=req.body.imagelink;
    const description=req.body.description;
    const price=req.body.price;

    const newcourse=await courses.create({ //importing from top
        title,
        description,
        imagelink,
        price 
    })
    res.json({
        messgae:"New course created successfully",courseId:newcourse._id
    })
})

// for looking at course 
router.get('/courses',adminmiddleware,(req,res)=>{
    courses.find({}).then(function(response){
        res.json({
            courses:response
        })
    })
})

module.exports=router;