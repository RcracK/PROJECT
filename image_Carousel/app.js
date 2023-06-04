// Selectors
const images = document.querySelectorAll(".image");
const previous = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelector(".dots");

// Event Listeners
previous.addEventListener("click", showPrevImg);
next.addEventListener("click", showNextImg);

//Functions
showImg();
let index = 0;
function showImg() {
  for (i = 0; i < images.length; i++) {
    if (i === index) {
      images[i].style.display = "block";
    } else {
      images[i].style.display = "none";
    }
  }
}
function showPrevImg() {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  showImg();
}
function showNextImg() {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  showImg();
}
