//creating a http server
const express=require("express");
const app=express();

//creating memory object here
var users=[{    
    name:'John',
    kidneys:[{
        healthy:false
    }]
}]
app.get('/',function(req,res){
    //using doctor's functionality logic here to expose it to world. request will come one by one as js is single threaded
    const johnkidney=users[0].kidneys;
    const num_kidneys=johnkidney.length;//will check the number of entries in johnkidneys
    let healthykidney=0;
    for(let i=0;i<num_kidneys;i++){
        if(johnkidney[i].healthy){
            healthykidney++;
        }
    }
    const unhealthykidney=num_kidneys-healthykidney;
    res.json({
        'number of kidneys':num_kidneys,
        'number of healthy kidneys':healthykidney,
        'number of unhealthy kidneys':unhealthykidney,
    })
})
app.use(express); // then only we can use req.body for post command
app.post('/',function(req,res){//we send data in body
    //adding a new unhealthy kidnye everytime a request coming
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy,
    })
    res.json({
        msg:'done',
    })
})
// make every kiudney healthy in user: put request updates the data
app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})//return empty object here as we are just updating the result
})

//removing data
app.delete('/',function(req,res){
    //deleting the unhealthy kidney
    const newkidney=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        //only pushing healthy kidneys in new array
        if(users[0].kidneys[i].healthy==true){
            newkidney.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newkidney;
    res.json({
        msg:'done'
    })
})
app.listen(3000);//3000 port or doctor's room (taking space on internet) 



// note app.get('/:fileName',function(req,res){}) so here anything after / will take you to this get request only. no need for specific filename