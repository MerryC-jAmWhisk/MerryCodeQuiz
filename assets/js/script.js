var timerEl = document.getElementById('countdown');

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


//countdown();