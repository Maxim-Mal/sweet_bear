import "./styles/main.scss";

// This code work only with a <button> tag in HTML,  doesn't work with <a></a>. Why?

const cardBtn = document.querySelector(".card__btn");
const backSide = document.querySelector(".card__back-side");
const frontSide = document.querySelector(".card__image");
const bookmark = document.querySelector(".card__bookmark");

let cardFlip = false;

cardBtn.addEventListener("click", () => {
  if (!cardFlip) {
    backSide.classList.add("card__back-side--show");
    frontSide.classList.add("card__image--show");
    bookmark.classList.add("card__bookmark--toggle");
    cardBtn.innerHTML = "hide ingridients";
    cardFlip = true;
  } else {
    backSide.classList.remove("card__back-side--show");
    frontSide.classList.remove("card__image--show");
    bookmark.classList.remove("card__bookmark--toggle");
    cardBtn.innerHTML = "show ingridients";
    cardFlip = false;
  }
});
