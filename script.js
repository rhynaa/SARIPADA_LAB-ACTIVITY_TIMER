let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let stopBtn = document.getElementById('stopBtn');

let timeLeft = 60; 
let interval;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        interval = setInterval (function() {
            timeLeft--;
            timerDisplay.textContent = timeLeft + 's';
            if (timeLeft <= 0) {
                clearInterval(interval);
                alert('Time is up!');
            }
        }, 1000);
        isRunning = true;
   }
}

function pauseTimer() {
        clearInterval(interval);
        isRunning = false;
}

function stopTimer() {
        clearInterval(interval);
        timeLeft = 60;
        timerDisplay.textContent = timeLeft + 's';
        isRunning = false;
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
stopBtn.addEventListener('click', stopTimer);
