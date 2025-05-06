/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Chris Weaver
  Date: 2025.May.06
  Filename: script.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {
    name: "Gordon Ramsay",
    specialty: "Fine Dining",
    weakness: "Impatience",
    restaurantLocation: "London"
  },
  {
    name: "Jamie Oliver",
    specialty: "Italian Cuisine",
    weakness: "Messy Kitchen Habits",
    restaurantLocation: "Essex"
  },
  {
    name: "Nigella Lawson",
    specialty: "Comfort Food",
    weakness: "Overindulgence",
    restaurantLocation: "New York"
  }
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success 80% of the time; otherwise, reject.
      if (Math.random() < 0.8) {
        // Uncomment the line below to simulate a fulfilled state:
        resolve(chefs[0]);
      } else {
        // Uncomment this line to simulate a rejection:
        reject("Data for Chef 1 is unavailable.");
      }
    }, 2000);
  });
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve(chefs[1]);
      } else {
        reject("Data for Chef 2 is unavailable.");
      }
    }, 4000);
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve(chefs[2]);
      } else {
        reject("Data for Chef 3 is unavailable.");
      }
    }, 6000);
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
// Using Promise.allSettled to wait for all chef promises to settle
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
  .then(results => {
    results.forEach((result, index) => {
      // Get the appropriate HTML container (chef1, chef2, or chef3)
      const container = document.getElementById(`chef${index + 1}`);

      if (result.status === "fulfilled") {
        // If fulfilled, update the container with chef data
        const chef = result.value;
        container.innerHTML = `
          <h2>${chef.name}</h2>
          <p><strong>Specialty:</strong> ${chef.specialty}</p>
          <p><strong>Weakness:</strong> ${chef.weakness}</p>
          <p><strong>Restaurant Location:</strong> ${chef.restaurantLocation}</p>
        `;
      } else {
        // If rejected, display an error message in the corresponding container
        container.innerHTML = `
          <h2 class="error">Error</h2>
          <p class="error">Failed to retrieve chef data: ${result.reason}</p>
        `;
      }
    });
  })
  .catch(error => {
    // Promise.allSettled itself does not reject, so this catch is for unexpected errors.
    console.error("Unexpected error: ", error);
  });