var apiKey = "a45105594dd7feb0a9436cca97d6a372";


var searchButton = document.querySelector("#search-button");

var cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", formSubmitHandler);

var cityInput = document.querySelector("#city-input");

var formSubmitHandler = function (event) {
	event.preventDefault();

	// get value from input element
	var city = cityInput.value.trim();

	if (city) {
		getUserRepos(city);
		nameInputEl.value = "";
	} else {
		alert("Please enter a GitHub username");
	}

	console.log(event);
};

function apiCall(city) {
	var apiLink = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}";

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
	}
}
