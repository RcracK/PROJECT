//Selectors
const amt = document.querySelector("#amount");
const guest = document.querySelector("#guest");
const service = document.querySelector("#quality");
const calc = document.querySelector(".btnC");
const tipAmount = document.querySelector("#tip-amount");

//Event Listeners
calc.addEventListener("click", calculate);

//Functions
function calculate() {
  const tip = ((amt.value * service.value) / guest.value).toFixed(2);

  amt.value = "";
  guest.value = "";
  service.value = "";

  if (tip === "NaN") {
    tipAmount.innerHTML = "tip $0 each";
    showTipAmount();
  } else {
    tipAmount.innerHTML = "Tip $" + tip + " each";
    showTipAmount();
  }
}

function showTipAmount() {
  let x = tipAmount;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
