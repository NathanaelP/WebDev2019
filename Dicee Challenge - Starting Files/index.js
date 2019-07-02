var randomNumber1 = Math.floor(Math.random() * 6) + 1;//Get a Random number for the first die
var randomNumber2 = Math.floor(Math.random() * 6) + 1;//Get a random number for the second die

document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png");//Get the correct img tag and set the attribute for the dice number

document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png");//Same thing as above but for the second dice number

if(randomNumber1 > randomNumber2){//basic if else statement to change text based on dice outcome. 
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a Tie!";
}
