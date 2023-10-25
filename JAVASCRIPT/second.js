console.log('Chaliye shuru karte hai.....');

//object creation
// const Rectangle = {
//     length:10,
//     breadth:30,
//     //now if we have to add behaviour
//     draw: function() {
//         console.log('My Name is Animish Tripathy');
//     }
// }
// console.log(Rectangle);
// console.log(Rectangle.draw());

//object creation using factory function
function createRectangle()
{
    let Rectangle = {
        length:10,
        breadth:30,
        //now if we have to add behaviour
        draw() {
            console.log('My Name is Animish Tripathy');
        }
    }
    return Rectangle;
}

let obj1=createRectangle();
console.log(obj1);

//now passing the parameters in the function 
function createRectangleParams(len,br)
{
    let Rectangle = {
        length:len,
        breadth:br,
        //now if we have to add behaviour
        draw() {
            console.log('Drawing a rectangle....');
        }
    }
    return Rectangle;
}

//creating object
let obj2=createRectangleParams(5,4);
let obj3=createRectangleParams(7,9);
// console.log(obj2.length);
// console.log(obj2.breadth);
// console.log(obj2.draw());
console.log(obj2);
console.log(obj3);

//object creation using constructor function
function RectangleConstructor(len,br)
{
    this.length=len;
    this.breadth=br;
    this.area=function(){return len*br;}
    this.perimeter=function(){return (len+br)*2;}
}
let rectObj1=new RectangleConstructor(6,8);
let rectObj2=new RectangleConstructor(5,7);
console.log(rectObj1);
console.log(rectObj2);


//dynamic nature of the objects
//we can add any property as well as we can delete any property
let rectObj3=new RectangleConstructor(10,40);
rectObj3.color='Red';
rectObj3.size='Large';
console.log(rectObj3);

//we can also delete the properties of the objects
delete rectObj3.color;
console.log(rectObj3);


//primitive or value datatype vs reference data type

//in the case of primitive data types copy will be created

let a=10;
let b = a; //here the b is the copy of a
a++;
console.log(a);
console.log(b);

//but if we are dealing with the reference data types like arrays,functions and objects
//then it's not the copy but the actual memory location is shared between them
let ref = {value:10};
let def=ref;
def.value+=10;
console.log(ref.value);
console.log(def.value);

//Note: primitives are copied by their value
//Objects and Arrays are copied by reference

let A=10;
console.log(typeof(A));
function inc(A)//here A is a primitive data type hence the copy of  
{
    A++;
    console.log('This is inside the function '+A);
}
inc(A);
console.log('This is outside the function '+A);

let C={value:10};//here C is Reference data type
console.log(typeof(C));
function incRef(C){
    C.value++;
    console.log('This is inside the function '+C.value);
}
    incRef(C);
    console.log('This is outside the function '+C.value);

//for-in loop
let person = {
    name:"John", 
    age: 25, 
    city: "New York"
};
// for (let key in person) {
//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key,person[key]);
// }

//for-off loop
// we can use for-off loop in iterable loops for eg:arrays
for(let key of Object.entries(person))
{
    console.log(key);
}

//agar hume find karna hai..ki koi property kisi object ke andar present hai ya ni.....
if('color' in person)
{
    console.log('Present');
}
else
{
    console.log('Absent');
}

//now we will learn about object cloning
//copying person object into destination object
//Case-1 : Using Iteration
let dest={};
for(key in person)
{
    dest[key]=person[key];
}
console.log(dest.age);

//Case-2 : Using assign function
let dest_assign=Object.assign({},person);
console.log(dest_assign.name);

//Case-3 : Using spread operator
let dest_spread={...person};
console.log(dest_spread.city);
