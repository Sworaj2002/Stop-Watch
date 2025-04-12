let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.getElementById("display");
let interval = null;
let isRunning = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "00" + milliseconds : 
           milliseconds < 100 ? "0" + milliseconds : milliseconds;

  display.innerText = `${h}:${m}:${s}:${ms}`;
}

function start() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      milliseconds += 10;
      if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 10); // update every 10ms
  }
}

function stop() {
  clearInterval(interval);
  isRunning = false;
}

function reset() {
  clearInterval(interval);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  updateDisplay();
  isRunning = false;
}
