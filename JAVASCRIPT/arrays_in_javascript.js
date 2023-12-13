//defining a array
a=[91,84,65,78,false,'Not Present'];
console.log(a);

//adding new element to the array
a[6]="Present But exam not given";
console.log(a);

//changing the value of an array
a[1]=87;
console.log(a);
//this is because arrays are mutable and the values can be changed

//in javascript arrays are type of object

//printing the value of array using for in loop
console.log(typeof a);
for(let i in a){
    console.log(a[i]);
}
//printing the value of array using for of loop
for(let i of a){
    console.log(i);
}
//printing the value using simple for loop
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}
