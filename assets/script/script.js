var startGame = document.querySelector("#start");
var timer = document.querySelector("#score");



startGame.addEventListener("click", timerStarts);


var secondsLeft = 50;

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
function deductTime () {
    secondsLeft = secondsLeft - 10;
} 