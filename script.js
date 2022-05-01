function formatDate(date) {
    let hours = date.getHours();
if (hours < 10) {
    hours = `0${hours}`;
}



let minutes = date.getMinutes();
if (minutes < 10 ) {
    minutes = `0${minutes}`
}


let dayIndex = date.getDay();
let days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
     "Thursday", "Friday", "Saturday"
];
let day = days[dayIndex];

return `${day} ${hours}:${minutes}`;
}

function displayForecast(response) {
    console.log(response.data.daily);
    let forecastElement = document.querySelector("#weather-forecast");
    
    let forecastHTML = `<div class="row">`;
    let days = ["Tues", "Wed", "Thurs", "Fri", "Sat"];
days.forEach(function(day) {
    forecastHTML = forecastHTML + `<div class="col">
                <i class="fa-solid fa-cloud"></i>
               <div class="weather-forecast-date">
                ${day}  </div>
                <span class="weather-forecast-temperature-max">°55 </span>
                |<span class="weather-forecast-temperature-min">°11</span>
              </div> `;
            
});
        
              
forecastHTML = forecastHTML + `</div>`;

    forecastElement.innerHTML = forecastHTML;
   

function getForecast(coordinates) {
 console.log(coordinates);
 let apiKey = "b43108b2ba2aeeb8574bda790a0d6057";
 let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayForecast);

}
}

function displayWeatherCondition(response) {
    console.log(response.data.name);
    celsiusTemperature = response.data.main.temp;


    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(celsiusTemperature);
    descriptionElement.innerHTML = response.data.weather[0].description;




humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML =  Math.round(response.data.wind.speed);
iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

getForecast(response.data.coord);
}

function search(event) {
    event.preventDefault();
    let apiKey = "b43108b2ba2aeeb8574bda790a0d6057" ;
    let city = document.querySelector("#city-input").value;
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidityElement");
    let windElement = document.querySelector("#windElement");
    let iconElement = document.querySelector("#iconElement");

    


let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeatherCondition);


}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
let searchForm = document.querySelector("#search-form");


searchForm.addEventListener("submit", search);

function displayFahrenheitTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.remove("#active");
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 +32;
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
event.preventDefault();
let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);




;
}

let celsiusTemperature = null;


dateElement.innerHTML = formatDate(currentTime);


let fahrenheitLink = document.querySelector("#fahrenheitLink");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsiusLink");
celsiusLink.addEventListener("click", displayCelsiusTemperature);







