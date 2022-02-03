var searchButton = document.querySelector("#search-button");

var cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", formSubmitHandler);

var cityInput = document.querySelector("#city-input");

var formSubmitHandler = function (event) {
	event.preventDefault();
	console.log(event);
};