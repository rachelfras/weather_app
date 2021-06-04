let apiKey = `fa1047ba99073894a88e54f4a5673a70`;

function showTemp(response) {
    let temp = Math.round(response.data.main.temp);
    let bigTemp = document.querySelector("#big-temp");
    bigTemp.innerHTML = temp;

    let city = document.querySelector("#searched-city");
    city.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
}

function input(event) {
    event.preventDefault();
    let units = "metric";
    let city = document.querySelector(".enter");
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}`;

    axios.get(`${apiUrl}&units=${units}&appid=${apiKey}`).then(showTemp);
    city.value = "";
}

function giveCurrent(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;

    axios.get(`${apiUrl}&units=${units}&appid=${apiKey}`).then(showTemp);
}

function findCurrent() {
    navigator.geolocation.getCurrentPosition(giveCurrent);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", input);
form.addEventListener("click", input);

let currentCity = document.querySelector(".current");
currentCity.addEventListener("click", findCurrent);


//week 4 homework - display time

let rightNow = new Date();

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = weekdays[rightNow.getDay()];
let appDay = document.querySelector("#weekday");
appDay.innerHTML = currentDay;

let hour = `0${rightNow.getHours()}`.slice(-2);
let minutes = `0${rightNow.getMinutes()}`.slice(-2);
let currentTime = `${hour}:${minutes}`;

let appTime = document.querySelector("#time");
appTime.innerHTML = currentTime;  
