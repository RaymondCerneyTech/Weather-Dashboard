var searchButton = document.querySelector("#search-button");
var cityForm = document.querySelector("#city-form");
var cityInput = document.querySelector("#city-input");

var todayCity = document.querySelector(".city-name");
var todayDate = document.querySelector(".main-date");
var todayIcon = document.querySelector(".main-icon");
var todayTemp = document.querySelector(".main-temp");
var todayWind = document.querySelector(".main-wind");
var todayHumidity = document.querySelector(".main-humidity");
var todayUV = document.querySelector(".uv-container");

var day1 = document.getElementById("day-1");
var day2 = document.getElementById("day-2");
var day3 = document.getElementById("day-3");
var day4 = document.getElementById("day-4");
var day5 = document.getElementById("day-5");

var dayDate = getElementsByClassName("date");
var dayIcon = getElementsByClassName("icon");
var dayTemp = getElementsByClassName("temp");
var dayWind = getElementsByClassName("wind");
var dayHumidity = getElementsByClassName("humidity");

var apiKey = "&appid=a45105594dd7feb0a9436cca97d6a372";

// lat={lat}&lon={lon}&exclude={part}&appid={API key}";
var url = "https://api.openweathermap.org/data/2.5/";
var weather = "weather?";
var one = "onecall?";
var units = "&units=imperial";
var iconURL = "http://openweathermap.org/img/wn/";

cityForm.addEventListener("submit", formSubmitHandler);

function getWeather(city) {
	currentCity = "";
	lat = "";
	lon = "";

	fetch(baseURL + weather + "q=" + city + ",us" + units + apiKey)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			currentCity = data.name;
			lat = data.coord.lat;
			lon = data.coord.lon;

			fetch(baseURL + one + "lat=" + lat + "&lon=" + lon + units + "&exclude=minutely,hourly,alerts" + apiKey)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					// Get current Weather information
					var today = new Date(data.current.dt * 1000);
					var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
					var icon = data.current.weather[0].icon;
					var iconDescription = data.current.weather[0].description;
					var temp = data.current.temp + "	\xB0F";
					var wind = data.current.wind_speed + " MPH";
					var humidity = data.current.humidity + " %";
					var UVIndex = data.current.uvi;

					todayCity.innerHTML = currentCity;
					todayDate.innerHTML = " (" + date + ") ";
					todayIcon.innerHTML = "<img src='" + iconURL + icon + ".png' alt='" + iconDescription + "'>";
					todayTemp.innerHTML = temp;
					todayWind.innerHTML = wind;
					todayHumidity.innerHTML = humidity;
					
					todayUV.innerText = UVIndex;
					if (UVIndex > 8) {
						todayUV.style.background = "red";
					}
					else if (UVIndex < 8 && UVIndex > 6) {
						todayUV.style.background = "orange";
					}
					else {
						todayUV.style.background = "green";
					}
				}
				);
		});
}