//Code snippet from https://rapidapi.com/pcgs-group-pcgs-group-default/api/simple-currency-conversion/
// var axios = require("axios").default;

// var options = {
//     method: "GET",
//     url: "https://simple-currency-conversion.p.rapidapi.com/api/method/exchangerate",
//     params: {
//         to: "EUR",
//         from: "USD",
//         amount: "1",
//         format: "json",
//         decrease: "0",
//         increase: "0",
//     },
//     headers: {
//         "x-rapidapi-host": "simple-currency-conversion.p.rapidapi.com",
//         "x-rapidapi-key": "4df4500dd5mshf99aa84caaf6b7ep15be65jsn96b8040083bf",
//     },
// };

// axios
//     .request(options)
//     .then(function(response) {
//         console.log(response.data);
//     })
//     .catch(function(error) {
//         console.error(error);
//     });

//currency variable handles
var inputBox = document.querySelector(".inputBox");
var convert = document.querySelector(".convert");
var selOne = document.querySelector(".dDown1");
var selTwo = document.querySelector(".dDown2");
var conversionVal = document.querySelector(".conversionVal");
var displayConv = document.getElementById("displayConv");
var selOneHolder;
var selTwoHolder;
var apiVal;

//weather api key
// 41f9ce5c293e6a6ed2155651cd21af58

var zipCode = document.querySelector(".zip");
var submit = document.querySelector(".submit");
var weather = document.querySelector(".weather");
var weatherResult = document.querySelector(".weatherRes");
var zipHolder = "";



//currency api
const url = "https://api.exchangerate-api.com/v4/latest/USD";
// //weather api
const weathUrl = "http://api.openweathermap.org/geo/1.0/direct?q=&limit=1&appid=41f9ce5c293e6a6ed2155651cd21af58";

// function getZipApi() {
//     var weather = "http://api.openweathermap.org/geo/1.0/zip?zip=78244&appid=41f9ce5c293e6a6ed2155651cd21af58";

//     fetch(weather)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {

//             console.log(data);

//         });
// }

// function getWApi() {
//     var weather = "https://api.openweathermap.org/data/2.5/weather?lat=29.4793&lon=-98.3476&appid=41f9ce5c293e6a6ed2155651cd21af58";

//     fetch(weather)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {

//             console.log(data);

//         });
// }

// getZipApi();
// getWApi();

//convert from kelvin to f
function conversion(k) {
    return ((k - 273.15) * 9 / 5 + 32).toFixed(2);
}

//apply the value and display in weatherResult

submit.addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode.value + "&appid=41f9ce5c293e6a6ed2155651cd21af58")
        .then(res => res.json())
        // .then(data => console.log(zipCode.value))
        .then(data => {
            temperature = data.main.temp;

            // console.log(city);

            // conversion(temperature);
            // console.log(conversion(temperature));

            weatherResult.innerHTML = conversion(temperature);




        })
})

// function add(val) {
//     zipHolder = val.target.value;
// }

// //when convert button is clicked
// submit.addEventListener("click", wRes);

// function wRes() {
//     fetch(weathUrl)
//         .then(currency => {

//             return currency.json();
//         }).then(data => {




//             displayRes(data.temp)
//         })
// }









//utilize selection from first dropdown
selOne.addEventListener("currency", (event) => {
    selOneHolder = $(event.target.value);
});

//utilize selection from second dropdown
selTwo.addEventListener("currency", (event) => {
    selTwoHolder = $(event.target.value);
});

//get a handle on the input provided
inputBox.addEventListener("input", amend);

function amend(val) {
    apiVal = val.target.value;
}

//when convert button is clicked
convert.addEventListener("click", obtainRes);

function obtainRes() {
    fetch(url)
        .then(currency => {
            return currency.json();
        }).then(data => {


            displayRes(data.rates)
        })
}

//conversion calculation
function displayRes(currency) {


    var one = (selOne.value);
    var two = (selTwo.value);

    let firstRate = currency[one];
    let secRate = currency[two];

    // console.log(secRate);
    // console.log(firstRate);
    // console.log(parseFloat(inputBox.value));
    // console.log(((parseFloat(secRate) / parseFloat(firstRate)) * parseFloat(inputBox)));

    conversionVal.innerHTML = ((secRate / firstRate) * parseFloat(inputBox.value)).toFixed(2);



}





//reset the results
function reset() {
    window.location.reload();
    document.getElementsByClassName(".conversionVal").innerHTML = "";
};



//test data retrieval

// function getApi() {
//     var requestUrl = "";

//     fetch(requestUrl)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {

//             console.log(data);

//         });
// }

// getApi();