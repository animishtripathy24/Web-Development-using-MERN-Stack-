console.log("This is a weather API");
const API_KEY= "b0a5b6835e605fbe2e557ce11f3d5841"

function renderWeatherInfo()
{
    let newHeading=document.createElement("h1");

    newHeading.textContent=`The current weather in ${city} is: ${data?.main?.temp.toFixed(2)} deg celsius`;

    document.body.appendChild(newHeading);
}

async function showWeather()
{
    try{
        // let latitude=15.3333;
        // let longitude=74.0833;
        let city="goa";

        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data=await response.json();
        console.log("Weather data:->",data);
        renderWeatherInfo();
    }
    catch(err)
    {
        console.log("Fetching failed");
    }
}
async function getCustomWeatherDetails() {
    try{
        let latitude = 17.6333;
        let longitude = 18.3333;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?
                                lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    
        let data = await result.json();
    
        console.log(data);
    }
    catch(err) {
        console.log("Errror Found" , err);
    }

}


function switchTab(clickedTab) {

    apiErrorContainer.classList.remove("active");

    if (clickedTab !== currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if (!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
        } 
        else {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        //getFromSessionStorage();
        }

        // console.log("Current Tab", currentTab);
    }
}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("No geoLocation Support");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}
showWeather();