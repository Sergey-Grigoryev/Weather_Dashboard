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

var day1Text1 = document.querySelector("#day1Text1");
var day1Text2 = document.querySelector("#day1Text2");
var day1Text3 = document.querySelector("#day1Text3");
var day1Text4 = document.querySelector("#day1Text4");
var day2Text1 = document.querySelector("#day2Text1");
var day2Text2 = document.querySelector("#day2Text2");
var day2Text3 = document.querySelector("#day2Text3");
var day2Text4 = document.querySelector("#day2Text4");
var day3Text1 = document.querySelector("#day3Text1");
var day3Text2 = document.querySelector("#day3Text2");
var day3Text3 = document.querySelector("#day3Text3");
var day3Text4 = document.querySelector("#day3Text4");
var day4Text1 = document.querySelector("#day4Text1");
var day4Text2 = document.querySelector("#day4Text2");
var day4Text3 = document.querySelector("#day4Text3");
var day4Text4 = document.querySelector("#day4Text4");
var day5Text1 = document.querySelector("#day5Text1");
var day5Text2 = document.querySelector("#day5Text2");
var day5Text3 = document.querySelector("#day5Text3");
var day5Text4 = document.querySelector("#day5Text4");

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

let LatLong;

var DOMUpdate = function(openwmResponse) {
    // current city weather - currnet time
    searchedCity.textContent = LatLong.city + " - " + moment().format('MM/DD/YY, h:mm a');
    searchedCityIcon.setAttribute("src", "http://openweathermap.org/img/wn/" + openwmResponse.current.weather[0].icon + "@2x.png");
    searchedInfo1.textContent = "Temp: " + openwmResponse.current.temp + "°F | Feels like: " + openwmResponse.current.feels_like + "°F";
    searchedInfo2.textContent = "Humidity: " + openwmResponse.current.humidity + "%";
    searchedInfo3.textContent = "Wind: " + openwmResponse.current.wind_speed + "mph";
    searchedInfoSm.textContent = "Sunrise: " + moment.unix(openwmResponse.current.sunrise).format("hh:mm") + " am  |  Sunset: " + moment.unix(openwmResponse.current.sunset).format("hh:mm") + " pm";
    // 5 day forcast - current city
    day1Date.textContent = moment().add(1, 'days').format('MM/DD/YY');
    day2Date.textContent = moment().add(2, 'days').format('MM/DD/YY');
    day3Date.textContent = moment().add(3, 'days').format('MM/DD/YY');
    day4Date.textContent = moment().add(4, 'days').format('MM/DD/YY');
    day5Date.textContent = moment().add(5, 'days').format('MM/DD/YY');

    day1Text1.textContent = "Max: " + openwmResponse.daily[1].temp.max + "°F";
    day1Text2.textContent = "Min: " + openwmResponse.daily[1].temp.min + "°F";
    day1Text3.textContent = "Humidity: " + openwmResponse.daily[1].humidity + "%";
    day1Text4.textContent = "Wind: " + openwmResponse.daily[1].wind_speed + "mph";            
    day2Text1.textContent = "Max: " + openwmResponse.daily[2].temp.max + "°F";
    day2Text2.textContent = "Min: " + openwmResponse.daily[2].temp.min + "°F";
    day2Text3.textContent = "Humidity: " + openwmResponse.daily[2].humidity + "%";
    day2Text4.textContent = "Wind: " + openwmResponse.daily[2].wind_speed + "mph";
    day3Text1.textContent = "Max: " + openwmResponse.daily[3].temp.max + "°F";
    day3Text2.textContent = "Min: " + openwmResponse.daily[3].temp.min + "°F";
    day3Text3.textContent = "Humidity: " + openwmResponse.daily[3].humidity + "%";
    day3Text4.textContent = "Wind: " + openwmResponse.daily[3].wind_speed + "mph";
    day4Text1.textContent = "Max: " + openwmResponse.daily[4].temp.max + "°F";
    day4Text2.textContent = "Min: " + openwmResponse.daily[4].temp.min + "°F";
    day4Text3.textContent = "Humidity: " + openwmResponse.daily[4].humidity + "%";
    day4Text4.textContent = "Wind: " + openwmResponse.daily[4].wind_speed + "mph";
    day5Text1.textContent = "Max: " + openwmResponse.daily[5].temp.max + "°F";
    day5Text2.textContent = "Min: " + openwmResponse.daily[5].temp.min + "°F";
    day5Text3.textContent = "Humidity: " + openwmResponse.daily[5].humidity + "%";
    day5Text4.textContent = "Wind: " + openwmResponse.daily[5].wind_speed + "mph";
};

// on load find current location
function currentLoc() {
    fetch (
        "https://ipwhois.app/json/"
    )
    .then(function(locResponse) {
        return locResponse.json();
    })
    .then(function(locResponse) {
        LatLong = locResponse;
        return LatLong;
    })
    .then(function(LatLong) {
        fetch (
            `https://api.openweathermap.org/data/2.5/onecall?lat=${LatLong.latitude}&lon=${LatLong.longitude}&units=imperial&appid=bd6680cf3156c36b1545c11999cd572c`
        )
        .then(function(openwmResponse) {
            return openwmResponse.json();
        })
        .then(function(openwmResponse) {
            DOMUpdate(openwmResponse);
        })
    })
};
currentLoc();

citySearchBtn.addEventListener("click", function () {
    let cityQuery = citySearch.value.split(' ');
    if (cityQuery) {
        var city = cityQuery.join("+");
    }
    fetch (
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd6680cf3156c36b1545c11999cd572c`
    )
    .then(function(openwmResponse) {
        return openwmResponse.json();
    })
    .then(function(openwmResponse) {
        console.log(openwmResponse);
        DOMUpdate(openwmResponse);
    });
    
});