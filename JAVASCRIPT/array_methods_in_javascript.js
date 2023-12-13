//array methods

num=[1,2,3,45,56,67,78,89];
console.log(num.length);
//converting the array into string
let str=num.toString();
console.log(str);
console.log(typeof str);

//joining the array
let c=num.join('_');
console.log(c);

//pop returns the popped element from the last index
let poped=num.pop();
console.log(poped);

//pushing into the array
num.push(100);
console.log(num);
//shift returns the first element from the array
let shifted=num.shift();
console.log(shifted);
//unshift adds the element at the beginning of the array
num.unshift(10);
console.log(num);
//reverse the array
num.reverse();
console.log(num);
//splice method
num.splice(2,1);
console.log(num);
//finding the index of the element
let index=num.indexOf(45);
console.log(index);
//finding the last index of the element
let lastindex=num.lastIndexOf(45);
console.log(lastindex);
//slice method
let sliced=num.slice(2,4);
console.log(sliced);
//concat method
let concat=num.concat(100,200,300);
console.log(concat);
//includes method
let includes=num.includes(45);
console.log(includes);
//find method
let find=num.find(x=>x>50);
console.log(find);

//deleting and element of an array using delete operator
delete num[1];
console.log(num);
console.log(num.length);//one thing we have to keep in mind that the length of an array doesnot gets affected while using the delete operator.

//concating an array
//this will create a new array
//it will never affect the original arrays
let arr=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
let arr3=arr.concat(arr2);
console.log(arr);
console.log(arr2);
console.log(arr3);

//sorting the array
let num1=[556,4,53,1,345,222,544];
num1.sort();//this sort method modifies the original array
//also it sorts the array alphabetically
console.log(num1);

//we can also use custom compare function 
num1.sort((a,b)=>{
    return a-b;
})
console.log(num1);

//addding the elements using splice
let deletedValues=num1.splice(2,3,1021,1022,1023,1024);
console.log(num1);
console.log(deletedValues);//splice method returns a array whose typeof is object
//we can also use splice to delete the elements
let deletedValues2=num1.splice(2,3);
console.log(num1);


