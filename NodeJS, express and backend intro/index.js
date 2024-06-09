//npm init -y to install package.json
const express=require("express"); //need to bring it from internet unlike fs likbrary

const app=express();//object created , express is a library that gives you high level comtructs to create http servers 
const port=process.env.PORT//(this is how we can access env variable)

app.get('/',function(req,res){ //get is method here, req contains headers,body, query parameters etc.
    res.send("Hello world.This is hosted on localhost:3000"); //response from backend to users request
})

app.post('/conversations',function(req,res){ // for this we need to take subdomains when creating website 
    res.send({
        msg:"2+2 is equals to 4",
    })
})
 
app.listen(port,function(){
    console.log(`example app listening on port ${port}`)
})