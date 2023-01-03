var startGame = document.getElementById("start");
var timer = document.querySelector("#score");
// var word = document.querySelector("#guess-word");
var gameWindow = document.getElementById("game-window");
//variable that sets the timer
var secondsLeft = 50;
var word = [];
var userAnswer = [];

//Triggers to start the game
startGame.addEventListener("click", gameApp);

/// create a function to start the game
    // starts the timer function
    // starts random word function
function gameApp () {
    timerStarts();
    randomWord(wordList);
}

// function for timer
function timerStarts() {
    var timerInterval = setInterval (function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " left";
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert = "GAME ENDS";
        }
    },1000);
}

/// create function for random word
    // pull random words from array of strings
    // rendering the word on the screen
function randomWord(Array) {
    var index = Math.floor(Math.random() * Array.length);
    word = Array[index].split('');
    userAnswer = Array[index].split('');

    console.log('random word will be ', Array[index]);
    renderWord(word);
}

// rendering word
function renderWord(letters) {
    // split the word into characters

    console.log(letters);
    var hiddenLetters = Math.floor(Math.random() * letters.length);
    console.log(hiddenLetters);
    // render each character on its on
    for (var i = 0; i < letters.length; i++) {
        var p = document.createElement("p");
        if (i !== hiddenLetters) {
            p.textContent = letters[i];
            gameWindow.appendChild(p);
        } else {
            p.textContent = '_';
            gameWindow.appendChild(p);
        }
      }
}

// function user input
// function userInput(letter) {
//     if (letter === hiddenLetters) {
//         renderWord()
//     }

// }

//listen to user keyboard press
window.addEventListener("keydown", function(event) {
    // userInput(event.key);
    console.log(event.key);
    console.log(gameWindow.children.length);
    for (var i = 0; i < gameWindow.children.length; i++) {
        console.log(gameWindow.children[i].textContent);
        if (gameWindow.children[i].textContent === '_' && word[i] === event.key) {
            gameWindow.children[i].textContent = event.key;
            console.log('you win');
        }
    }
});

// function to keep scores in storage

// word bank
const wordList = [
    
    "Javascript",
    "Eagle",
    "warriors",
    "BMW",
    "hello World"
]



