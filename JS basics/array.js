//array operations
const arr=[1,2,3];
arr.shift();//removes first element of array, pop remobves last element
arr.unshift(3);//adds elemnent in front of array

const arr1=[4,5,6]

const finalarr=arr1.concat(arr);
console.log(finalarr);

//array iterations
// for each : it will call the function for each element of the array, expects a function as arg(conacept of funtiontion calback)
const initialarray=[1,2,3];
function logthing(str){
    console.log(str);
}
initialarray.forEach(logthing);//callbacking the logthing function to iterated logthing function FOR EACH element of array(initialarray)
