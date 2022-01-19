var timerEl = document.getElementById('countdown');
var timeLeft = 75;
var questionSectionEl = document.getElementById('questions');
var questionTextEl = document.getElementById('question-text');
var questionNumber = 0;
var startButtonEl = document.getElementById('start-button');
var titlePageEl = document.getElementById('title-page');
var gameoverEl = document.getElementById('finish');
var answerEl = document.querySelectorAll('.answer');
var submitEl = document.getElementById('save-initials');
var playAgainEl = document.getElementById('play-again');
var initialEl = document.getElementById('initials');
var score = 0;


var questions = [
    {
        question: 'Commonly used data types DO NOT include: ',
        answers: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
        correctAnswer: '3. alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed with ____. ',
        answers: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
        correctAnswer: '3. parenthesis'
    },
    {
        question: 'Arrays in Javascript can be used to store ____. ',
        answers: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
        correctAnswer: '4. all of the above'
    },
    {
        question: 'String values must be enclosed within _____ when being assigned to variables. ',
        answers: ['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
        correctAnswer: '3. quotes'
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is: ',
        answers: ['1. Javascript', '2. terminal/bash', '3. for loops', '4. console.log'],
        correctAnswer: '4. console.log'
    }
];

/*function playAgain() {
    titlePageEl.removeAttribute('class', 'hide');
    titlePageEl.setAttribute('class', 'title-page');
    gameoverEl.setAttribute('class', 'hide');
    startButtonEl.addEventListener('click', startQuiz);
}*/

function startQuiz() {
    // hides the title page when the quiz starts and display the questions
    titlePageEl.setAttribute('class', 'hide');
    questionSectionEl.removeAttribute('class', 'hide');
    countdown();
    displayQuestion();
    console.log("start the quiz");
};

function displayQuestion() {
    // get current question by current index
    questionTextEl.textContent = questions[questionNumber].question;
    // loop through the array of answers and display
    for (var i = 0; i < answerEl.length; i++) {
        answerEl[i].textContent = questions[questionNumber].answers[i];
        // handles the logic for when a question is answered i.e. a answer button is clicked 
        answerEl[i].addEventListener("click", answeredQuestion);
    }

};

function answeredQuestion() {
    console.log(this.textContent);
    // if the value of set attribute === the value of correct answer then the answer correct add points go to the next question 
    // else subtract time x from timer and go to the next question
    if (this.textContent === questions[questionNumber].correctAnswer) {
        score += 10;
    } else {
        timeLeft -= 10;
    }
    // and increment the index by 1 after the question is answered
    questionNumber += 1;
    if (questionNumber > questions.length - 1) {
        gameover();
    } else {
        displayQuestion();
    }

}

function gameover() {
    // display the gameover screen wtih high score text field and play again button
    questionSectionEl.setAttribute('class', 'hide');
    gameoverEl.removeAttribute('class', 'hide');
    submitEl.addEventListener("click", highscore);
    //playAgainEl.addEventListener("click", playAgain);

}

function highscore(event) {
    event.preventDefault();
    var initial = initialEl.value;
    console.log(initial);
    localStorage.setItem(initial, JSON.stringify(score));

}

//countdown timer
function countdown() {

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time remaining: ' + timeLeft;
            timeLeft--;
            
        } else if (timeLeft === 0) {
            gameover();
            timerEl.textContent = 'Time remaining: ' + timeLeft;

        } else if (questionNumber > questions.length - 1) {
            clearInterval(timeInterval);
            console.log("interval clear");

        } else {
            clearInterval(timeInterval);

        }
    }, 1000);
}

startButtonEl.onclick = startQuiz;