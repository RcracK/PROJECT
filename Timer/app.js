let timeBegan = null; //did the clock start ?
let timeStopped = null; //at what time was the time stopped?
let stoppedDuration = 0; // how long was the timer stopped?
let startInterval = null; // this is needed to stop the startInterval() method
let flag = false; //to control the start/stop of the timer

//Selectors
const cont = document.getElementsByClassName("timer-container")[0];
const display = document.getElementById("timer-display");
//Event Listeners
cont.addEventListener("click", startStop);
cont.addEventListener("dblclick", resetTimer);

//Functions
function startStop() {
  if (!flag) {
    startTimer();
    flag = true;
  } else {
    stopTimer();
    flag = false;
  }
}

function startTimer() {
  if (timeBegan === null) timeBegan = new Date();

  if (timeStopped !== null) stoppedDuration += new Date() - timeStopped;

  startInterval = setInterval(clockRunning, 10);
}

function stopTimer() {
  timeStopped = new Date();
  clearInterval(startInterval);
}

function clockRunning() {
  let currentTime = new Date();
  let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

  let minutes = timeElapsed.getUTCMinutes();
  let seconds = timeElapsed.getUTCSeconds();
  let milli = timeElapsed.getUTCMilliseconds();

  milli = Math.floor(milli / 10);

  display.innerHTML =
    (minutes = minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds = seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (milli = milli < 10 ? "0" + milli : milli);
}

function resetTimer() {
  clearInterval(startInterval);
  timeBegan = null;
  timeStopped = null;
  stoppedDuration = 0;
  display.innerHTML = "00:00:00";
  flag = false;
}
