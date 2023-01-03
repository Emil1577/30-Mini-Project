var startGame = document.querySelector("#start");
var timer = document.querySelector("#score");
var word = document.querySelector("#guess-word");


//Triggers to start the game
startGame.addEventListener("click", timerStarts);


//variable that sets the timer
var secondsLeft = 50;


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



    // startTimer.textContent = "Time Reduced";
    //function deductTime () {
    //  secondsLeft = secondsLeft - 10;
    //} 

/// create a function to start the game
    // starts the timer function
    // starts random word function

/// create function for random word
    // pull random words from array of strings
    // rendering the word on the screen

// rendering word

// function to keep scores in storage


const wordList = [
    
    "Javascript",
    "Eagle",
    "warriors",
    "BMW",
    "hello World"
]



