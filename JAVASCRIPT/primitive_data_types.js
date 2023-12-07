//there are seven types of data types in javascript
// NN BB SS U
let a=5 //number
let b=null//null
let c=true//boolean
let d=BigInt(567)+BigInt(3)//bigint
let e=Symbol('I am a symbol');//symbol
let f="My name is animish"
let g=undefined;
console.log(a,b,c,d,e,f,g);

//object is non primitive data type in javascript
const item={
    "Animish":true,
    "tripathy":false,
    "rohan":"MY name is rohan sarkar",
    "chintu":undefined,
    37:45
}
console.log(item["Animish"]);
console.log(Object.keys(item));
console.log(Object.values(item));