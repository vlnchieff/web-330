"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Chris Weaver
      Date:   2025.April.18

      Filename: project09-02b.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

if (riderName) {
  riderName.textContent = sessionStorage.getItem("riderName");
}
if (ageGroup) {
  ageGroup.textContent = sessionStorage.getItem("ageGroup");
}
if (bikeOption) {
  bikeOption.textContent = sessionStorage.getItem("bikeOption");
}
if (routeOption) {
  routeOption.textContent = sessionStorage.getItem("routeOption");
}
if (accOption) {
  accOption.textContent = sessionStorage.getItem("accOption");
}
if (region) {
  region.textContent = sessionStorage.getItem("region");
}
if (miles) {
  miles.textContent = sessionStorage.getItem("miles");
}
if (comments) {
  comments.textContent = sessionStorage.getItem("comments");
}