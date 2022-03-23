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
var finalScoreEl = document.getElementById('final-score');
var initialEl = document.getElementById('initials');
var score = 0;
var viewEl = document.getElementById('view');
var quizContent = document.getElementById('contents');
var scorePageEl = document.getElementById('score-page');

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

function playAgain() {
    window.location.reload();
}

function startQuiz() {
    // hides the title page when the quiz starts and display the questions
    titlePageEl.setAttribute('class', 'hide');
    questionSectionEl.classList.remove('hide');
    countdown();
    displayQuestion();
    console.log("quiz start");
};

function displayQuestion() {
    // get current question by current index
    // loop through the array of answers and display
    for (var i = 0; i < answerEl.length; i++) {
        questionTextEl.textContent = questions[questionNumber].question;
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

// display the gameover screen wtih high score text field and play again button
function gameover() {
    questionSectionEl.setAttribute('class', 'hide');
    gameoverEl.classList.remove('hide');
    submitEl.addEventListener('click', highscore);
    finalScoreEl.textContent = 'Your final score is ' + score + '.'
}

// save submitted data in local storage
function highscore(event) {
    event.preventDefault();
    var initial = initialEl.value;
    if(localStorage.getItem('initials') == null) {
        localStorage.setItem('initials', '[]');
    }
    var allData = JSON.parse(localStorage.getItem('initials'));

    var initialScores = initial + ' - ' + score;
    allData.push(initialScores);
    console.log(allData)
    localStorage.setItem('initials', JSON.stringify(allData));

}

function viewHighscore() {
    quizContent.setAttribute('class', 'hide');
    scorePageEl.classList.remove('hide');

    var initial = JSON.parse(localStorage.getItem('initials'));
    for(let i = 0; i < initial.length; i++) {
        var header = document.createElement('h3');
        header.textContent = initial[i];
        header.setAttribute('class', 'past-score');
        scorePageEl.appendChild(header);
    }

    var restartBtn = document.createElement('button');
    restartBtn.textContent = 'Restart Quiz';
    scorePageEl.appendChild(restartBtn);
    restartBtn.setAttribute('class', 'past-score');
    restartBtn.onclick = playAgain;
}

//countdown timer
function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft >= 1 && questionNumber > questions.length - 1) {
            clearInterval(timeInterval);
            gameover();
            console.log("interval clear"); 
        } else if (timeLeft > 0) {
            timerEl.textContent = 'Time remaining: ' + timeLeft;
            timeLeft--;
        } else if (timeLeft === 0) {
            gameover();
            timerEl.textContent = 'Time remaining: ' + timeLeft;
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
}

startButtonEl.onclick = startQuiz;
playAgainEl.onclick = playAgain;
viewEl.onclick = viewHighscore;