// 4 concepts of Authentications : hashing, encryption, JWT(json web token)
const express=require("express");
const jwt=require("jsonwebtoken");
const jwtpass="12345";
const app=express()
//wheneevr using body in post 
app.use(express.json());
const users=[{
    username:"akshat@gmail.com",
    password:"12345",
    name:"akshat"
},
{
    username:"rai@gmail.com",
    password:"23456",
    name:"Rai"
},
{
    username:"laddha@gmail.com",
    password:"34567",
    name:"Laddha"
}]

function userexists(username,password){
    //logic to check if user exist in our db or not
    //methpod 1 to loop through loop and check.
    //method2 is to use arrya.some method 
    return users.some(user => user.username === username && user.password === password); 
    //here user acts as i in for loop. it just directly cehck if that exist or not
}

app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    if(!userexists(username,password)){
        res.status(403).json({
            msg:"user does not exist in our database"
        })
    };
    var token=jwt.sign({username:username},"shhhhh"); /// creates a token(convert to very long string)
    return res.json({
        token,
    });
})
//if everything is good with verification from jwt end then we can give them the users db info if not then we give them 403 status code
app.get('/users',(req,res)=>{
    const token=req.headers.authorization;
    // try and catch : try this code if it doesn't run then catch the error and do that operation
    try{
        const decoded=jwt.verify(token,jwtpass);//if not valid then it will throw a exception to catch. 
        const username=decoded.username;
        res.json({
            //only info of other users not themselves
            users:users.filter(function(value){
                if(value.username===username){
                    return false;
                }else {
                    return true;
                }
            })
        })
    }
    catch(err){
        return res.status(403).json({
            msg:"Invalid json",
        });
    };
})

app.listen(3000);