var city = "";
var citySearch = $("#city-search");
var searchBtn = $("#search-btn");
var clearHistory = $("#clear-history");
var cityList = $("city-list");
var searchedCities = [];
var APIKey = "a0aca8a89948154a4182dcecc780b513"

//Variables for current forecast//
var cityName = $("#city-name");
var currentDate = $("#date");
var imgZero = $("#imgZero");
var todayTemperature = $("#todays-temperature");
var wind = $("#todays-wind");
var humidity = $("#todays-humidity");

//Variables for future forecasts//
var dateOne = $("#dateOne");
var imgOne = $("#imgOne");
var tempOne = $("#tempOne");
var windOne = $("#windOne");
var humidityOne = $("#humidityOne");

var dateTwo = $("#dateTwo");
var imgTwo = $("#imgTwo");
var tempTwo = $("#tempTwo");
var windTwo = $("#windTwo");
var humidityTwo = $("#humidityTwo");

var dateThree = $("#dateThree");
var imgThree = $("#imgThree");
var tempThree = $("#tempThree");
var windThree = $("#windThree");
var humidityThree = $("#humidityThree");

var dateFour = $("#dateFour");
var imgFour = $("#imgFour");
var tempFour = $("#tempFour");
var windFour = $("#windFour");
var humidityFour = $("#humidityFour");

var dateFive = $("#dateFive");
var imgFive = $("#imgFive");
var tempFive = $("#tempFive");
var windFive = $("#windFive");
var humidityFive = $("#humidityFive");


// Input sanitization i.e. making all text coming in consistent//
function citySearch(c) {
    for (var i = 0; i < searchedCities.length; i++) {
        if (c.toUpperCase() === searchedCities[i]) {
            return -1;
        }
    }
    return 1;
}

//Function to call API//
function currentWeather(city) {
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`)
        .then((response) => response.json())
        .then((data) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=imperial&appid=${APIKey}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                     //current date//
                    cityName.text(data.name);
                    currentDate.text(new Date(data.dt*1000).toLocaleDateString());
                    imgZero.html("<img src=" + ("https://openweathermap.org/img/wn/" + (data.weather[0].icon) + "@4x" + ".png") + ">");
                    todayTemperature.text(data.main.temp + "°F");
                    wind.text(data.wind.speed + "mph");
                    humidity.text(data.main.humidity + "%");

                    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=${APIKey}`)
                        .then((response) => response.json())
                        .then((data) => {


                            console.log(data);

                            //Tomorrow//
                            dateOne.text(data.list[8].dt_txt.split(" ")[0]);
                            imgOne.html("<img src=" + ("https://openweathermap.org/img/wn/" + (data.list[8].weather[0].icon) + "@2x" + ".png") + ">");
                            tempOne.text(data.list[8].main.temp + "°F");
                            windOne.text(data.list[8].wind.speed + "mph");
                            humidityOne.text(data.list[8].main.humidity + "%");

                            //+ 2 days//
                            dateTwo.text(data.list[16].dt_txt.split(" ")[0]);
                            imgTwo.html("<img src=" + ("https://openweathermap.org/img/wn/" + (data.list[16].weather[0].icon) + "@2x" + ".png") + ">");
                            tempTwo.text(data.list[16].main.temp + "°F");
                            windTwo.text(data.list[16].wind.speed + "mph");
                            humidityTwo.text(data.list[16].main.humidity + "%");

                            //+ 3 days//
                            dateThree.text(data.list[24].dt_txt.split(" ")[0]);
                            imgThree.html("<img src=" + ("https://openweathermap.org/img/wn/" + (data.list[24].weather[0].icon) + "@2x" + ".png") + ">");
                            tempThree.text(data.list[24].main.temp + "°F");
                            windThree.text(data.list[24].wind.speed + "mph");
                            humidityThree.text(data.list[24].main.humidity + "%");

                            //+ 4 days//
                            dateFour.text(data.list[32].dt_txt.split(" ")[0]);
                            imgFour.html("<img src=" + ("https://openweathermap.org/img/wn/" + (data.list[32].weather[0].icon) + "@2x" + ".png") + ">");
                            tempFour.text(data.list[32].main.temp + "°F");
                            windFour.text(data.list[32].wind.speed + "mph");
                            humidityFour.text(data.list[32].main.humidity + "%");

                            //+ 5 days//
                            dateFive.text(data.list[39].dt_txt.split(" ")[0]);
                            imgFive.html("<img src=" + ("https://openweathermap.org/img/wn/" + (data.list[39].weather[0].icon) + "@2x" + ".png") + ">");
                            tempFive.text(data.list[39].main.temp + "°F");
                            windFive.text(data.list[39].wind.speed + "mph");
                            humidityFive.text(data.list[39].main.humidity + "%");

                            //Console.log the results//
                            console.log(data)

                            searchedCities = [];
                            searchedCities.push(city.toUpperCase());
                            localStorage.setItem("cityname", JSON.stringify(searchedCities));
                            addToList(city);
                        })
                })
        });
    };

    //Adding searched cities to a list//
    function addToList(c) {
        var listEl = $("<li>" + c.toUpperCase() + "</li>");
        $(listEl).attr("class", "list-group-item");
        $(listEl).attr("data-value", c.toUpperCase());
        $(".city-list").append(listEl);
    }

    //Keeps the page from refreshing when you hit submit button//
    function showWeather(event) {
        event.preventDefault();
        if (citySearch.val().trim() !== "") {
            city = citySearch.val().trim();
            currentWeather(city);
        }
    };

    function searchResults(event) {
        var liEl = event.target;
        if (event.target.matches("li")) {
            city = liEl.textContent.trim();
            currentWeather(city);
        }
    }

    //Loading the last searched city//
    function lastSearchedCity() {
        $("ul").empty();
        var searchedCities = JSON.parse(localStorage.getItem("cityname"));
        if (searchedCities !== null) {
            searchedCities = JSON.parse(localStorage.getItem("cityname"));
            for (i = 0; i < searchedCities.length; i++) {
                addToList(searchedCities[i]);
            }
            city = searchedCities[i - 1];
            currentWeather(city);
        }
    }

    //Clearing search history//
    function clearSearchHistory(event) {
        event.preventDefault();
        searchedCities = [];
        localStorage.removeItem("cityname");
        document.location.reload();
    }

    $(document).on("click", searchResults);
    $(window).on("load", lastSearchedCity);
    $("#clear-history").on("click", clearSearchHistory);
    searchBtn.click(showWeather);