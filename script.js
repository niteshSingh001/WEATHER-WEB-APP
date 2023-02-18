let weather = {
    apiKey: "831558aa2981f14a5efce33a87e33888",
    async fetchWeather(city) {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`);
            const data = await res.json();
            this.displayWeather(data);
        }
        catch (e) {
            alert('Enter Correct City Name');
        }
    },
    displayWeather(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = `Weather in ${name}`;
        document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector('.temp').innerHTML = `${temp}&#8451;`;
        document.querySelector(".humidity").innerText = `Humidity:${humidity} %`;
        document.querySelector(".wind").innerText = `Wind Speed:${speed} km/h`;
        document.querySelector(".weather").classList.remove("loading");
    },
    search() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector('.search button').addEventListener("click", function () {
    weather.search();
});
document.querySelector('.search-bar').addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }

});



weather.fetchWeather('Kanpur');