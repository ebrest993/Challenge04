let timer;
let timerCount;
let points = "";
let timerElement = document.querySelector("#timer-element");
let startButton = document.querySelector("#start-button")
let questionOne = document.querySelector("#form-1");
let questionTwo = document.querySelector("#form-2");
let choiceOne = document.querySelector("#button-1");
let choiceTwo = document.querySelector("#button-2");
let choiceThree = document.querySelector("#button-3");
let choiceFour = document.querySelector("#button-4");

startButton.addEventListener("click", startGame);

function startGame () {
    timerCount = 10;
    startTimer ();
}

function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
    if (timerCount === 0) {
        clearInterval(timer);
    }
    endGame();
}, 1000)}



function endGame () {
    if (points > 5 && timerCount > 0) {
        winGame ();
    } else {
        loseGame ();
    }
}
    
// function test () {
//     if (choiceTwo.style.display = "block") {
//         choiceTwo.style.display = "none";
//     }
//     event.preventDefault();
//     }

function askQuestOne () {
    if (questionOne.style.display = "none") {
        questionOne.style.display = "block";
    }
    event.preventDefault();
}

function askQuestTwo () {
    if (questionTwo.style.display = "none") {
        questionOne.style.display = "none";
        questionTwo.style.display = "block";
    }
    event.preventDefault();
}
    