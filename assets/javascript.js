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

            console.log(data.rates);
            displayRes(data.rates)
        })
}

//conversion calculation
function displayRes(currency) {
    console.log(currency);

    var one = (selOne.value);
    var two = (selTwo.value);

    let firstRate = currency[one];
    let secRate = currency[two];

    // console.log(secRate);
    // console.log(firstRate);
    // console.log(parseFloat(inputBox.value));
    // console.log(((parseFloat(secRate) / parseFloat(firstRate)) * parseFloat(inputBox)));

    conversionVal.innerHTML = ((secRate / firstRate) * parseFloat(inputBox.value)).toFixed(2);

    displayConv.style.display = "";


}





//reset the results
function reset() {
    window.location.reload();
    document.getElementsByClassName(".conversionVal").innerHTML = "";
};

//test data retrieval

// function getApi() {
//     var requestUrl = "https://api.exchangerate-api.com/v4/latest/USD";

//     fetch(requestUrl)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {

//             console.log(data);

//         });
// }

// getApi();