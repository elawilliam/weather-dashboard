var city = "";
var citySearch = $("#city-search");
var searchBtn = $("#search-btn");
var clearHistory = $("#clear-history");
var cityName = $("#cityName");
var temperature = $("todays-temperature");
var wind = $("todays-wind");
var humidity = $("todays-humidity");
var searchedCities = [];

function citySearch(c){
    for (var i=0; i<searchedCities.length; i++){
        if(c.toUpperCase()===searchedCities[i]){
            return -1;
        }
    }
    return 1;
}

var APIKey="a0aca8a89948154a4182dcecc780b513";
function showWeather(event){
    event.preventDefault();
    if(citySearch.val().trim()!==""){
        city=citySearch.val().trim();
        currentWeather(city);
    }
}
