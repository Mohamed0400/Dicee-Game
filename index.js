var randomNum1 = Math.random() * 6;
randomNum1 = Math.floor(randomNum1) + 1;

var randomNum2 = Math.random() * 6;
randomNum2 = Math.floor(randomNum2) + 1;


// you could store the DOM in a variable if you wish

// var player1Wins = document.querySelector("h1").textContent = "player1 wins!";
// var player2Wins = document.querySelector("h1").textContent = "player2 wins!";
// var equal = document.querySelector("h1").textContent = "OOPs equals! Refresh for another round!";



// the program logic js code


console.log(randomNum1);
console.log(randomNum2);


// changes images for player 1

if(randomNum1 === 1) {
  document.querySelector(".img1").setAttribute("src" , " images/dice1.png");
}

else if(randomNum1 === 2) {
  document.querySelector(".img1").setAttribute("src" , " images/dice2.png");
}

else if(randomNum1 === 3) {
  document.querySelector(".img1").setAttribute("src" , " images/dice3.png");
}

else if(randomNum1 === 4) {
  document.querySelector(".img1").setAttribute("src" , " images/dice4.png");
}

else if(randomNum1 === 5) {
  document.querySelector(".img1").setAttribute("src" , " images/dice5.png");
}

else{
  document.querySelector(".img1").setAttribute("src" , " images/dice6.png");
}


// changes images for player 2

if(randomNum2 === 1) {
  document.querySelector(".img2").setAttribute("src" , " images/dice1.png");
}

else if(randomNum2 === 2) {
  document.querySelector(".img2").setAttribute("src" , " images/dice2.png");
}

else if(randomNum2 === 3) {
  document.querySelector(".img2").setAttribute("src" , " images/dice3.png");
}

else if(randomNum2 === 4) {
  document.querySelector(".img2").setAttribute("src" , " images/dice4.png");
}

else if(randomNum2 === 5) {
  document.querySelector(".img2").setAttribute("src" , " images/dice5.png");
}

else{
  document.querySelector(".img2").setAttribute("src" , " images/dice6.png");
}


// changing the h1 text accoring to the results


if(randomNum1 > randomNum2) {
  console.log(document.querySelector("h1").textContent = " 🚩 player1 wins!");
}else if(randomNum1 < randomNum2) {
  console.log(document.querySelector("h1").textContent = "player2 wins! 🚩");
}else
console.log(document.querySelector("h1").textContent = "OOPs equals! Refresh for another round!");
