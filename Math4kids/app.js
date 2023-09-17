//Selectors
let answer = 0;
let num1 = 0;
let num2 = 0;
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");

//Event Listeners
option1.addEventListener("click", function () {
  if (option1.innerHTML == answer) {
    generate_equation();
  } else {
    audio.play();
  }
});
option2.addEventListener("click", function () {
  if (option2.innerHTML == answer) {
    generate_equation();
  } else {
    audio.play();
  }
});
option3.addEventListener("click", function () {
  if (option3.innerHTML == answer) {
    generate_equation();
  } else {
    audio.play();
  }
});

//Functions

function generate_equation() {
  num1 = Math.floor(Math.random() * 15);
  num2 = Math.floor(Math.random() * 15);
  let dummy1 = Math.floor(Math.random() * 15);
  let dummy2 = Math.floor(Math.random() * 15);
  let allAnswers = [];
  let switchAnswers = [];
  answer = num1 + num2;
  allAnswers = [answer, dummy1, dummy2];

  for (i = allAnswers.length; i--; ) {
    switchAnswers.push(
      allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]
    );
  }

  option1.innerHTML = switchAnswers[0];
  option2.innerHTML = switchAnswers[1];
  option3.innerHTML = switchAnswers[2];

  //Update the content of the HTML element with id num1 & num2
  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;
}

generate_equation();
