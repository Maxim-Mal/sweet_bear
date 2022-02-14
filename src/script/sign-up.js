const btnSignUp = document.querySelector(".btn--sign-in");
const signUpForm = document.querySelector(".sign-up");
const blurBackground = document.querySelector(".sign-up-blur");

btnSignUp.addEventListener("click", () => {
  signUpForm.classList.toggle("sign-up__show");
  blurBackground.classList.toggle("sign-up-blur__show");
});

//Sign-up logic

const form = document.querySelector(".sign-up-form");
const username = document.querySelector(".sign-up-username");
const email = document.querySelector(".sign-up-email");
const password1 = document.querySelector(".sign-up-password-1");
const password2 = document.querySelector(".sign-up-password-2");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //Event.preventDefaul stop default behaviour

  checkInputs();
});

// cheking values from inputs
function checkInputs() {
  //taking values from inputs and trimming spaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const password1Value = password1.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    //show here error message and change class of input to emphasize error

    setErrorFor(username, "Username can't be blank");
  } else {
    setSuccessFor(username);
  }
}

function setErrorFor(input, message) {
  const formItem = input.parentElement; //container with label and input
  const error = formItem.querySelector(".sign-up-form__error");
  const iconError = formItem.querySelector(".sign-up-form__icon");

  error.innerText = message; //adding an error message

  //adding class to error message and icon inside input filed
  error.classList.add("error-show");
  iconError.classList.add("error-show");
}

function setSuccessFor(input) {
  const formItem = input.parentElement;
  const error = formItem.querySelector(".sign-up-form__error");
  const iconSuccess = formItem.querySelector(".sign-up-form__icon");
  iconSuccess.classList.add("success-show");
  iconSuccess.classList.remove("error-show");
  error.classList.remove("error-show");
}
