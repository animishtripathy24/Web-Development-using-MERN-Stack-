//command to print the output on the console
console.log('Animish Tripathy');

//use of var and let keyword
let a=5;
console.log(a);

var b=10;
console.log(b);

//assignment operators
// >
console.log(3>5);
// <
console.log(2<7);
// >=
console.log(8>=4);
// <=
console.log(9<=6);
// ==
console.log(5==5);
// !=
console.log(4!=3);
// ===
console.log(null===undefined);
// !==
console.log(false!==true);

//Ternary Operator
let age=15;
let statusVote= (age >=18) ? 'I can vote':'I can not vote';
console.log(statusVote);

//demostration of switch case
let month = 7;
switch (month) {
        case 1:
            console.log('January');
        break;
        case 2:
            console.log('February');
        break;
        case 3:
            console.log('March');
        break;
        case 4:
            console.log('April');
        break;
        case 5:
            console.log('May');
        break;
        case 6:
            console.log('June');
        break;
        case 7:
            console.log('July');
        break;
        case 8:
            console.log('August');
        break;
        case 9:
            console.log('September');
        break;
        case 10:
            console.log('October');
        break;
        case 11:
            console.log('November');
        break;
        case 12:
            console.log('december');
        break;
        default:
            console.log('Invalid Month');
        break;
}

//for loop in JavaScript
for(let i=0;i<5;i++){
    console.log('This is '+ (i+1));
}