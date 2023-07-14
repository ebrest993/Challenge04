let timer;
let timerCount;
let timerElement = document.querySelector("#timerEl");
let button = document.querySelector("#bigbutton");
let score = 0;
let initials = "";
let scoreTab = document.querySelector("#score-tab");
let pointsTable = document.querySelectorAll(".points");
let namesTable = document.querySelectorAll(".names");
let storageItem = [];


// What follows are the arrays populated with questions, the answer, and three wrong answers for each.

const quest1 = [
    question = "What does 'CSS' stand for?",
    answer1 = "A lot. Uhkay? Just. A lot.",
    correct = "Cascading Style Sheets",
    answer2 = "Who cares?",
    answer3 = "Eight."
];
const quest2 = [
    question = "How do you log something to the console?",
    correct = "console.log(_____);",
    answer1 = "let console = _____;",
    answer2 = "for (i = 0; i < _____; i++)",
    answer3 = "Eight."
];
const quest3 = [
    question = "What does HTML stand for?",
    answer1 = "Hilda's Tall Militia Locker",
    correct = "Hyper Text Mark Up Language",
    answer2 = "Helping Tiny Men Lately",
    answer3 = "Hyper Talking Monitored by Larry"
];

const quest4 = [
    question = "What is a callback function?",
    answer1 = "A gathering of out of work actors.",
    answer2 = "An event meant to listen for a user interaction.",
    correct = "A function passed into another function as an argument.",
    answer3 = "Eight."
];

const quest5 = [
    question = "What is an array?",
    answer1 = "Basically a string",
    answer2 = "The middle of the word 'batarang'.",
    correct = "A collection of items of same data type stored at contiguous memory locations.",
    answer3 = "Eight"
]

//These event listeners either start the game or show a separate tab where the high scores are pulled from local storage and displayed.
button.addEventListener("click", startGame);
scoreTab.addEventListener("click", viewScores);

//This displays the high scores in a separate tab.
function viewScores () {
    scoreTab = window.open("index2.html").focus();
    for (i = 0; i < storageItem.length; i++) {
        pointsTable = localStorage.getItem("initials");
        namesTable = localStorage.getItem("hiScore");
        pointsTable.innerHTML = storageItem[i].score;
        namesTable.innerHTML = storageItem[i].initials;
}}

//This is the first function that sets off the rest of the game. Here, we disable the start button, set the timer to 30, and pass the next two functions.
function startGame () {
    button.disabled = true;
    timerCount = 30;
    startTimer();
    questOne();
}

//Here we actually start the timer, and say that if the timer reads zero, it stops.
function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
    if (timerCount <= 0) {
        clearInterval(timer);
    }
}, 1000)}

//The first question. Here, we create a div, assign it an ID, populate it with the question, 
//and append it to the empty form variable. Then, we've got a for loop meant to create four 
//buttons and populate them with the four possible answers. Finally, there's an if/else state-
//ment: if the user clicks the wrong answer, we deduct 5 seconds from the timer, if they click 
//the right answer, we go to another function that adds 2 points to the score.
function questOne () {
    let qst = document.createElement("div");
    qst.setAttribute("id", "numOne");
    qst.innerHTML = quest1[0];
    emptyForm = document.body.appendChild(qst);    
    for (i = 1; i < quest1.length; i++) {
        let btn = document.createElement("button");
        btn.setAttribute("class", "buttons");
        btn.innerHTML = quest1[i];
        qst.append(btn);
        btn.addEventListener("click", questTwo);
        if (btn.innerHTML === quest1[2]) {
            btn.addEventListener("click", addScore);
        } else {
            btn.addEventListener("click", function() {
            timerCount = timerCount - 5;
            });
        }}
}

//All question functions are essentially the same as the questOne function.
function questTwo () {
    let qst = document.createElement("div");
    qst.setAttribute("id", "numTwo");
    document.getElementById("numOne").remove();
    qst.innerHTML = quest2[0];
    document.body.appendChild(qst);
    for (i = 1; i < quest2.length; i++) {
        let btn = document.createElement("button");
        btn.setAttribute("class", "buttons");
        btn.innerHTML = quest2[i];
        qst.append(btn);
        btn.addEventListener("click", questThree);
        if (btn.innerHTML === quest2[1]) {
            btn.addEventListener("click", addScore);
        } else {
            btn.addEventListener("click", function() {
            timerCount = timerCount - 5;
        });
        }
    }
}   

