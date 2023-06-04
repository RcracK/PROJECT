// Selectors
const count = document.querySelector(".count");
const add = document.querySelector(".add-btn");
const sub = document.querySelector(".sub-btn");

//Event Listeners
add.addEventListener("click", increase);
sub.addEventListener("click", decrease);

//Functions
let num = 0;
function increase() {
  num++;
  count.innerHTML = num;
}

function decrease() {
  num--;
  count.innerHTML = num;
}
