// stydying the concept of promises

// let meraPromise =new Promise(function(resolve,reject)
// {
//     setTimeout(function()
//     {
//         console.log('I am inside the promise');
//     },5000);
//     // resolve(2003);
//     reject(new Error('Galti se mistake ho gayi...'));
// });
// meraPromise.catch((error)=>{console.log("Error mil gaya.....")});
// console.log('pehla');


let wadaa1=new Promise(function(resolve,reject)
{
    setTimeout(()=>
    {
        console.log('set-timeout1 started....');
    },2000);
    resolve(true);
})

let output=wadaa1.then(()=>{
    let wadaa2=new Promise(function(resolve,reject)
    {
        setTimeout(()=>
        {
            console.log('set-timeout2 started....');
        },3000);
        resolve('wadaa2 resolved');
    })
    return wadaa2;
});

output.then((value)=>console.log(value));