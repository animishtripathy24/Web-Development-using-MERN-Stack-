// stationary -> admitcard -> examination

function getStationary(callback)
{
    setTimeout(() => {
        const stationary = "pen pencil eraser sharpner";
        console.log('here is the stationary');
        callback(stationary);
    }, 2000);
    
}

function prepareAdmitCard(callback)
{
    setTimeout(() => {
        const admitCard = "Admit card";
        console.log('here is the admit card');
        callback(admitCard);
    }, 2000);
    
}

getStationary((stationary)=>{
    console.log('got the stationary');
    prepareAdmitCard((admitCard)=>{
        console.log('got the admit card');
    })
})
