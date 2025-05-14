//This address is run in webpage https://api.openweathermap.org/data/2.5/weather?q=germany&appid=f5562407ca2a1cf7cb97ca68c3a039ff&units=metric

const apiKey = "f5562407ca2a1cf7cb97ca68c3a039ff";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const search_box = document.querySelector(".search input");
const search_btn = document.querySelector(".search button");
const weather_img = document.querySelector(".Weather-img");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".Weather").style.display = "none"
    } else {
        var data = await response.json();

        console.log(data);
        // select city and temp , humidity,wind
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        //fetch related img 
        if (data.weather[0].main == "Clouds") {
            weather_img.src = "images/neww.png";
        }
        else if (data.weather[0].main == "Clear") {
            weather_img.src = "images/sun.png";
        }
        else if (data.weather[0].main == "Rain") {
            weather_img.src = "images/cloudy_9643864.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weather_img.src = "images/ drizzle_13882607.png";
        }
        else if (data.weather[0].main == "Mist") {
            weather_img.src = "images/ fog_17993043.png";
        }

        document.querySelector(".Weather").style.display = "block";
        document.querySelector(".error").style.display = "none"

    }
}
// search by city name
search_btn.addEventListener("click", () => {
    checkWeather(search_box.value);

})

