/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Chris Weaver
  Date: 2025 May 14
  Filename: script.js
*/

"use strict";
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}


const movies = [
  // Add your movie objects here
  {
    title: "Blackenstein",
    director: "Jim R. Brown",
    releaseYear: "1973",
    synopsis: "A horror-thriller that features a black man who is reanimated as a monster after being experimented on."
  },
  {
    title: "Superfly",
    director: "Gordon Parks Jr.",
    releaseYear: "1972",
    synopsis: "A crime drama that follows a cocaine dealer who is trying to make one last big score before retiring.",
  },
  {
    title: "The Mack",
    director: "Michael Campus",
    releaseYear: "1973",
    synopsis: "A crime drama that follows a pimp who is trying to reclaim his territory after being released from prison.",
  },
  {
    title: "Willie Dynamite",
    director: "Gilbert Moses",
    releaseYear: "1974",
    synopsis: "A crime drama that follows a successful pimp who is trying to maintain his lifestyle while dealing with the police.",
  }

];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const movie = movies.find(m => m.title.toLowerCase() === title.toLowerCase());
        if (movie) {
            resolve(movie);
        } else {
            reject(new Error(`Movie titled "${title}" not found.`));
        }
    }, 1000); // Simulating network delay
});
}

async function displayMovie(event) {
  event.preventDefault(); // Prevent form submission

  const titleInput = document.getElementById("title-input").value.trim();
  const movieContainer = document.getElementById("movieContainer");

  if (!titleInput) {
    movieContainer.innerHTML = `<p style="color: red;">Please enter a movie title.</p>`;
    return;
  }

  try {
    const movie = await fetchMovie(titleInput);
    movieContainer.innerHTML = `
      <h2>${movie.title} (${movie.releaseYear})</h2>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Synopsis:</strong> ${movie.synopsis}</p>
    `;
  } catch (error) {
    movieContainer.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}

document.getElementById("movie-form").addEventListener("submit", displayMovie);