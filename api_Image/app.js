//Selectors
const input = document.getElementById("input");
const grid = document.getElementsByClassName("grid")[0];
const searchIcon = document.getElementsByClassName("search")[0];

//Event Listeners
window.addEventListener("load", dayNightMode);
searchIcon.addEventListener("click", loadImg);
input.addEventListener("keydown", tap);

//Functions

function tap(event) {
  if (event.key === "Enter") {
    loadImg();
  }
}

//Fecth Image API
function loadImg() {
  removeImages();

  const url =
    "https://api.unsplash.com/search/photos/?query=" +
    input.value +
    "&per_page=10&client_id=iufmHOZo_Cs7kFEjSk3eMjp1rRR1zJGTirKKeL2SEf4";

  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      else alert(response.status);
    })
    .then((data) => {
      const imageNodes = [];
      for (let i = 0; i < data.results.length; i++) {
        imageNodes[i] = document.createElement("div");
        imageNodes[i].className = "img";
        imageNodes[i].style.backgroundImage =
          "url(" + data.results[i].urls.raw + ")";
        imageNodes[i].addEventListener("dblclick", function () {
          window.open(data.results[i].links.download, "_blank");
        });
        grid.appendChild(imageNodes[i]);
      }
    });
}

//Remove Images
function removeImages() {
  grid.innerHTML = " ";
}

//Check Day and Night
function dayNightMode() {
  const date = new Date();
  const hour = date.getHours();

  if (hour >= 7 && hour <= 19) {
    document.body.style.backgroundColor = "whitesmoke";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
}
