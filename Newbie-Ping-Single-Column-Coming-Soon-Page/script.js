const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // check for email validation
  const email = form["email"];
  const emailValue = email.value;
  const small = form.querySelector("small");

  if (!emailValue) {
    email.classList.add("error");
    small.innerText = "Please provide a valid email addres";
    small.style.display = "inline-block";
  } else if (!validEmail(emailValue)) {
    email.classList.add("error");
    small.innerText = "Please provide a valid email addres";
    small.style.display = "inline-block";
  } else {
    email.classList.remove("error");
    small.innerText = "";
    small.style.display = "none";
  }
});

const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
