//to create a promise
const ticket=new Promise((resolve,reject)=>{
    const isBoarded=true;
    if(isBoarded)
    {
        resolve("You are in the flight");
    }
    else
    {
        reject("You flight has been cancelled");
    }
});

ticket.then((data)=>{
    console.log("The ticket has been received",data);
}).catch((data)=>{
    console.log("There was an error",data);
}).finally(()=>{
    console.log("I will always execute in all the cases");
});