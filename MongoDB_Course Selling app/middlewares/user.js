const { User }=require("../db/index.js");

function Usermiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    User.findOne({
        username:username,
        password:password
    }).then(function(value){
        if(value){// value true means user exists
            next(); //then control flow through and accpets the requests 
        }else{
            res.status(403).json({
                msg:"User doesn't exist"
        })
        }
    })
}
module.exports=Usermiddleware;