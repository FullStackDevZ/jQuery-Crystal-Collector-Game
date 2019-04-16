var wins = 0;
var losses = 0;
var total = 0;  //total score

// Sets the # the comp picks to range from 19 to 120.
var compNum = parseInt(Math.random() * (120 - 19) + 19);

// Renders the crystals
var crystal = {
  red: {
    name: "Red",
    value: 0
  },
  green: {
    name: "Green",
    value: 0
  },
  orange: {
    name: "Orange",
    value: 0
  },
  purple: {
    name: "Purple",
    value: 0
  }
}

// Creates a random #
var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Starts the game assigning a value (1-12) to each crystal
var startGame = function () {

  crystal.red.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.orange.value = getRandom(1, 12);
  crystal.purple.value = getRandom(1, 12);

  $("#random").text(compNum);
  console.log(compNum);
}

startGame();

// When the red crystal is clicked, it's value is added
$("#red").click(function () {
  addValue(crystal.red);
})

$("#green").click(function () {
  addValue(crystal.green);
})

$("#orange").click(function () {
  addValue(crystal.orange);
})

$("#purple").click(function () {
  addValue(crystal.purple);
})

// When the crystal is clicked, it's value it +score
var addValue = function (crystalClicked) {
  total += crystalClicked.value;
  $("#total-value").text(total);
  winCheck(); // Run this function after each click to see if the # matches
}

function reset() {
  startGame(); 
  total = 0;  // Resets total score to 0
  $("#total-value").text(total); // Prints out the reset total score
  // Resets Comp # to a new random #
  compNum = parseInt(Math.random() * (120 - 19) + 19);
  $("#random").text(compNum);
};

var winCheck = function () {
  // If total score matches the comp # add a win
  if (total === compNum) {
    wins++;
    $("#wins").text(wins);
    reset();
  }

  // If the total score exceeds the comp #, the user loses
  if (total > compNum) {
    losses++;
    $("#losses").text(losses);
    reset();
  }


}

