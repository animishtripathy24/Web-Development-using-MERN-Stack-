//synchronous execution
let a= 5;
console.log(a);
let b=6;
console.log(b);
let c=a+b;
console.log(c);

//example of asynchronous programming
console.log("start");
setTimeout(function(){
    console.log("end");
}, 2000);
console.log("start");