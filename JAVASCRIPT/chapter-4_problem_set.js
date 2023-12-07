//q1
const str="ani\"";
console.log(str.length);

//q2
const str2="My name is animish tripathy";
const word="name";
console.log(str2.includes(word));//gives the output eiher true or false


//we have to extract a number from a given string
let str3="Please give me Rs 1000";
let amount=Number.parseInt(str3.slice(18));
console.log(amount);
console.log(typeof amount);

//string is immutable so we can not able to change the fourth character of the string

//but also javascript will not show any error
let str4="Animish";
str4[3]="y";
console.log(str4);

