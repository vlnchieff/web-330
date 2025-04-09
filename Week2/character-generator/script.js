/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Chris Weaver
  Date: 2025Apr08
  Filename:
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return{
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getClass: function() {
      return characterClass;
    }
  };
}

document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
  const name = document.getElementById("heroName").value;
  const gender = document.getElementById("heroGender").value;
  const characterClass = document.getElementById("heroClass").value;

  // TODO: Create character
  const newCharacter = createCharacter(name, gender, characterClass);

  // TODO: Display character information
  const detailsDiv = document.getElementById("characterOutput");
  detailsDiv.innerHTML = `
    <h3>Character Created:</h3>
    <p>Name: ${newCharacter.getName()}</p>
    <p>Gender: ${newCharacter.getGender()}</p>
    <p>Class: ${newCharacter.getClass()}</p>
  `;
});