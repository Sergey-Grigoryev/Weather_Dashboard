// Common City buttons
var NYcityBtn = document.querySelector("#NYcityBtn");
var LAcityBtn = document.querySelector("#LAcityBtn");
var CHcityBtn = document.querySelector("#CHcityBtn");
var PHcityBtn = document.querySelector("#PHcityBtn");
var HOcityBtn = document.querySelector("#HOcityBtn");
var TOcityBtn = document.querySelector("#TOcityBtn");
var BOcityBtn = document.querySelector("#BOcityBtn");
var SFcityBtn = document.querySelector("#SFcityBtn");

// 5 day forcast cards
var day1Date = document.querySelector("#day1Date");
var day2Date = document.querySelector("#day2Date");
var day3Date = document.querySelector("#day3Date");
var day4Date = document.querySelector("#day4Date");
var day5Date = document.querySelector("#day5Date");

var day1Text = document.querySelector("#day1Text");
var day2Text = document.querySelector("#day2Text");
var day3Text = document.querySelector("#day3Text");
var day4Text = document.querySelector("#day4Text");
var day5Text = document.querySelector("#day5Text");

// City Search input
var citySearch = document.querySelector("#citySearch");
var citySearchBtn = document.querySelector("#citySearchBtn");

// Searched City Card
var searchedCity = document.querySelector("#searchedCity");
var searchedCityIcon = document.querySelector("#searchedCityIcon");
var searchedInfo1 = document.querySelector("#searchedInfo1");
var searchedInfo2 = document.querySelector("#searchedInfo2");
var searchedInfo3 = document.querySelector("#searchedInfo3");
var searchedInfoSm = document.querySelector("#searchedInfoSm");

// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// api key= bd6680cf3156c36b1545c11999cd572c

let currentLatLong;
function currentLoc() {
    fetch (
        "https://ipwhois.app/json/"
    )
    .then(function(locResponse) {
        return locResponse.json();
    })
    .then(function(locResponse) {
        currentLatLong = locResponse;
        console.log(locResponse);
        return currentLatLong;
    })
    .then(function(currentLatLong) {
        fetch (
            `https://api.openweathermap.org/data/2.5/onecall?lat=${currentLatLong.latitude}&lon=${currentLatLong.longitude}&units=imperial&appid=bd6680cf3156c36b1545c11999cd572c`
        )
        .then(function(openwmResponse) {
            return openwmResponse.json();
        })
        .then(function(openwmResponse) {
            searchedCity.textContent = currentLatLong.city;
            searchedCityIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + openwmResponse.current.weather[0].icon + "@2x.png");
            searchedInfo1.textContent = "Temp: " + openwmResponse.current.temp + "°F";
            searchedInfo2.textContent = "Feels like: " + openwmResponse.current.feels_like + "°F";
            searchedInfo3.textContent = "Wind: " + openwmResponse.current.wind_speed + "mph";
            searchedInfoSm.textContent = "Sunrise: " + moment.unix(openwmResponse.current.sunrise).format("hh:mm") + " am  |  Sunset: " + moment.unix(openwmResponse.current.sunset).format("hh:mm") + " pm";
            console.log(openwmResponse);
        })
    })
    
};
currentLoc();