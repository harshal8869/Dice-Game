function randomDiceGenerator() {
    return "images/dice" + (Math.floor(Math.random()*6+1)) + ".png";
}

document.querySelector("img.img1").setAttribute("src",randomDiceGenerator());
document.querySelector("img.img2").setAttribute("src",randomDiceGenerator());

// if dice1 < dice2
if(document.querySelector("img.img1").getAttribute("src") < document.querySelector("img.img2").getAttribute("src")) {
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}

// if dice1 > dice2
else if (document.querySelector("img.img1").getAttribute("src") > document.querySelector("img.img2").getAttribute("src")) {
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}

else {
    document.querySelector("h1").innerHTML="Tie!";
}