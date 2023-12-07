//last class code
const t1=performance.now();
for(let i=1;i<=10000;i++)
{
    let myPara=document.createElement('p');
    myPara.textContent='This is ParaNo. '+i;
    document.body.appendChild(myPara);
}
const t2=performance.now();
console.log('This took '+(t2-t1)+'ms');


//optimising a bit
const t3=performance.now();
let myDiv=document.createElement('div');
for(let i=1;i<=10000;i++)
{
    let element=document.createElement('p');
    element.textContent='This is ParaNo.' + i;
    myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
const t4=performance.now();
console.log('This took '+(t4-t3)+'ms');

//optimising the code using document fragment so as to make 1 reflow and 1 repaint
const t5=performance.now();
let fragment=document.createDocumentFragment();
for(let i=1;i<=10000;i++)
{
    let myPara=document.createElement('p');
    myPara.textContent='This is ParaNo. '+i;
    fragment.appendChild(myPara);
}
document.body.appendChild(fragment);//in this case there is one 1 repaint and 1 reflow
const t6=performance.now();
console.log('This took '+(t6-t5)+'ms');
