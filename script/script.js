//Set the mode 
//HARD - 6 squares || EASY - 3 squares
var selectedMode = {
    mode: "hard",
    numSquares: 6
};

//Setting colors for squares
var colors = randomColors(selectedMode["numSquares"]);
//has value in RGB!
var pickedColor = colors[Math.floor(Math.random() * colors.length)];

//setting DOM
var squares = document.querySelectorAll(".square");
var message = document.getElementById("message");
var headingColor = document.querySelector("#colorHeading");

var heading = document.querySelector(".heading");

//menu-option variables
var resetButton = document.getElementById("reset-button");
var easyModeButton = document.querySelector("#easy-mode");
var hardModeButton = document.querySelector("#hard-mode");

//adding Events
resetButton.addEventListener("click", reset);
easyModeButton.addEventListener("click", easyMode);
hardModeButton.addEventListener("click", hardMode);
headingColor.textContent = pickedColor;

//Loop through the squares and set a random color to each of them 
for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    //Add event listener whether the picked color matches or does not
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            winColorChoice();
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try again";
        }
    });
}

function randomColors(number) {
    var colors = [];
    for (var i = 0; i < number; i++) {
        colors.push(randomRGBColor());
    }
    return colors;
}

function randomRGBColor() {
    //red random
    var r = Math.floor(Math.random() * 256);
    //green random
    var g = Math.floor(Math.random() * 256);
    //blue random
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function winColorChoice() {
    heading.style.backgroundColor = pickedColor;
    message.textContent = "Correct!";
    resetButton.textContent = "Play again?";

    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function reset() {
    colors = randomColors(selectedMode["numSquares"]);
    pickedColor = colors[Math.floor(Math.random() * colors.length)];

    resetButton.textContent = "New colors";

    heading.style.backgroundColor = "steelblue";
    headingColor.textContent = pickedColor;
    message.textContent = "";

    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
}

function easyMode() {
    selectedMode["mode"] = "easy";
    selectedMode["numSquares"] = 3;
    hardModeButton.classList.remove("selected");
    easyModeButton.classList.add("selected");

    squares[3].style.display = "none";
    squares[4].style.display = "none";
    squares[5].style.display = "none";

    reset();
}

function hardMode() {
    selectedMode["mode"] = "hard";
    selectedMode["numSquares"] = 6;
    hardModeButton.classList.add("selected");
    easyModeButton.classList.remove("selected");

    squares[3].style.display = "block";
    squares[4].style.display = "block";
    squares[5].style.display = "block";

    reset();
}