//q1
let age=12;
if(age > 10 && age<20)
{
    console.log("You are here");
}
else
{
    console.log("You are not hare");
}

//q2
let age_me=12;
switch(age_me)
{
    case 12:
        console.log("you are 12");
        break;
    case 13:
        console.log("you are 13");
        break;
    default:
        console.log("default");
}

//q3
//we have to check wheteher the number is divisible by 2 and 3
function checkDivisibility(num)
{
    if (num%2==0 && num%3==0) 
    {
        return "The number "+num+" is divisible by both 2 and 3";
    } 
    else 
    {
        return "The number "+num+" is not divisible by both 2 and 3" ;
    }
}
console.log(checkDivisibility(6));
//q4
function checkDivisibility(num)
{
    if (num%2==0 || num%3==0) 
    {
        return "The number "+num+" is divisible by both 2 and 3";
    } 
    else 
    {
        return "The number "+num+" is not divisible by both 2 and 3" ;
    }
}
console.log(checkDivisibility(6));

//q5
let age1=18
console.log((age1 >= 18)?"you can drive":"you cannot drive");