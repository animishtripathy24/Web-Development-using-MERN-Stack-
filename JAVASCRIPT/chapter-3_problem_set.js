const marks={
    anand:80,
    manish:30,
    rajat:75,
    lovish:50,
    rajnish:67
}
//q1
//we have to iterate over the objects and print the marks of the students
for(let i=0;i<Object.keys(marks).length;i++)
{
    console.log("The marks of the "+Object.keys(marks)[i]+" is "+Object.values(marks)[i]);
}
console.log();
//q2
//we have to do the same question using fo in loop
for (let key in marks)
{
    console.log("The marks of "+key+" is "+marks[key]);
}
// q4
//we have to write a function to find the mean of five numbers
function calculateMean(num1,num2,num3,num4,num5){
    let sum = num1+num2+num3+num4+num5;
    return sum/5;
}
console.log(calculateMean(1,2,3,4,5));

//using arrow function
const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4;
}
console.log(mean(1,2,3,4));