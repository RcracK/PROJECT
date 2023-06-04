// Selectors
const msgInput = document.querySelector(".msg-input");
const msgButton = document.querySelector(".msg-button");
const msgList = document.querySelector(".msg-list");

//Event Lsiteners
msgButton.addEventListener("click", showMsg);
// enter button to submit
msgInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") showMsg();
});
const array = [];

//functions
function showMsg(e) {
  //ShowDiv
  const showDiv = document.createElement("div");
  showDiv.classList.add("message");

  //ShowLi
  const showLi = document.createElement("li");
  showLi.innerHTML = msgInput.value;
  array.push(msgInput.value);
  showLi.classList.add("messageList");
  showDiv.appendChild(showLi);

  //Append to message container
  msgList.appendChild(showDiv);
  msgInput.value = "";
}
