var searchButton = document.querySelector("#search-button");
var cityForm = document.querySelector("#city-form");
var cityInput = document.querySelector("#city-input");

var apiKey = "&appid=a45105594dd7feb0a9436cca97d6a372";

// lat={lat}&lon={lon}&exclude={part}&appid={API key}";
var url = "https://api.openweathermap.org/data/2.5/";
var weather = "weather?";
var one = "onecall?";
var units = "&units=imperial";
var iconURL = "http://openweathermap.org/img/wn/";

cityForm.addEventListener("submit", formSubmitHandler);

var formSubmitHandler = function (event) {
	event.preventDefault();
	// get value from input element
	var city = cityInput.value.trim();
	if (city) {
		getWeather(city);
		cityInput.value = "";
	} else {
		alert("Please enter a GitHub username");
	}
	console.log(event);
};

function getWeather(city) {}

function apiCall(city) {
	let request = new XMLHttpRequest();
	request.open("GET", apiLink);
	request.send();
	request.onload = () => {
		console.log(request);
		if (request.status === 200) {
			console.log(JSON.parse(request.response));
		} else {
			console.log("error ${request.status} ${request.statusTest}");
		}
	};
}
