let countdown;
const countdownDisplay = document.getElementById('countdown');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');

function startCountdown() {
  const minutes = parseInt(prompt("Enter the number of minutes to count down:"));
  const seconds = minutes * 60;
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdown);
  countdownDisplay.textContent = '';
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  countdownDisplay.textContent = display;
}
