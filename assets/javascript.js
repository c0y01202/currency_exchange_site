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