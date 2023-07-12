let timer;
let timerCount;
let timerElement = document.querySelector("#timerEl");
let button = document.querySelector("#bigbutton");
let score = "";
let initials = "";
let numOne = document.querySelector("numOne");

const quest1 = [
    question = "How many licks does it take to get to the center of a Tootsie Pop?",
    answer1 = "A lot. Uhkay? A lot.",
    correct = "Um, idk. My BFF Jill?",
    answer2 = "Who cares?",
    answer3 = "Eight."
];
const quest2 = [
    question = "Where in the world is Carmen San Diego?",
    correct = "Probably LA. Beautiful this time of year.",
    answer1 = "She still doing that whole thing?",
    answer2 = "I say good for her, wherever she is.",
    answer3 = "Eight."
];
const quest3 = [
    question = "What does HTML stand for?",
    answer1 = "Hilda's Tall Militia Locker",
    correct = "Hyper Text Mark Up Language",
    answer2 = "Helping Tiny Men Lately",
    answer3 = "Hyper Talking Monitored by Larry"
];

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
    qst = document.createElement("body");
    qst.setAttribute("class", "numOne");
    qst.innerHTML = quest1[0];
    document.body.appendChild(qst);    
    for (i = 1; i < quest1.length; i++) {
        btn = document.createElement("button");
        btn.innerHTML = quest1[i];
        document.body.appendChild(btn);
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
    let qst = document.createElement("body");
    qst.innerHTML = quest2[0];
    document.body.appendChild(qst);
    for (i = 1; i < quest2.length; i++) {
        let btn = document.createElement("button");
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
    let qst = document.createElement("body");
    qst.innerHTML = quest3[0];
    document.body.appendChild(qst);
    for (i = 1; i < quest3.length; i++) {
        let btn = document.createElement("button");
        btn.innerHTML = quest3[i];
        document.body.appendChild(btn);
        btn.addEventListener("click", addScore);
        if (btn.innerHTML === quest3[2]) {
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
    submit.innerHTML = "SUBMIT";
    document.body.appendChild(initials);
    document.body.appendChild(submit);
    submit.addEventListener("submit", setScore);
}

function setScore () {
    localStorage.setItem("initials", initials);
    button.disabled = false;
}
