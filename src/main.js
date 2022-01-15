import "./styles/main.scss";

// This code work only with a <button> tag in HTML,  doesn't work with <a></a>. Why?
//for each card
//quarySelectorAll - node list
const card = document.querySelector(".card");
const cardBtn = card.querySelector(".card__btn");
const backSide = card.querySelector(".card__back-side");
const frontSide = card.querySelector(".card__image");
const bookmark = card.querySelector(".card__bookmark");

let cardFlip = false;
//classList.toggle try this one
cardBtn.addEventListener("click", () => {
  if (!cardFlip) {
    backSide.classList.add("card__back-side--show");
    frontSide.classList.add("card__image--show");
    bookmark.classList.add("card__bookmark--toggle");
    //try to use .textContent
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
