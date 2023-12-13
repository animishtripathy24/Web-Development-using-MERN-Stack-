arr=[23,45,34,56,76,87,94,37];
//for loop
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
//using for each loop
arr.forEach((value)=>{
    console.log(value);
})

//if we have to convert any HTML collection or any strings into array then we use .from() method
let str="Animish Tripathy";
let arr1=Array.from(str);
console.log(arr1);

const obj={};
for(let i in arr1)
{
    obj[i]=arr1[i];
}
console.log(obj);
