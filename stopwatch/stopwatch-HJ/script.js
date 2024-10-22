// Global variables
let stopwatchInterval;
let countdownInterval;
let countdownValue = 0;
let stopwatchRunning = false;

// Elements
const welcomeScreen = document.getElementById("welcomeScreen");
const stopwatchScreen = document.getElementById("stopwatchScreen");
const countdownScreen = document.getElementById("countdownScreen");
const stopwatchDisplay = document.getElementById("stopwatchDisplay");
const countdownDisplay = document.getElementById("countdownDisplay");

// Show/Hide functions
function showStopwatchScreen() {
  welcomeScreen.classList.add("hidden");
  stopwatchScreen.classList.remove("hidden");
}

function showCountdownScreen() {
  welcomeScreen.classList.add("hidden");
  countdownScreen.classList.remove("hidden");
}

function goBack() {
  stopwatchScreen.classList.add("hidden");
  countdownScreen.classList.add("hidden");
  welcomeScreen.classList.remove("hidden");
}

// Stopwatch logic
let stopwatchTime = 0;

function updateStopwatchDisplay() {
  const hours = Math.floor(stopwatchTime / 3600);
  const minutes = Math.floor((stopwatchTime % 3600) / 60);
  const seconds = stopwatchTime % 60;
  stopwatchDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      updateStopwatchDisplay();
    }, 1000);
    stopwatchRunning = true;
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function clearStopwatch() {
  pauseStopwatch();
  stopwatchTime = 0;
  updateStopwatchDisplay();
}

// Countdown logic
let countdownInput = [];

function updateCountdownDisplay(value) {
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const seconds = value % 60;
  countdownDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startCountdown() {
  countdownInterval = setInterval(() => {
    if (countdownValue > 0) {
      countdownValue--;
      updateCountdownDisplay(countdownValue);
    } else {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

function clearCountdown() {
  clearInterval(countdownInterval);
  countdownValue = 0;
  updateCountdownDisplay(countdownValue);
  countdownInput = [];
}

// Event listeners
document.getElementById("stopwatchBtn").addEventListener("click", showStopwatchScreen);
document.getElementById("countdownBtn").addEventListener("click", showCountdownScreen);

document.getElementById("backFromStopwatch").addEventListener("click", goBack);
document.getElementById("backFromCountdown").addEventListener("click", goBack);

document.getElementById("startStopBtn").addEventListener("click", () => {
  if (!stopwatchRunning) {
    startStopwatch();
    document.getElementById("startStopBtn").textContent = "Pause";
  } else {
    pauseStopwatch();
    document.getElementById("startStopBtn").textContent = "Continue";
  }
});

document.getElementById("clearStopwatchBtn").addEventListener("click", clearStopwatch);

document.querySelectorAll("#countdownScreen button[data-value]").forEach(button => {
  button.addEventListener("click", (e) => {
    countdownInput.push(e.target.dataset.value);
    countdownValue = parseInt(countdownInput.join('')) || 0;
    updateCountdownDisplay(countdownValue);
  });
});

document.getElementById("setCountdownBtn").addEventListener("click", () => {
  if (countdownValue > 0) {
    document.getElementById("startCountdownBtn").classList.remove("hidden");
    document.getElementById("clearCountdownBtn").classList.remove("hidden");
  }
});

document.getElementById("startCountdownBtn").addEventListener("click", startCountdown);
document.getElementById("clearCountdownBtn").addEventListener("click", clearCountdown);

