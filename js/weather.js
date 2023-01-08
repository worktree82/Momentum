const API_KEY = "0133424729e0cb19b3a552da3034186f";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather div:first-child span");
        const weather = document.querySelector("#weather div:last-child span");
        
        city.innerText = `Your City is ${data.name}`;
        weather.innerText = `Weather : ${data.weather[0].main} / Temperature : ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