function questThree () {
    document.getElementById("numTwo").remove();
    document.getElementsByClassName("buttons").disable;
    let qst = document.createElement("div");
    qst.setAttribute("id", "numThree");
    qst.innerHTML = quest3[0];
    document.body.appendChild(qst);
    for (i = 1; i < quest3.length; i++) {
        let btn = document.createElement("button");
        btn.setAttribute("class", "buttons");
        btn.innerHTML = quest3[i];
        qst.append(btn);
        btn.addEventListener("click", questFour);
        if (btn.innerHTML === quest3[2]) {
            btn.addEventListener("click", addScore);
        } else {
            btn.addEventListener("click", function() {
            timerCount = timerCount - 5;
            });
        }

    }
}

function questFour () {
    document.getElementById("numThree").remove();
    let qst = document.createElement("div");
    qst.setAttribute("id", "numFour");
    qst.innerHTML = quest4[0];
    document.body.appendChild(qst);
    for (i = 1; i < quest2.length; i++) {
        let btn = document.createElement("button");
        btn.setAttribute("class", "buttons");
        btn.innerHTML = quest4[i];
        qst.append(btn);
        btn.addEventListener("click", questFive);
        if (btn.innerHTML === quest4[3]) {
            btn.addEventListener("click", addScore);
        } else {
            btn.addEventListener("click", function() {
            timerCount = timerCount - 5;
        });
        }
    }
}   

//At the end of this the last question, we move into our endGame function.
function questFive () {
    document.getElementById("numFour").remove();
    let qst = document.createElement("div");
    qst.setAttribute("id", "numFive");
    qst.innerHTML = quest5[0];
    document.body.appendChild(qst);
    for (i = 1; i < quest5.length; i++) {
        let btn = document.createElement("button");
        btn.setAttribute("class", "buttons");
        btn.innerHTML = quest5[i];
        qst.append(btn);
        btn.addEventListener("click", addScore);
        if (btn.innerHTML === quest5[3]) {
            btn.addEventListener("click", addScore);
        } else {
            btn.addEventListener("click", function() {
            timerCount = timerCount - 5;
        });
        }        
        btn.addEventListener("click", endGame);
    }
}   

function addScore () {
    score = score + 2;
    }

//The endGame function stops the timer, clears the last question off the page, and creates
//a text area to input the user's initial and record their score. Alongside the text box is
//a submit button, and both are appended to the body. Finally, when the submit button is clicked, 
//we move on to the setScore function.
function endGame () {
    document.getElementById("numFive").remove();
    clearInterval(timer);
    initials = document.createElement("textarea");
    initials.setAttribute("placeholder", "Enter Initials");
    initials.setAttribute("maxlength", "3");
    let submit = document.createElement("button");
    submit.setAttribute("display", "block");
    submit.setAttribute("id", "submit-button");
    submit.innerHTML = "SUBMIT";
    document.body.appendChild(initials);
    document.body.appendChild(submit);
    
    let submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", setScore);
}


//Once the user has submitted their initials, the submit button is disabled. That 
//text box value along with the user score is then parsed into the highScores key 
//in local storage and pushed into the empty array storageItem. Finally, the start 
//game is enabled once again, and the user is free to play again.

function setScore(event) {
    let finalStep = document.getElementById("submit-button");
    finalStep.disabled = true;
    event.preventDefault();
    let initials = document.querySelector("textarea").value;
    let hiScore = timerCount + score;
    if (localStorage.getItem("highScores")) {
        storageItem = JSON.parse(localStorage.getItem("highScores"));
    } else {
        storageItem = [];
    }
    storageItem.push({initials, hiScore});
    localStorage.setItem("highScores", JSON.stringify(storageItem));
    button.disabled = false;
}