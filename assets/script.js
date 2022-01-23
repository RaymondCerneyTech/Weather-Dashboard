///// Elements /////
let pageActivityEl = document.querySelector("#page-activity-label");
let activityEl = document.querySelector("#page-activity");
let navEl = document.querySelector(".nav-button");
let contentLabelEl = document.querySelector("content-label");
let contentEl = document.querySelector(".content");
let pageNameEl = document.querySelector("#page-name");
let startEl = document.querySelector("#start");
///// End of elements //////

///// Element data /////

///// End of element data /////

///// Utility functions //////
function hideActivity() {
	timeRemainingEl.style.display = "none";
}

function showActivity() {
	timeRemainingEl.style.display = "inline-block";
}

function activityTimer() {
	interval = setInterval(ticker, 1000);
}

function pauseTimer() {
	clearInterval(interval);
}

function ticker() {
	activityNumber--;
	activityEl.innerText = activityNumber;
	if (activityNumber <= 0) {
		clearInterval(interval);
		console.log("number = 0");
	}
}
///// End of utility functions /////

//Default Event Listeners
navEl.addEventListener("click", navigate);
startEl.addEventListener("click", start);
///// End of Event Listeners /////

function navigate() {}

function start() {}

///// Application /////

function setup() {}
