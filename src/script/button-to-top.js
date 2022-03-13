const scrollToTopBtn = document.querySelector(".btn-to-top");

window.addEventListener("scroll", () =>
  scrollToTopBtn.classList.toggle("btn-to-top__show", window.scrollY > 800)
);
scrollToTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
