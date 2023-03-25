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
                    // imgZero.html("<img src=" + ("https://openweathermap.org/img/wn/"+(data.list[0].weather.icon) + ".png")+ ">");
                    temperature.text((data.list[0].main.temp - 273.15)* 1.80 +32 + "°F");
                    wind.text(data.list[0].wind.speed * 2.237 +  "mph");
                    humidity.text(data.list[0].main.humidity + "%");

                    //Tomorrow//
                    dateOne.text(data.list[1].dt_txt);
                    // imgOne.html("<img src=" + ("https://openweathermap.org/img/wn/"+(data.list[1].weather.icon) + ".png")+ ">");
                    tempOne.text((data.list[1].main.temp - 273.15)* 1.80 +32 + "°F");
                    windOne.text(data.list[1].wind.speed * 2.237 +  "mph");
                    humidityOne.text(data.list[1].main.humidity + "%");

                    //+ 2 days//
                    dateTwo.text(data.list[9].dt_txt);
                    // imgTwo.html("<img src=" + ("https://openweathermap.org/img/wn/"+(data.list[9].weather.icon) + ".png")+ ">");
                    tempTwo.text((data.list[9].main.temp - 273.15)* 1.80 +32 + "°F");
                    windTwo.text(data.list[9].wind.speed * 2.237 +  "mph");
                    humidityTwo.text(data.list[9].main.humidity+ "%");

                    //+ 3 days//
                    dateThree.text(data.list[17].dt_txt);
                    // imgThree.html("<img src=" + ("https://openweathermap.org/img/wn/"+(data.list[17].weather.icon) + ".png")+ ">");
                    tempThree.text((data.list[17].main.temp - 273.15)* 1.80 +32 + "°F");
                    windThree.text(data.list[17].wind.speed * 2.237 +  "mph");
                    humidityThree.text(data.list[17].main.humidity + "%");

                    //+ 4 days//
                    dateFour.text(data.list[25].dt_txt);
                    // imgFour.html("<img src=" + ("https://openweathermap.org/img/wn/"+(data.list[25].weather.icon) + ".png")+ ">");
                    tempFour.text((data.list[25].main.temp - 273.15)* 1.80 +32 + "°F");
                    windFour.text(data.list[25].wind.speed * 2.237 +  "mph");
                    humidityFour.text(data.list[25].main.humidity + "%");

                    //+ 5 days//
                    dateFive.text(data.list[33].dt_txt);
                    // imgFive.html("<img src=" + ("https://openweathermap.org/img/wn/"+(data.list[33].weather.icon) + ".png")+ ">");
                    tempFive.text((data.list[33].main.temp - 273.15)* 1.80 +32 + "°F");
                    windFive.text(data.list[33].wind.speed * 2.237 +  "mph");
                    humidityFive.text(data.list[33].main.humidity + "%");

                    //Console.log the results//
                    console.log(data)

                    // if(response.cod==200){
                    //     searchedCities=JSON.parse(localStorage.getItem("cityname"));
                    //     /* console.log(sCity); */
                        if (searchedCities==null){
                            searchedCities=[];
                            searchedCities.push(city.toUpperCase()
                            );
                            localStorage.setItem("cityname",JSON.stringify(searchedCities)).push(city);
                        }
                        else {
                                searchedCities.push(city.toUpperCase());
                                localStorage.setItem("cityname",JSON.stringify(searchedCities)).push(city);
                                city.text
                            }
                    })
                });
        };

        // function addToList(c){
        //     var listEl= $("<li>"+c.toUpperCase()+"</li>");
        //     $(listEl).attr("class","list-group-item");
        //     $(listEl).attr("data-value",c.toUpperCase());
        //     $(".list-group").append(listEl);
        // }

function showWeather(event) {
    //Keeps the page from refreshing when you hit submit button//
    event.preventDefault();
    if (citySearch.val().trim() !== "") {
        city = citySearch.val().trim();
        currentWeather(city);
    }
}

searchBtn.click(showWeather);

