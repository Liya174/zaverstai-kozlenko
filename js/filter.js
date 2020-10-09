let articles = document.querySelectorAll(".stories-box");
let filter = document.querySelector(".stories-select");

filter.onchange = function () {
  for (let article of articles) {
    console.log(article);
    if (article.dataset.category !== filter.value && filter.value !== "all") {
      article.classList.add("hidden");
    } else {
      article.classList.remove("hidden");
    }
  }
};
