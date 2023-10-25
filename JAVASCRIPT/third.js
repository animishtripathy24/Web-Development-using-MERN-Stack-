console.log('This is JavaScript ka third class');

//in javascript string can act as primitive datatype as well as object
let lastName='Tripathy';
let firstName=new String('Animish');
console.log(typeof firstName);//object 
console.log(typeof lastName);//string

//we can convert the primitive datatype into object by using a dot notation
console.log(lastName.length);
console.log(lastName.charAt(0));
console.log(lastName[7]);
console.log(lastName.endsWith(`thy`));
console.log(lastName.substring(0,2));
console.log(lastName.indexOf('p'));
console.log(lastName.concat('Animish'));
console.log(lastName.toUpperCase());
console.log(lastName.trim());
console.log(lastName.includes("Tri"))
//if we have to split the message according to the space then
let str="Hello Animish Tripathy How are you doing";
let words =str.split(' ');
console.log(words);

//we can print the way we want to using template literal(use of backtick character)
let message=
`My 
name is
Khan`;
console.log(message);

//date is also the inbuilt object in javascript
let date=new Date();
console.log(date);

let date2= new Date('June 20 1998 07:15');
console.log(date2);
let date3=new Date(1998,11,20,7);
console.log(date3);

//arrays
let arr=[1,2,3,4,5,6];
//push method is used to push the element at the back of the array
arr.push(7);
console.log(arr);
//pop method is used to remove the element from the end of the array and return that value
let poppedValue=arr.pop();
console.log(poppedValue);
console.log(arr);
//unshift method is used to insert the element at the beginning of the array
arr.unshift(-1,-2);
console.log(arr);
//shift method is used to remove the element from the start of the array and return that value
let shiftedValue=arr.shift();
console.log(shiftedValue);
console.log(arr);
//splice method is used to add or delete elements from any index position
arr.splice(2,0,'A','B','C','D');
console.log(arr);

//to delete we write it as
arr.splice(2,2);
console.log(arr);

//now if we want to search an element in an array
//case-1: we use indexOf() method which takes input the element as an argument and returns the index of the element in the array
//if the element is not present in the array then it returns -1
let numArr=[1,2,3,4,5,6];
let result=numArr.indexOf(7);
console.log(result);
//case-2: we use includes() function which takes input the element as an input
//and returns true if it presents in the array otherwise false
let result2=numArr.includes(7);
console.log(result2);
//case-3: Advanced version of indexOf()
let result3=[1,2,3,4,5];
console.log(result3.indexOf(2,2));
//array of objects
let students=[{name:'John',age:20},{name:'Mike',age:25}];
//search through indexOf() and includes() function
console.log(students.indexOf({name:'John',age:20}));
console.log(students.includes({name:'John',age:20}));
//we cannot able to search the objects in the array because they are present at the diffrent addresses

//we can do it using callback function inside a find function
let student=students.find(function(student)
{
    return student.name==='John';
})
console.log(student);

//we can short the representation using arrow function
let studentName=students.find((student)=>student.name=='John')
console.log(studentName);

//emptying an array
let emptyArray=[1,2,3,4,5];
emptyArray.length=0;
console.log(emptyArray);

//another way we can use splice method
emptyArray.splice(0,emptyArray.length);
console.log(emptyArray);

//combining a arrray
let fruits1=['apple','banana'];
fruits1.push('orange');
let fruits2=['grapes','litchi','mango'];
fruits2.unshift('kiwi');

//we can combine it using concat function
let combinedFruit=fruits1.concat(fruits2);
console.log(combinedFruit);

//slicing an array
let slicedArray=fruits1.slice(1,3);
console.log(slicedArray);

//concatenating a array
let first=[1,2,3,4,5,6];
let second=[7,8,9,10,11,12];
let combined=[...first,'a',...second,'b'];
console.log(combined);


//iterating over an arrays
for(let val of arr)
{
    console.log(val);
}

//we can also iterate it using for each loop
arr.forEach(function(number)
{
    console.log(number);
})
//coverting it into a arrow function
arr.forEach(val=>console.log(val));

//joining an array
let joinedString = arr.join(",");
console.log(joinedString);

//sorting an array
arr=[20,60,50,90,10,30,40];
let sortedArr=arr.sort();
console.log(sortedArr);

//reversing an array
let reversedArr=arr.reverse();
console.log(reversedArr);

//filtering an array
let numbers=[1,2,-1,-4];
let filtered=numbers.filter(value=> value>=0);

console.log(filtered);

//mapping an array
let num=[7,8,9,10];
console.log(num);
let items=num.map(function(value)
{
    return 'student_no'+value;
})
console.log(items);
let newNumbers=numbers.map((num)=>{return num*2});
console.log(newNumbers);


let finalArr=[1,2,-6,-9];
let filteredarr=numbers.filter(value=> value>=0);

let items_new=filtered.map(function(num)
{
    return {value:num};
})
console.log(items_new);

