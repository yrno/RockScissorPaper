var userScore = 0;
var systemScore = 0;

var inputs = ["rock", "paper", "scissor"];

function playGame (user){
    Math.floor(Math.random())
    console.log(inputs[Math.floor(Math.random()*3)]);
    document.getElementById("Feedback").src = "images/"inputs[Math.floor(Math.random()*3)]".png"
}   