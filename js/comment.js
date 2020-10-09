let messageForm = document.querySelector(".input-big");
let submitButton = document.querySelector(".write-me__submit");
console.log(messageForm);
console.log(submitButton);

messageForm.oninput = function () {
  if (messageForm.value.length < 20 || messageForm.value.length > 200) {
    messageForm.classList.add("warning");
    submitButton.disabled = true;
  } else {
    messageForm.classList.remove("warning");
    submitButton.disabled = false;
  }
};
