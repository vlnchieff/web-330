"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Chris Weaver
      Date: March 23, 2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
function Timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timerID = null;
}

// Add the runPause() method
Timer.prototype.runPause = function(timer, minBox, secBox) {
  if (this.timeID) {
    // Pause the timer if it is running
    clearInterval(this.timeID);
    this.timeID = null;
  } else {
    // Start the timer if it is paused
    this.timeID = setInterval(() => this.countdown(timer, minBox, secBox), 1000);
  }
};

// Add the countdown() function
Timer.prototype.countdown = function(timer, minBox, secBox) {
  if (this.seconds > 0) {
    // Decrease seconds if greater than 0
    this.seconds -= 1;
  } else if (this.minutes > 0) {
    // Decrease minutes and reset seconds to 59 if minutes are greater than 0
    this.minutes -= 1;
    this.seconds = 59;
  } else {
    // Stop the timer when it reaches 0:0
    clearInterval(this.timeID);
    this.timeID = null;
  }

  // Update the displayed values
  minBox.value = this.minutes;
  secBox.value = this.seconds;
};



/*---------------Interface Code -----------------*/


/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");


let myTimer = new Timer(parseInt(minBox.value), parseInt(secBox.value));


minBox.onchange = function() {
  myTimer.minutes = parseInt(minBox.value);
};


secBox.onchange = function() {
  myTimer.seconds = parseInt(secBox.value);
};


runPauseTimer.onclick = function() {
  myTimer.runPause(myTimer, minBox, secBox);
};