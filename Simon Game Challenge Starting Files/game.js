var userClickedPattern = [];
var gamePattern = [];//Create Empty array for the color patterns

var buttonColors = ["red", "blue", "green", "yellow"];//Create a color array

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);//Create a random number
  var randomChosenColor = buttonColors[randomNumber];//Use random number function to select random color from color array
  gamePattern.push(randomChosenColor);//Add the random color to the end of the game color patterns array.
  $("#" + randomChosenColor).fadeIn("fast").fadeOut("fast").fadeIn("fast");
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}


  $(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
  });


console.log(nextSequence());
