//q1
num=[1,7,24,33,34,5,56,67,78,89,];
console.log(num);
num.push(234);
console.log(num);

//q2
let a=num.filter((value)=>{
    return value%2==0;
});
console.log(a);

//q3
//we have to return an array which contains square of the given elements
let b=num.map((value)=>{
    return value*value;
});
console.log(b);

//q4
let nums=[1,2,3,4,5,6,7,8];
let c=nums.reduce((accumulator,currentValue)=>{
    return accumulator*currentValue;
});
console.log(c);