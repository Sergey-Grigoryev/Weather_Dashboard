// History City buttons
var citySearchBtn1 = document.querySelector("#citySearchBtn1");
var citySearchBtn2 = document.querySelector("#citySearchBtn2");
var citySearchBtn3 = document.querySelector("#citySearchBtn3");
var citySearchBtn4 = document.querySelector("#citySearchBtn4");
var citySearchBtn5 = document.querySelector("#citySearchBtn5");
var citySearchBtn6 = document.querySelector("#citySearchBtn6");
var citySearchBtn7 = document.querySelector("#citySearchBtn7");
var citySearchBtn8 = document.querySelector("#citySearchBtn8");

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
var uvImg = document.querySelector("#uvImg");

// Searched City History
var searchedCityHist = [];
citySearchBtn1.style.display = "none";
citySearchBtn2.style.display = "none";
citySearchBtn3.style.display = "none";
citySearchBtn4.style.display = "none";
citySearchBtn5.style.display = "none";
citySearchBtn6.style.display = "none";
citySearchBtn7.style.display = "none";
citySearchBtn8.style.display = "none";
var citySearchBtns = [citySearchBtn1, citySearchBtn2, citySearchBtn3, citySearchBtn4, citySearchBtn5, citySearchBtn6, citySearchBtn7, citySearchBtn8]

for (i = 0; i < 8; i++) {
    searchedCityHist.push(localStorage.getItem(i));
    if (searchedCityHist[i] !== 'undefined') {
        citySearchBtns[i].textContent = searchedCityHist[i];
        citySearchBtns[i].style.display = "flex";
    };
};

var saveCityHist = function(city) {
    searchedCityHist.unshift(city);
    if (searchedCityHist.length === 9) {
        searchedCityHist.pop();
    };
    localStorage.clear();
    for (i = 0; i < 8; i++) {
        localStorage.setItem(i, searchedCityHist[i]);
        if (searchedCityHist[i] !== 'undefined') {
            citySearchBtns[i].textContent = searchedCityHist[i];
            citySearchBtns[i].style.display = "flex";
        }
    }
};

let LatLong;
var DOMUpdate = function(openwmResponse, city) {
    // current city weather - currnet time
    searchedCity.textContent = city + " - " + moment().format('MM/DD/YY, h:mm a');
    searchedCityIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + openwmResponse.current.weather[0].icon + "@2x.png");
    searchedInfo1.textContent = "Temp: " + openwmResponse.current.temp + "°F | Feels like: " + openwmResponse.current.feels_like + "°F";
    searchedInfo2.textContent = "Humidity: " + openwmResponse.current.humidity + "%";
    searchedInfo3.textContent = "Wind: " + openwmResponse.current.wind_speed + "mph";
    searchedInfoSm.textContent = "Sunrise: " + moment.unix(openwmResponse.current.sunrise).format("hh:mm") + " am | Sunset: " + moment.unix(openwmResponse.current.sunset).format("hh:mm") + " pm | UV Index: " + openwmResponse.current.uvi;
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
    if (openwmResponse.current.uvi <= 3) {
        uvImg.setAttribute("src", "./assets/imgs/uvLow.png");
    } else if (openwmResponse.current.uvi > 7) {
        uvImg.setAttribute("src", "./assets/imgs/uvHigh.png");
    } else {
        uvImg.setAttribute("src", "./assets/imgs/uvMed.png");
    }
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
            DOMUpdate(openwmResponse, LatLong.city);
        })
    })
};

currentLoc();

var searchCity = function(city) {
            fetch (
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bd6680cf3156c36b1545c11999cd572c`
        )
        .then(function(openwmResponse) {
            return openwmResponse.json();
        })
        .then(function(openwmResponse) {
            let cityLat = openwmResponse.coord.lat;
            let cityLong = openwmResponse.coord.lon;
            let cityDisplay = openwmResponse.name;
            fetch (
                `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLong}&units=imperial&appid=bd6680cf3156c36b1545c11999cd572c`
            )
            .then(function(openwmResponse) {
                return openwmResponse.json();
            })
            .then(function(openwmResponse) {
                DOMUpdate(openwmResponse, cityDisplay);
                saveCityHist(cityDisplay);
                // searchedCityHistBtns.appendChild(document.createElement("BUTTON"));
            });
        });
    };

citySearchBtn.addEventListener("click", function() {
    let cityQuery = citySearch.value.split(' ');
    if (cityQuery) {
        var city = cityQuery.join("+");
    searchCity(city)
    };
});

citySearchBtn1.addEventListener("click", function(){
    var cityHistBtn = citySearchBtn1.textContent.split(' ');
    var city = cityHistBtn.join("+");
    searchCity(city);
});
citySearchBtn2.addEventListener("click", function(){
    var cityHistBtn = citySearchBtn2.textContent.split(' ');
    var city = cityHistBtn.join("+");
    searchCity(city);
});
citySearchBtn3.addEventListener("click", function(){
    var cityHistBtn = citySearchBtn3.textContent.split(' ');
    var city = cityHistBtn.join("+");
    searchCity(city);
});
citySearchBtn4.addEventListener("click", function(){
    var cityHistBtn = citySearchBtn4.textContent.split(' ');
    var city = cityHistBtn.join("+");
    searchCity(city);
});
citySearchBtn5.addEventListener("click", function(){
    var cityHistBtn = citySearchBtn5.textContent.split(' ');
    var city = cityHistBtn.join("+");
    searchCity(city);
});
citySearchBtn6.addEventListener("click", function(){
    var cityHistBtn = citySearchBtn6.textContent.split(' ');
    var city = cityHistBtn.join("+");
    searchCity(city);
});
citySearchBtn7.addEventListener("click", function(){
    var cityHistBtn = citySearchBtn7.textContent.split(' ');
    var city = cityHistBtn.join("+");
    searchCity(city);
});
citySearchBtn8.addEventListener("click", function(){
    var cityHistBtn = citySearchBtn8.textContent.split(' ');
    var city = cityHistBtn.join("+");
    searchCity(city);
});