//first solution

// const scrollToTopBtn = document.querySelector(".btn-to-top");
// const rootElement = document.documentElement;

// function scrollToTop() {
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }
// scrollToTopBtn.addEventListener("click", scrollToTop);

//second solution

// We select the element we want to target
// var target = document.querySelectorAll("footer");

// var scrollToTopBtn = document.querySelector(".btn-to-top");
// var rootElement = document.documentElement;
// console.log(rootElement);
// // Next we want to create a function that will be called when that element is intersected
// function callback(entries, observer) {
//   // The callback will return an array of entries, even if you are only observing a single item
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // Show button
//       scrollToTopBtn.classList.add("btn-to-top__show");
//     } else {
//       // Hide button
//       scrollToTopBtn.classList.remove("btn-to-top__show");
//     }
//   });
// }

// function scrollToTop() {
//   rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }
// scrollToTopBtn.addEventListener("click", scrollToTop);

// // Next we instantiate the observer with the function we created above. This takes an optional configuration
// // object that we will use in the other examples.
// let observer = new IntersectionObserver(callback);
// // Finally start observing the target element
// observer.observe(target);

//third solution
const scrollToTopBtn = document.querySelector(".btn-to-top");

window.addEventListener("scroll", () =>
  scrollToTopBtn.classList.toggle("btn-to-top__show", window.scrollY > 800)
);
scrollToTopBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
