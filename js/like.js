let likeHeart = document.querySelector(".button-social");
let likeCounter = document.querySelector(".motivation-likes");

likeHeart.onclick = function () {
  if (likeHeart.classList.contains("added")) {
    likeCounter.textContent--;
  } else {
    likeCounter.textContent++;
  }

  likeHeart.classList.toggle("added");
};
