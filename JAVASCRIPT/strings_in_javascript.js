const name1="Animish";
console.log(name1);
//if we have to print the length of the string
console.log(name1.length);
//if we have to extracteach characters of the string then we can use for of loop or simple using square braces
for(let characters in name1)
{
    console.log(name1[characters]);
}
//if we have to convert string into array
const arr=[];
for(let i in name1)
{
    arr.push(name1[i]);
}
console.log(arr);

//use of template literal
let boy1="partik";
let boy2="kanishk";
console.log(`${boy1} is the friend of ${boy2}`);
//use of escape sequence
let str=`\n`;
console.log(str);
let demo='bana\'na';
console.log(demo);

//string methods in javascript
let s="animish";
//to find the length of the string
console.log(s.length);
//to covert the string in uppercase
console.log(s.toUpperCase());
//to convert the string in lowercase
console.log(s.toLowerCase());
//to slice the index of the string
console.log(s.slice(2,4));//must prints 'im' in the console
//if we do not give the second argument
console.log(s.slice(2));
console.log(s.replace("ni","mi"));
let friend1="kanishk";
let friend2="Pratik";
console.log(s.concat(" is the friend of ",friend1," and ",friend2));
let animal="           Dog           ";
console.log(animal.trim());


//all the strings are immutable and all the string methods returns a new strings
