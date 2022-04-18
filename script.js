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

    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round( response.data.wind.speed);

}

function search(event) {
    event.preventDefault();
    let apiKey = "b43108b2ba2aeeb8574bda790a0d6057" ;
    let city = document.querySelector("#city-input").value;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeatherCondition);


}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);


dateElement.innerHTML = formatDate(currentTime);





