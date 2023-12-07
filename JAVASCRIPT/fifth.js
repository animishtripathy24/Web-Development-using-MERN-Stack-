// document.addEventListener("click",main);

// function main()
// {
//     alert("You have clicked the page");
// }


// let links=document.querySelectorAll('a');
// let thirdLink=links[2];

// thirdLink.addEventListener("click",function(event)
// {
//     event.preventDefault();
//     console.log('maza aagaya.....');
// });

// let myDiv=document.createElement('div');
// function paraStatus(event)
// {
//     console.log('para '+event.target.textContent);

// }
// myDiv.addEventListener('click',paraStatus);
// for(let i=1;i<=100;i++)
// {
//     let newElement=document.createElement('p');
//     newElement.textContent="This is the para"+i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element=document.querySelector('#wrapper');
element.addEventListener('click',function(event)
{
    if(event.target.nodeName==='SPAN')  {
        console.log('span pr hi click kiya hai'+event.target.textContent);
    }
})