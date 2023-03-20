var city = "";
var citySearch = $("#city-search");
var searchBtn = $("#search-btn");
var clearHistory = $("#clear-history");
var cityName = $("#city-name");
var currentDate = $("#date");
var temperature = $("todays-temperature");
var wind = $("todays-wind");
var humidity = $("todays-humidity");
var searchedCities = [];
var APIKey = "a0aca8a89948154a4182dcecc780b513"
// var jsDateCreation = Date.now();
// var dateString = new Date((jsDateCreation * 1000).toLocaleString());

//Input sanitization i.e. making all text coming in consistent//
// function citySearch(c){
//     for (var i=0; i<searchedCities.length; i++){
//         if(c.toUpperCase()===searchedCities[i]){
//             return -1;
//         }
//     }
//     return 1;
// }

//Function to call API//
function currentWeather(city) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIKey}`)
        .then((response) => response.json())
        .then((data) => {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=${APIKey}`)
                .then((response) => response.json())
                .then((data) => {
                    cityName.text(data.city.name);
                    currentDate.text(data.list[0].dt_txt);
                    console.log(data)
                });
        })
};



function showWeather(event) {
    //Keeps the page from refreshing when you hit submit button//
    event.preventDefault();
    if (citySearch.val().trim() !== "") {
        city = citySearch.val().trim();
        currentWeather(city);
    }
}

searchBtn.click(showWeather);

