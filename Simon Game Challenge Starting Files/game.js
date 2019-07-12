var gamePattern = [];//Create Empty array for the color patterns
gamePattern.push(randomChosenColor);//Add the random color to the end of the game color patterns array.

var buttonColors = ["red", "blue", "green", "yellow"];//Create a color array

var randomChosenColor = buttonColors[nextSequence()];//Use random number function to select random color from color array

function nextSequence(){
  var randomNumber = 1 + Math.floor(Math.random()*3);//Create a random number
  return randomNumber;
}

console.log(gamePattern);
