const form = document.querySelector(".right-col form");
const inputs = document.querySelectorAll(".right-col form input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add("error");
    } else {
      input.parentElement.classList.remove("error");
      if (input.type === "email") {
        validateEmail(input.value)
          ? input.parentElement.classList.remove("error")
          : input.parentElement.classList.add("error");
      }
    }
  });
});
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
