//callback function
const calculate=(a,b,operation)=>{
    return operation(a,b);
}

const result=calculate(3,4,(a,b)=>{
    return a*b;
});

console.log(result);
