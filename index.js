const URL = 'https://restcountries.eu/rest/v2/all';

// TOPIC : XHR - XMLHttpRequest
// WHY : To get the data from a given endpoint(URL)

// 1. Create an instance of XHR
// 2. Create/open a new connection
// 3. Send the request
// 4. Load the response and display required data

// NOTE : the response from the sent request is returned in 'response' variable

const req = new XMLHttpRequest();
req.open('GET', URL, true);
req.send();
req.onload = function(){
    const countriesData = JSON.parse(this.response);
    for(let country of countriesData){
        console.log(country.name)
    }
    // console.log(countriesData[0])
}
