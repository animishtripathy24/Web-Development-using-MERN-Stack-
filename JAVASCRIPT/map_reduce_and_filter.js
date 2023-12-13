num=[2,4,5,6,7,8];
//map
let a=num.map((value)=>{
    // console.log(value*2);
    return value*2;
})
//the map method will return a new array while for each method will perform certain operations on the existing array elements

//we can also paas index and array with the value in the call back function of the map method
console.log(a);

//filter method
//this method also returns a new array just like map method
console.log(num.filter((value)=>{
    return value < 5;
}));

//reduce method
//reduce method is used to reduce the array to a single value
//it takes a callback function and an initial value
//the callback function takes two arguments the accumulator and the current value
//the accumulator is the result of the previous callback function call
//the current value is the value of the current element in the array
//the initial value is the second argument of the reduce method
let sum=num.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
});
console.log(sum);
