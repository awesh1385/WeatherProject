

const apiKey="3b3eaf8583b5ad59c1c7e922dea34946";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");//it will select the input field
const searchBtn=document.querySelector(".search button");//select button

const weatherIcon=document.querySelector(".weather-icon");

// async function allow us to use await method thats why we used it
async function checkWeather(city){//we are taking city name as input from search box

const response=await fetch(apiUrl+city+`&appid=${apiKey}`);

if(response.status==404){
    document.querySelector(".error").style.display="block";
}
else{
// This data variable will hold the data of weather from api
var data =await response.json();

//updating the text of HTML file 
document.querySelector(".city").innerHTML=data.name;

//we will use math.round function to give round-figure value not in decimal
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

//here we are updating weather symbol as per api data
if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png";
}
else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png";
}
else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="images/dizzle.png";
}
else if(data.weather[0].main="Rain"){
    weatherIcon.src="images/rain.png";
}
else if(data.weather[0].main="Snow"){
    weatherIcon.src="images/snow.png";
}
else if(data.weather[0].main="Mist"){
    weatherIcon.src="images/mist.png";
}
//unhinding body
document.querySelector(".weather").style.display="block";
//error msg will be hidden while the city name is true
document.querySelector(".error").style.display="none";
}
}



//this will execute on button click
searchBtn.addEventListener("click",()=>{
    if(searchBox.value=="aurangabad"|| searchBox.value=="Aurangabad"){
        document.querySelector(".city").innerHTML="Sambhaji Nagar";
    }
    else{
    checkWeather(searchBox.value);//this will give the given value of search box as city name as we click the btn
    }
})
