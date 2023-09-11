
const apiKey ="32f74b6f3fe54cf117e6a79fef45f035";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon");


async function checkWeather(city){
    const respone =await fetch(apiUrl+city +`&appid=${apiKey}`);
    var data=await respone.json();
 
    document.querySelector(".city").innerHTML=data.name ;   
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " Km/h";

    if (data.weather[0].main=="Drizzle"){
        weatherIcon.src="Images/drizzle.png"  
    }
    else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="Images/clouds.png"  
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="Images/clear.png"  
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="Images/snow.png"  
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="Images/rain.png"  
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="Images/mist.png"  
    }
    
    document.querySelector(".weather").style.display="block";
}

function handleSearch(){
    checkWeather(searchBox.value)
}
 
searchBtn.addEventListener("click",()=>{
    handleSearch()
})
searchBox.addEventListener("keydown",()=>{
    if (event.keyCode === 13) {
    handleSearch();
}
})