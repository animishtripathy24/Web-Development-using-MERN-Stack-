let a = "34";
console.log(typeof a);

//this prompt always returns a string
//if we want it to convert it into number
a = Number.parseInt(a);  //parseint converts it to an integer
console.log(typeof(a));

//if elseif else 
if(a<9)
{
    console.log('you cannot even think of driving')
}
else if(a>9 && a<=18)
{
    console.log('you can have learning license');
}
else{
    console.log('you can think of driving you are above 18');
}

//writing the above program using switch statement
let age=3;
switch(age)
{
case(age < 9):
    console.log("you cannot even think of driving");
    break;
case (age > 9 && age <= 18):
    console.log("you can have learning license");
    break;
default:
    console.log("you can think of driving you are above 18")
}

//ternary operator
let marks=20;
console.log (marks>10 ? "Yes":"No");
