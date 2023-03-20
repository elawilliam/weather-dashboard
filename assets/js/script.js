var city = "";
var citySearch = $("#city-search");
var searchBtn = $("#search-btn");
var clearHistory = $("#clear-history");
var searchedCities = [];
var APIKey = "a0aca8a89948154a4182dcecc780b513"

//Variables for current forecast//
var cityName = $("#city-name");
var currentDate = $("#date");
var temperature = $("#todays-temperature");
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
                    //current date//
                    cityName.text(data.city.name);
                    currentDate.text(data.list[0].dt_txt);
                    temperature.text(data.list[0].main.temp);
                    wind.text(data.list[0].wind.speed);
                    humidity.text(data.list[0].main.humidity);

                    //Tomorrow//
                    dateOne.text(data.list[1].dt_txt);
                    // imgOne.text(data.list[1].weather.icon);
                    tempOne.text(data.list[1].main.temp);
                    windOne.text(data.list[1].wind.speed);
                    humidityOne.text(data.list[1].main.humidity);

                    //+ 2 days//
                    dateTwo.text(data.list[2].dt_txt);
                    // imgOne.text(data.list[2].weather.icon);
                    tempTwo.text(data.list[2].main.temp);
                    windTwo.text(data.list[2].wind.speed);
                    humidityTwo.text(data.list[2].main.humidity);

                    //+ 3 days//
                    dateThree.text(data.list[3].dt_txt);
                    // imgOne.text(data.list[3].weather.icon);
                    tempThree.text(data.list[3].main.temp);
                    windThree.text(data.list[3].wind.speed);
                    humidityThree.text(data.list[3].main.humidity);

                    //+ 4 days//
                    dateFour.text(data.list[4].dt_txt);
                    // imgOne.text(data.list[4].weather.icon);
                    tempFour.text(data.list[4].main.temp);
                    windFour.text(data.list[4].wind.speed);
                    humidityFour.text(data.list[4].main.humidity);

                    //+ 5 days//
                    dateFive.text(data.list[5].dt_txt);
                    // imgOne.text(data.list[5].weather.icon);
                    tempFive.text(data.list[5].main.temp);
                    windFive.text(data.list[5].wind.speed);
                    humidityFive.text(data.list[5].main.humidity);

                    //Console.log the results//
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

