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

function displayWeatherCondition(response) {
    console.log(response.data.name);
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    descriptionElement.innerHTML = response.data.weather[0].description;

humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML =  Math.round(response.data.wind.speed);
iconElement.setAttribute("src",`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
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
    let fahrenheitTemperature = (14 * 9) / 5 +32;
    alert(fahrenheitTemperature);
}



dateElement.innerHTML = formatDate(currentTime);


let fahrenheitLink = document.querySelector("#fahrenheitLink");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);





