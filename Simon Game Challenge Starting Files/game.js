var gamePattern = [];
gamePattern.push(randomChosenColor);

var buttonColors = ["red", "blue", "green", "yellow"];

var randomChosenColor = buttonColors[nextSequence()];

function nextSequence(){
  var randomNumber = 1 + Math.floor(Math.random()*3);
  return randomNumber;
}

console.log(gamePattern);
