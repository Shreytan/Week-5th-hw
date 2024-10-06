const clockDisplay = document.getElementById('time');
const dateDisplay = document.getElementById('date');
const alarmBtn = document.getElementById('alarm-btn');
const alarmTimeInput = document.getElementById('alarm-time');
const timerBtn = document.getElementById('timer-btn');
const timerDurationInput = document.getElementById('timer-duration');
const stopwatchBtn = document.getElementById('stopwatch-btn');
const stopwatchTimeDisplay = document.getElementById('stopwatch-time');
const sound = document.getElementById('sound');

// Fetching the current time and date from the system
function setCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const date = currentTime.toLocaleDateString();

    clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
    dateDisplay.textContent = date;
}

// Alarm CODE
function setAlarm() {
    const alarmTime = alarmTimeInput.value;
    const alarmTimeParts = alarmTime.split(':');
    const alarmHours = parseInt(alarmTimeParts[0]);
    const alarmMinutes = parseInt(alarmTimeParts[1]);
    const alarmSeconds = parseInt(alarmTimeParts[2]);

    const currentTime = new Date();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    if (alarmHours === currentHours && alarmMinutes === currentMinutes && alarmSeconds === currentSeconds) {
        alert('Wake up!');
    }
}

// Timer code 
function startTimer() {
    console.log('Sound element:', sound);
    const timerDuration = parseInt(timerDurationInput.value);
    let seconds = timerDuration;
    const timerInterval = setInterval(() => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerDurationInput.value = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        seconds--;
        if (seconds < 0) {
            clearInterval(timerInterval);
            try {
                sound.play();
            } catch (error) {
                console.error('Error playing sound:', error);
            }
            timerBtn.textContent = 'Stop Sound';
            timerBtn.style.backgroundColor = '#e74c3c';
        }
    }, 1000);
}

// Stopwatch code
let stopwatchInterval;
let stopwatchTime = 0;
function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            const minutes = Math.floor(stopwatchTime / 60);
            const seconds = stopwatchTime % 60;
            stopwatchTimeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            stopwatchTime++;
            stopwatchBtn.textContent = 'Stop Stopwatch';
            stopwatchBtn.style.backgroundColor = '#e74c3c';
            stopwatchBtn.classList.add('stop');
        }, 1000);
    } else {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
        sound.pause();
        stopwatchBtn.textContent = 'Start Stopwatch';
        stopwatchBtn.style.backgroundColor = '#4CAF50';
        stopwatchBtn.classList.remove('stop');
        stopwatchTime = 0;
        stopwatchTimeDisplay.textContent = '00:00';
    }
}

// updation of the clock
setInterval(setCurrentTime, 1000);

// FOr the user actions 
alarmBtn.addEventListener('click', setAlarm);
timerBtn.addEventListener('click', startTimer);
stopwatchBtn.addEventListener('click', startStopwatch);
timerBtn.addEventListener('click', function() {
    if (timerBtn.textContent === 'Stop Sound') {
        sound.pause();
        timerBtn.textContent = 'Start Timer';
        timerBtn.style.backgroundColor = '#4CAF50';
    }
});