var userClickedPattern = [];
var gamePattern = []; //Create Empty array for the color patterns

var buttonColors = ["red", "blue", "green", "yellow"]; //Create a color array

var started = false; // Allow for checking on whether or not the game has started IE first keypress

var level = 0; //Start the game off with level 0

$(document).keypress(function() { //Event listener for a keydown
  if (!started) {

    $("#level-title").text("Level " + level); // changes header text
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() { //select the clicked button
  var userChosenColor = $(this).attr("id"); //Pulls the ID from the clicked button
  userClickedPattern.push(userChosenColor); //Pushes clicked color to clicked array
  playSound(userChosenColor); //Plays a sound based on user color
  $("#" + userChosenColor).fadeIn("fast").fadeOut("fast").fadeIn("fast"); //Takes the ID of the color and makes it fade in an out

  checkAnswer(userClickedPattern.length - 1);

});

function nextSequence() {

  level++; //Increase the level each time nextSequence is called

  $("#level-title").text("Level " + level); // changes header text each time nextSequence is called

  var randomNumber = Math.floor(Math.random() * 4); //Create a random number
  var randomChosenColor = buttonColors[randomNumber]; //Use random number function to select random color from color array
  gamePattern.push(randomChosenColor); //Add the random color to the end of the game color patterns array.
  $("#" + randomChosenColor).fadeIn("fast").fadeOut("fast").fadeIn("fast");
  // var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  // audio.play();
  playSound(randomChosenColor);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success"); //logs if the answer is correct

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence()
      }, 1000);
    }

  } else {
    console.log("wrong"); // logs if the answer is wrong

    playSound("wrong");

    $('body').addClass("game-over");//add a color class to the body
    setTimeout(function() {
      $('body').removeClass("game-over"); //removes the color class after 200ms
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  };

};

function startOver() {
  level = 0;
  started = false;
  gamePattern = [];
};


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
