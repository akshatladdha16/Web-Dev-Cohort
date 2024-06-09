// promises is just a syntactical way to write async functions calbacks

//creating our own async function using callbacks: METHOD 1
const fs=require("fs");
function myownasync(cb){
    fs.readFile('a.txt','utf-8',function(err,data){
        cb(data);
    })
};
function ondone(data){
    console.log(data);
};
myownasync(ondone);

//************************* */
// using promise to write async function instead of callbacks: METHOD 2

function myownasync2(){
    console.log("before promise");//tocheck which code is working in whjat order 
    return new Promise(function(resolve){   //promise is just another class in JS and excpets a function that get resolves as argument and returns async function ka promise. 
        console.log("inside promise");
        fs.readFile('a.txt','utf-8',function(err,data){
            resolve(data);//this returns promise
        });
    });
}
myownasync2().then(ondone);
//************************** */
//async awaits : another syntactic sugar instead of using promises we use await which finally gives value and not promise: METHOD 3
//we are still using promise just we will make our callback function a async one
async function main(){
    let value=await myownasync2();// thios lne returns a callback and when called the function it gives us the value
    console.log(value);
}
main();
console.log("after main");
//*********************************** */

function sum(a,b){
    return new Promise(function(resolve){ //return promise
        resolve(a+b);
    })
}
sum(12,12).then(function(ans){ //return value 
    console.log(ans);
})