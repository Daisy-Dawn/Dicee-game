var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
//for image 1
var imageArray = "dice" + randomNumber1 + ".png"

var imageSource = "images/" + imageArray;

document.querySelector(".img1").setAttribute("src", imageSource);

//for image 2
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

var imageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", imageSource2);

//set winning team
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}






