//Selectors
const day = document.querySelector(".day");
const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const ampm = document.querySelector(".ampm");

//Event Listeners
window.addEventListener("load", calculateTime);

//Functions
function calculateTime() {
  const date = new Date();

  let dayNumber = date.getDay();
  let hour = date.getHours();
  let min = date.getMinutes();
  let am_pm = hour >= 12 ? "PM" : "AM";
  let dayNames = ["SUN", "MON", "TUES", "WED", "THU", "FRI", "SAT"];

  hour = hour % 12;
  hour = hour ? hour : "12";
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;

  day.innerHTML = dayNames[dayNumber];
  hours.innerHTML = hour;
  minutes.innerHTML = min;
  ampm.innerHTML = am_pm;

  setTimeout(calculateTime, 200);
}
