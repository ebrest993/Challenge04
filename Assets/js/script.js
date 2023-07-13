let timer;
let timerCount;
let timerElement = document.querySelector("#timerEl");
let button = document.querySelector("#bigbutton");
let score = "";
let initials = "";
let numOne = document.querySelector("numOne");

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

button.addEventListener("click", startGame);

function startGame () {
    button.disabled = true;
    timerCount = 30;
    startTimer();
    questOne();
}

function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
    if (timerCount === 0) {
        clearInterval(timer);
    }
}, 1000)}

function test () {
    localStorage.setItem("score", score);
    score++;
}

function questOne () {
    let qst = document.createElement("div");
    qst.setAttribute("id", "numOne");
    qst.innerHTML = quest1[0];
    document.body.appendChild(qst);    
    for (i = 1; i < quest1.length; i++) {
        let btn = document.createElement("button");
        btn.setAttribute("class", "buttons");
        btn.innerHTML = quest1[i];
        // document.body.appendChild(btn);
        qst.append(btn);
        btn.addEventListener("click", questTwo);
        if (btn.innerHTML === quest1[2]) {
            console.log("correct");
            btn.addEventListener("click", addScore);
        } else {
            btn.addEventListener("click", function() {
            console.log("wrong");
            timerCount = timerCount - 5;
            });
        }}
        addScore();        
}

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
        document.body.appendChild(btn);
        btn.addEventListener("click", questThree);
        if (btn.innerHTML === quest2[1]) {
            console.log("correct");
            btn.addEventListener("click", addScore);
        } else {
            btn.addEventListener("click", function() {
            console.log("wrong");
            timerCount = timerCount - 5;
        });
        }
    }
}   

function questThree () {
    document.getElementById("numTwo").remove();
    let qst = document.createElement("div");
    qst.setAttribute("id", "numThree");
    qst.innerHTML = quest3[0];
    document.body.appendChild(qst);
    for (i = 1; i < quest3.length; i++) {
        let btn = document.createElement("button");
        btn.innerHTML = quest3[i];
        document.body.appendChild(btn);
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
        document.body.appendChild(btn);
        btn.addEventListener("click", questFive);
        if (btn.innerHTML === quest4[3]) {
            console.log("correct");
            btn.addEventListener("click", addScore);
        } else {
            btn.addEventListener("click", function() {
            console.log("wrong");
            timerCount = timerCount - 5;
        });
        }
    }
}   
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
        document.body.appendChild(btn);
        btn.addEventListener("click", addScore);
        if (btn.innerHTML === quest5[3]) {
            console.log("correct");
            btn.addEventListener("click", addScore);
        } else {
            btn.addEventListener("click", function() {
            console.log("wrong");
            timerCount = timerCount - 5;
        });
        }    
        btn.addEventListener("click", endGame);
    }
}   

function addScore () {
    localStorage.setItem("score", score);
    score++;
    }

function endGame () {
    clearInterval(timer);
    initials = document.createElement("textarea");
    initials.setAttribute("placeholder", "Enter Initials");
    let submit = document.createElement("button");
    submit.setAttribute("display", "block");
    submit.setAttribute("id", "submit-button");
    submit.innerHTML = "SUBMIT";
    document.body.appendChild(initials);
    document.body.appendChild(submit);
}

document.addEventListener("click", setScore);


function setScore (event) {
    if (event.target && event.target.matches("#submit-button"))
    event.preventDefault();
    console.log("click and submit button");
    let initials = document.querySelector("textarea") && document.querySelector("textarea").value;
    let hiScore = timerCount;
    let storageItem;
    if (localStorage.getItem("highScores")) {
        storageItem = JSON.parse(localStorage.getItem("highScores"));
    } else {
        storageItem = [];
    }
    storageItem.push({initials, hiScore});
    localStorage.setItem("highScores", JSON.stringify(storageItem));
    button.disabled = false;
}

