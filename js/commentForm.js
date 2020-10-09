let comment = document.querySelector(".comment-textarea");
let submit = document.querySelector(".comment-submit");
let name = document.querySelector(".comment-name");
let commentList = document.querySelector(".reviews-box");
let commentForm = document.querySelector(".comment-form");
let email = document.querySelector(".comment-email");
console.log(comment.value);

commentForm.onsubmit = function (evt) {
  evt.preventDefault();

  console.log(comment.value);
  let review = document.createElement("li");
  review.classList.add("review");
  console.log(review);

  let reviewFace = document.createElement("div");
  reviewFace.classList.add("review-face");
  review.append(reviewFace);

  let reviewImage = document.createElement("img");
  reviewImage.src = "../img/face.svg";
  reviewImage.classList.add("review-img");
  reviewFace.append(reviewImage);

  let reviewName = document.createElement("p");
  reviewName.classList.add("review-name", "text");
  reviewName.textContent = name.value;
  reviewFace.append(reviewName);

  let reviewMessage = document.createElement("p");
  reviewMessage.classList.add("text");
  reviewMessage.textContent = comment.value;
  review.append(reviewMessage);
  console.log(reviewName, reviewMessage);

  comment.value = "";
  commentList.append(review);
};

comment.oninput = function () {
  if (comment.value.length < 20 || comment.value.length > 200) {
    comment.classList.add("warning");
    submit.disabled = true;
  } else {
    comment.classList.remove("warning");
    submit.disabled = false;
  }
};
