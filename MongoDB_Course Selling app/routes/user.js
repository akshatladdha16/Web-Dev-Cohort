const { Router }=require("express")
const router=Router();
const usermiddleware=require('../middlewares/user.js')
const {User,courses}=require('../db/index.js')

router.post('/signup',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    User.create({
        username:username,
        password:password
    })
    res.json({
        msg:"User created successfully"
    })
    
})

router.post('/courses/:courseId',usermiddleware,async(req,res)=>{
    const courseId=req.params.courseId;
    //now we have to push to purchased array
    const username=req.headers.username;
    try{
        await User.updateOne({//returns a promise so always cath the error in real world cases
            username:username
        },{
            "$push":{
                purchasedCourses:courseId
            }}//referncing the course here to update existing data and push course by using it's course id
        )
    }catch(err){
        console.log(err);
    }
    res.json({
        msg:"Purchase complete"
    })
});

//view all the courses for user to purchase
router.get('/courses',async(req,res)=>{
    //no need to protect it here as get request to just show the courses
    //fteching all the course 
    const response=await courses.find({
        _id:{
            "$in":User.purchasedCourses //google how to find in particular list in databse formongodb
        }
    });//coz we need to find all the course and show it to user
    res.json({
        message:response
    })
})

module.export=router;