

var randomNumber1 = 1+Math.floor(6*Math.random());
var diceImage = "dice"+ randomNumber1 + ".png";
var diceDirectory = "images/"+ diceImage;
var image1Query = document.querySelectorAll("img")[0];
image1Query.setAttribute("src", diceDirectory);



    var randomNumber2 = 1+Math.floor(6*Math.random());
    var dice2Image = "dice"+ randomNumber2 + ".png";
    var dice2Directory = "images/"+ dice2Image;
    
    var image2Query = document.querySelectorAll("img")[1];
    image2Query.setAttribute("src", dice2Directory);
    





    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = " 🚩Player 1 Wins";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
    }
    else  {
        document.querySelector("h1").innerHTML = "Draw!";
    }
    
