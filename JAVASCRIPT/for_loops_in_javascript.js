for(let i=0;i<34;i++)
{
    console.log(i);
}
let a=[];
for(let i=0;i<34;i++)
{
    a.push(i);
}
console.log(a);

//for in loop
let obj={name:"John",age:25,city:"New York"};
for (let key in obj) {
    console.log(obj[key]);
}
//for in loop works with arrays which is iterable 

//for of loop :- This only works for iterable objects for eg: strings and objects
let arr=[1,2,3,4,5];
for(let value of arr){
    console.log(value);
}//usage with arrays
for(let a of "animish")
{
    console.log(a);
}//usage with the strings
