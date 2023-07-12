let timer;
let timerCount;
let timerElement = document.querySelector("#timerEl");
let button = document.querySelector("#bigbutton");
let score = "";
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
    answer3 = "I say good for her, wherever she is.",
    answer4 = "Eight."
];
const quest3 = [
    question = "What does HTML stand for?",
    answer1 = "Hilda's Tall Militia Locker",
    correct = "Hyper Text Mark Up Language",
    answer3 = "Helping Tiny Men Lately",
    answer4 = "Hyper Talking Monitored by Larry"
];

let userChoice1 = quest1[2];
let userChoice2 = quest2[1];
let userChoice3 = quest3[2];

button.addEventListener("click", startGame);

function startGame () {
    button.disabled = true;
    timerCount = 30;
    startTimer ();
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
    }    
   
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
        btn.addEventListener("click", endGame);

    }
}

function addScore () {
    localStorage.setItem("score", score);
    score++;
    }

function endGame () {
    clearInterval(timer);
    let initials = document.createElement("textarea");
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














// for (i = 1; i < quest1.length; i++) {
//     quest1[i].disabled = true;
// }


// function askQuestion (question) {
//     let quest1 = document.createElement("div")
//     quest1.innerHTML = question;
//     document.appendChild(quest1);
//     console.log(question);
// }

// button.onclick = function(){
//     score++;
//     console.log(score);
//     localStorage.setItem("score", score);
// };




// // let points = "";
// // let timerElement = document.querySelector("#timer-element");
// // let startButton = document.querySelector("#start-button")
// // let questionOne = document.querySelector("#form-1");
// // let questionTwo = document.querySelector("#form-2");
// // let questionThree = document.querySelector("#form-3");
// // let button = document.querySelector("button");
// // let choiceOne = document.querySelector("#button-1");
// // let choiceTwo = document.querySelector("#button-2");
// // let choiceThree = document.querySelector("#button-3");
// // let choiceFour = document.querySelector("#button-4");

// startButton.addEventListener("click", startGame);





// function endGame () {
//     if (points > 5 && timerCount > 0) {
//         winGame ();
//     } else {
//         loseGame ();
//     }
// }
    
// // function askQuestOne () {
// //     // if (questionOne.display = "none") {
// //     questionOne.display = "block";
// //     // }; 
// //     // event.preventDefault();
// // }

// function askQuestTwo () {
//     if (questionTwo.style.display = "none") {
//         questionOne.style.display = "none";
//         questionTwo.style.display = "block";
//         }
//     event.preventDefault();
// }
    
// function askQuestThree () {
//         questionTwo.style.display = "none";
//         questionThree.style.display = "block";
//     event.preventDefault();

// }

// // function askQuestFour () {
// //     
// //     event.preventDefault();
// // }

// // function askQuestFive () {
// //     if (questionTwo.style.display = "none") {
// //         questionOne.style.display = "none";
// //         questionTwo.style.display = "block";
// //     }
// //     event.preventDefault();
// // }