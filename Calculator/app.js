//Selectors
const input = document.querySelector(".userInput");
const buttons = document.querySelectorAll(".btn");

const cl = document.querySelector(".btnE");
const equal = document.querySelector(".btnEqual");

//Event Listeners
buttons.forEach((button) => {
  button.addEventListener("click", () => show(button));
});

equal.addEventListener("click", calculate);
cl.addEventListener("click", erase);

//Function
let expression = "";
function show(item) {
  expression += item.value;
  input.value = expression;
}

function calculate() {
  input.value = eval(expression);
  expression = "";
}

function erase() {
  expression = "";
  input.value = expression;
}
