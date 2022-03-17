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


const url = "https://api.exchangerate-api.com/v4/latest/USD";


//variable handles
var inputBox = document.querySelector(".inputBox");
var convert = document.querySelector(".convert");
var selOne = document.querySelector(".dDown1");
var selTwo = document.querySelector(".dDown2");
var conversionVal = document.querySelector(".conversionVal");
var displayConv = document.getElementById("displayConv");
var selOneHolder;
var selTwoHolder;
var apiVal;





selOne.addEventListener("currency", (event) => {
    selOneHolder = '${event.target.value}';
});

selTwo.addEventListener("currency", (event) => {
    selTwoHolder = "${event.target.value}";
});

inputBox.addEventListener("input", amend);

function amend(val) {
    apiVal = val.target.value;
}

convert.addEventListener("click", obtainRes);

function obtainRes() {
    fetch(url)
        .then(currency => {
            return currency.json();
        }).then(displayRes);
}

function displayRes(currency) {

    let firstRate = currency.rates[selOne];
    let secRate = currency.rates[selTwo];
    conversionVal.innerHTML = ((secRate / firstRate) * inputBox).toFixed(2);
    displayConv.style.display = "block";
}





//reset the results
function reset() {
    window.location.reload();
    document.getElementsByClassName(".conversionVal").innerHTML = "";
};

//test data retrieval

function getApi() {
    var requestUrl = "https://api.exchangerate-api.com/v4/latest/USD";

    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            console.log(data);

        });
}

getApi();