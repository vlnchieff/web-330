"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Chris Weaver
      Date:   2025 May 15

      Filename: project12-03.js
*/


$("article > h2").click(function() {
  let heading = $(this);
  let list = heading.next();
  let headingImage = heading.children("img");

  // Example action: Toggle the visibility of the list
  list.slideToggle(500);

  let currentSrc = headingImage.attr("src"); // Get current src value
    headingImage.attr("src", currentSrc === "plus.png" ? "minus.png" : "plus.png");
});

