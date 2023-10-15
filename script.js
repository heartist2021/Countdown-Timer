document.addEventListener('DOMContentLoaded', function () {
    let timeInSeconds = 5; // Initial time: 5 seconds
    let timerInterval;

    const display = document.getElementById('display');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const increaseBtn = document.getElementById('increase-btn');
    const decreaseBtn = document.getElementById('decrease-btn');

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function updateDisplay() {
        display.textContent = formatTime(timeInSeconds);
    }

    function startTimer() {
        timerInterval = setInterval(function () {
            if (timeInSeconds > 0) {
                timeInSeconds--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                display.textContent = "Time's up!";
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function increaseTime() {
        timeInSeconds += 60;
        updateDisplay();
    }

    function decreaseTime() {
        if (timeInSeconds > 60) {
            timeInSeconds -= 60;
            updateDisplay();
        }
    }

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    increaseBtn.addEventListener('click', increaseTime);
    decreaseBtn.addEventListener('click', decreaseTime);

    // Initial display
    updateDisplay();
});
