var startGame = document.getElementById("start");
var timer = document.querySelector("#score");
var word = document.querySelector("#guess-word");


//Triggers to start the game
startGame.addEventListener("click", gameApp);


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
function gameApp () {
    console.log('game starts now');
    // starts the timer function
    timerStarts();
    // starts random word function
    randomWord(wordList);
}


/// create function for random word
function randomWord(Array) {
    // pull random words from array of strings
    var index = Math.floor(Math.random() * Array.length);
    // rendering the word on the screen
    console.log('random word will be ', Array[index]);
    renderWord(Array[index]);
}

// rendering word
function renderWord(word) {
    // split the word into characters
    var characters = word.split('');
    // render each character on its on
    // 
    // render B
    // render _
    // render W

    console.log(characters);
}

// function user input
function userInput(letter) {

}

//listen to user keyboard press
window.addEventListener("keydown", function(event) {
    userInput(event.key);
    console.log(event.key);
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



