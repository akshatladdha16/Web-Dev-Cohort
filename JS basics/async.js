// synchornous: somthing that runs sequentially.one thing at a time
// async : things happening parallely,side by side operation 
//context switch: switch btw task, but at a point one task in focus(human brain example)-> same is true for JS.
// so even if single threaded , we can delegate the task and make it kind of multithreaded(time taken reduced)

// JS-> can delegate and conetext swutch(using async functions), example setTimeout function

function findsum(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans=ans+i;
    }
    return ans;
}
function findsumtill100(){
    return findsum(100);
}
//settimeout: global asynchronouse function
setTimeout(findsumtill100,1000);//here js doesn't wait for 1 sec for it to complete the settimeout function task. it goes on to complete rest of task
console.log("hello world");//this will excute before settimeout shows that settimeout context swtched to when it gets completed
//********************* */

// common async functions: setTimeout, fs.readFile(to read a file from your filesysytem), Fetch(to fetch data from an API endpoint)

const fs=require("fs");//fs : filesystem module

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
}) //async call 
//file name, encoding type,function(error and then data)
console.log("hello world , running bvefore file reading");

//*********************************** */
// callbacks makes sense in only async functions, we can use output in other task without disturbinbg any prev running function

