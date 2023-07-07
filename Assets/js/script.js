let timer;
let timerCount;
let timerElement = document.querySelector("#timer-element");
let startButton = document.querySelector("#start-button")
let choiceOne = document.querySelector("#button-1");
let choiceTwo = document.querySelector("#button-2");
let choiceThree = document.querySelector("#button-3");
let choiceFour = document.querySelector("#button-4");
let test = document.querySelector("#test");

startButton = document.addEventListener("click", startGame());

function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
    }, 1000)
};

function startGame () {
    timerCount = 10;
    startButton.disabled = true;
    startTimer ();
}