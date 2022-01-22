//cardList will work withuot wrapping to array but better to wrap due to  dif. between NodeList and array

export function initCards() {
  const cardList = Array.from(document.querySelectorAll(".card"));
  cardList.forEach(pushBnt);
}

// cardList.forEach((card) => {
//   pushBnt(card);
// });

function pushBnt(element) {
  const cardBtn = element.querySelector(".card__btn");
  const backSide = element.querySelector(".card__back-side");
  const frontSide = element.querySelector(".card__image");
  const bookmark = element.querySelector(".card__bookmark");

  cardBtn.addEventListener("click", () => {
    backSide.classList.toggle("card__back-side--show");
    frontSide.classList.toggle("card__image--show");
    bookmark.classList.toggle("card__bookmark--toggle");

    if (cardBtn.innerText === "SHOW INGRIDIENTS") {
      cardBtn.innerText = "hide ingridients";
    } else {
      cardBtn.innerText = "SHOW Ingridients";
    }
  });
}

////Bookmark clicking on card

export function bookmarkOnCard() {
  const cardList = Array.from(document.querySelectorAll(".card"));

  cardList.forEach(bookmarkSwitch);

  function bookmarkSwitch(element) {
    const bookmarkBtn = element.querySelector(".card__bookmark--icon");
    bookmarkBtn.addEventListener("click", () => {
      bookmarkBtn.classList.toggle("card__bookmark--icon-clicked");
    });
  }
}
