"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to fetch city and state information from a provided postal code
      Author: Chris Weaver
      Date:   2025.April.29

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
    let codeValue = postalCode.value;
    let countryValue = country.value;


    place.value = "";
    region.value = "";


    fetch(`https://api.zippopotam.us/${countryValue}/${codeValue}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - Unable to fetch data.`);
            }
            return response.json();
        })
        .then(json => {
            place.value = json.places[0]["place name"];
            region.value = json.places[0]["state abbreviation"];
        })
        .catch(error => {
            console.error(error);
});
}