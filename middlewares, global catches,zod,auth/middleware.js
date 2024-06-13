const express=require('express');
const app=express();

// ordinary way of using checks without using middlewares
app.get('/',(req,res)=>{
    const username=req.headers.username
    const pass=req.headers.pass
    const kidneyid=req.query.kidneyid

    if(username==="admin" && pass==="pass"){
        if(kidneyid==1 || kidneyid==2){
            res.json({
                'msg':"your kidney is fine and working."
            })
        }
    }
    res.status(400).json({'msg':'something is wrong with your inputs'});
})
//app.listen(3000); //now this is for just one route , what if we have multiple users and multiple ops to function then we have to write prechecks for everything. to avoid that we use middlewares

/**********************************************************************8 */

//how middlewares should be done for auth and input validation
function authmiddleware(req,res,next){
    if((username!=="admin" && pass!=="pass")){
        res.json({
            'msg':"wrong inputs, auth problem"
        })
    }
    else{
        next(); //to check kidney authenication, next is handled by express
    }
}
function kidneymiddleware(req,res,next){
    if(kidneyid!=1 || kidneyid!=2){
        res.json({
            msg:'wrong input, kidneyid is not authenticated'
        })
    }else{
        next(); //kidneyid auth done successfully
    }
}
app.get('/health',authmiddleware,kidneymiddleware,(req,res)=>{
    const username=req.headers.username
    const pass=req.headers.pass
    const kidneyid=req.query.kidneyid
    res.json({
        msg:'kidneys are working fine.'
    })
})
//app.listen(3000);

/************************************************************************ */
app.use(express.json());//whenever we want to use body params we have to specify in which format we want that
app.post('/healthy',(req,res)=>{
    //kidney=[1,2,4] expecting an array
    const kidney=req.body.kidney
    const kidneylength=kidney.length;
    res.send("you have "+kidneylength+" kidneys");
})
app.listen(3000);
