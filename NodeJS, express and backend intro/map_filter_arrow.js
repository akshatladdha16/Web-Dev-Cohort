// generic way of doing transformation
var arr=[1,2,3,4,5]
function transform(arr){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        ans[i]=arr[i]*2;
    }
    console.log(ans)
}
transform(arr);

//better and easy way to do it to transform is to map it 
const ans=arr.map(function(i){
    return i*2;
});
console.log("map way of transforming: "+ans);


// filter function : used for putting any filters in the array
const ans2=arr.filter(function(i){
    if(i%2==0){
        return true;
    }else return false;
})
console.log(ans2);

//arrow: function(req,res){} and (req,res)=>{} is same thing in javascript just syntax difference. 