const cardBtn = document.querySelector(".card__btn btn");
let cardFlip = false;

cardBtn.addEventListener("click", () => {
  if (!cardFlip) {
    cardBtn.classList.add("show");
    cardFlip = true;
  } else {
    cardBtn.classList.remove("show");
    cardFlip = false;
  }
});
