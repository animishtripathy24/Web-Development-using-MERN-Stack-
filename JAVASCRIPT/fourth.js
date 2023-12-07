console.log("Functions in javaScript...");

//function declaration
function run(distance,time)
{
    console.log("I am running");
    let dist=distance;
    let timeTaken=time;
    console.log("Total Distance Covered is "+dist+"km.");
    console.log("Total time taken is: "+timeTaken+"hrs");
}
//function call or invoking
console.log(run(12,2));

//in the case of simple function declaration we can write the function call either above the code or below it.

//but in the case of function assignment we cannot write the function call above the function declaration because function declaration method only shifts the function declaration at the top not the function assignment

//Named function assignment(with the name of the function)
let stand=function walk()
{
    console.log("I am walking");
}
stand();

//we can also assign the above variable into the another variable for eg: jump
let jump = stand;
jump();

//Anonymous function assignment(i.e. without the name of the function)
let swim = function()
{
    console.log("I am swimming");
}
swim();

function sum(a,b)
{
    //here the argument is object
    // console.log(typeof arguments);
    console.log(arguments);
    let total=0;
    for(let value of arguments)
    {
        total+=value;
    }
    return total;
}

console.log("The sum is:"+sum(1,2,3,4,5,6,7,8,9,10));

//using the rest operatoe we can store all the values in the array
function sum2(...args)
{
    // console.log(typeof args);
    console.log(args);
} 
sum(1,2,3,4,5,6,7,8);

//default arguments

function interest(p,r=6,t=10)
{
    return p*r*t/100;
}   
console.log(interest(1000));

//hack
console.log(interest(1000,undefined,8));

//getter setter
let person={
    fName: 'Love',
    lname: 'Babbar',
    get fullName()
    {
        return `$(person.fName) $(person.lName)`;

    },
    set fullName(value)
    {
        if(typeof value !== String)
        {
            throw new Error("garbage value");
        }
        let parts=value.split(" ");
        this.fName=parts[0];
        this.lName=parts[1];
    }
};
// person.fullName='rahul raj';
console.log(person.fName);


//try catch block
try
{
    person.fullName=1; 
}
catch(e)
{
    alert(e);
}
