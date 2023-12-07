// const counterValue=document.querySelector('#counter');

// const increment = () =>{
//     //get the value from tyhe UI
//     let value=parseInt(counterValue.innerText);

//     //increment the value
//     value=value+1;

//     //set the value back to the UI
//     counterValue.innerText=value;

// }
// const decrement = () => {
//         //get the value from tyhe UI
//         let value=parseInt(counterValue.innerText);

//         //increment the value
//         value=value-1;
    
//         //set the value back to the UI
//         counterValue.innerText=value;
    
// }

//Another Logic

const middleValue=document.querySelector('#counter');
let minus=document.querySelector('.b1');
let plus=document.querySelector('.b2');
minus.addEventListener('click',function()
{
    let result=parseInt(middleValue.innerText);
    result=result-1;
    middleValue.innerText=result;
})
plus.addEventListener('click',function(){
    let result=parseInt(middleValue.innerText);
    result=result+1;
    middleValue.innerText=result;
});