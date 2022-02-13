const btnSignUp = document.querySelector(".btn--sign-in");
const signUpForm = document.querySelector(".sign-up");

btnSignUp.addEventListener("click", () =>
  signUpForm.classList.toggle("sign-up__show")
);
