//Selectors
const groceries = document.querySelector(".groceries");
const pencil = document.querySelector(".pencil");
const allItems = document.querySelector(".allItems");
const userInput = document.querySelector(".userInput");

//Event Listeners
pencil.addEventListener("click", () => (allItems.innerHTML = ""));

userInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") addItem();
});

//Functions
function addItem() {
  let h2 = document.createElement("h2");
  h2.innerHTML = "_ " + userInput.value;

  h2.addEventListener(
    "click",
    () => (h2.style.textDecoration = "line-through")
  );
  //allItems.insertAdjacentElement("beforeend", h2);
  allItems.appendChild(h2);
  userInput.value = "";
}
