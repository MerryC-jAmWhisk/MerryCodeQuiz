var timerEl = document.getElementById('countdown');
var questionSectionEl = document.getElementById('questions');
var questionTextEl = document.getElementById('question-text');
var startButtonEl = document.getElementById('start-button');
var titlePageEl = document.getElementById('title-page');



var questions = [
    {
        question:'Commonly used data types DO NOT include: ', 
        answers:['1. strings', '2. booleans', '3. alerts', '4. numbers'], 
        correctAnswer:'3. alerts'
    }, 
    {
        question:'The condition in an if/else statement is enclosed with ____. ', 
        answers:['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
        correctAnswer:'3. parenthesis'
    }, 
    {
        question:'Arrays in Javascript can be used to store ____. ', 
        answers:['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
        correctAnswer:'4. all of the above'
    }, 
    {
        question:'String values must be enclosed within _____ when being assigned to variables. ',
        answers:['1. commas', '2. curly brackets', '3. quotes', '4. parenthesis'],
        correctAnswer:'3. quotes'
    }, 
    {
        question:'A very useful tool used during development and debugging for printing content to the debugger is: ',
        answers:['1. Javascript', '2. terminal/bash', '3. for loops', '4. console.log'],
        correctAnswer:'4. console.log'
    } 
];

function startQuiz() {
    titlePageEl.setAttribute('class', 'hide');
    questionSectionEl.removeAttribute('class');
    countdown();
    displayQuestion();
};

function displayQuestion() {
    //get current question by current index
    // update the html elements selectors to display the questions kinda like what we did in start quiz
    // loop through the array of answers and display 
    // use setAttribute to attach the correct answer 
    // if the value of set attribute === the value of correct answer then the answer correct add points go to the next question 
    // else subtract time x from timer and go to the next question
};

function answeredQuestion(){
    //handles the logic for when a question is answered i.e. a answer button is clicked 
   // and increment the index by 1 after the question is answered we wouldn't do it right away
}

// fuction gameover(){
//    display the gameover screen wtih high score text field and play again button
//    clear the interval 
//   
function countdown() {
    var timeLeft = 75;
  
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time remaining: ' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textcontent = 'Time remaining: 0';
            timeLeft--;

            clearInterval(timeInterval);
        }
    }, 1000);
}

startButtonEl.onclick = startQuiz;