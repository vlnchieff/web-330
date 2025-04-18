"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Chris Weaver
      Date:   2025April18

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");


for(let piece of pieces){
  piece.addEventListener("pointerdown", grabPiece);
}

function grabPiece(event) {
  pointerX = event.clientX;
  pointerY = event.clientY;

  event.target.style.touchAction = "none";

  zCounter++;
  event.target.style.zIndex = zCounter;

  pieceX = event.target.offsetLeft;
  pieceY = event.target.offsetTop;

  event.target.addEventListener("pointermove", movePiece);
  event.target.addEventListener("pointerup", dropPiece);
}

function movePiece(event){
  let diffX = event.clientX - pointerX;
  let diffY = event.clientY - pointerY;
  event.target.style.left = (pieceX + diffX) + "px";
  event.target.style.top = (pieceY + diffY) + "px";
}

function dropPiece(event) {
  event.target.removeEventListener("pointermove", movePiece);
  event.target.removeEventListener("pointerup", dropPiece);
}