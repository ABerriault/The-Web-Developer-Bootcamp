var h1 = document.querySelector('h1');
var colorDisplay = document.getElementById('colorDisplay');

var easyButton = document.querySelector('#easy');
var hardButton = document.querySelector('#hard');
var messageDisplay = document.querySelector('#message');
var resetButton = document.querySelector('#reset');

var squares = document.getElementsByClassName('square')

var num = 6;
var colors = generateRandomColors(num);
var pickedColor = pickColor();


// On startup
newGame();

// Game Logic
for (let i = 0; i < squares.length; i++) {
     // Add event listeners
    squares[i].addEventListener('click', function(){
        var clickedColor = this.style.backgroundColor;
        
        // Compare the color to the goal color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
};

// Generates a new game environment
function newGame() {
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]){
        // Add initial color to squares
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue"
};

// Reset button action
resetButton.addEventListener('click', function(){
    newGame();  
});

// Easy Game Button
easyButton.addEventListener('click',function(){
    // Update easy/hard button style
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    
    // Generate new game data
    num = 3;
    newGame();    
});

// Easy Game Button
hardButton.addEventListener('click',function(){
    // Update easy/hard button style
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    
    // Generate new game data
    num = 6;
    newGame();
});

// Change all colors to one color.
function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Generate num random colors
function generateRandomColors(num) {
    // make an array with num random colors
    var arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

// Generate random rgb values
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return ("rgb("+  r + ", " + g + ", " + b + ")")
}