console.log("hello world. I'm here")
// var , let , const ( we use let and const in real world applications) let-> values change possible , const not possible . No need to mention datatype when dealing with let const. just enter value
let a =5;
console.log(a);
a=10;
console.log(a);

const b=5;
console.log(b);
// b=19;
// console.log(b) here we will get error as we defined b as const and can't be changed once selected
//*********************************************************** */
//array and objects
let personarray=['akshat','ayush','abhinav']
for(let i=0;i<personarray.length;i++){
    console.log(personarray[i]);
}

//using array of objects(best way to store multiple info in one variable) in real world thisis how we store information with using one variable for multiple infosets
const allusers=[{
    firstname:'akshat',age:22
},{
    firstname:'ayush',age:23
},{
    firstname:'aman',age:24
}]

for(let i=0;i<allusers.length;i++){
    console.log("Name of "+(i+1)+"th user is "+allusers[i]['firstname']+" and age is "+allusers[i]['age'])
}
//********************************************************* */

//callbacks functions(veery important function concept wehn we want to use output in real time operations)
function addsum(num1,num2,fntocall){
    let result=num1+num2;
    fntocall(result);
}

function displayresult(data){
    console.log(data);
}
const ans=addsum(3,5,displayresult);//this is called called functions concept: we can use output directly from one function to other function without even calling the other function
//another example
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumofsomehting(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);
    return val1+val2;
}
const ans1=sumofsomehting(3,5,cube);
console.log(ans1);
//*********************************************** */

//good question
//how much time a function is taking to run(hint using Date API from Js)

function calculatesum(){
    let a=0;
    for(let i=0;i<10000000;i++){
        a=a+i;
    }
    return a;
}
const beforeDate=new Date();
const beforetime=beforeDate.getTime();//this will give us time before we exceute the function
calculatesum();
//now we calculte after time
const afterDate=new Date();
const aftertime=afterDate.getTime();

console.log(aftertime-beforetime);//time taken to run the function


//***************************************************** */
//JSON
const user={
    name:"Akshat",
    age:24
}
const finalperson=JSON.stringify(user);
//JSON.parse() converts JSON strings to JavaScript objects, while JSON.stringify() converts JavaScript objects to JSON strings
console.log(user);
//******************************************************* */