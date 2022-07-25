const navButton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

navButton.addEventListener("click", navButtonClick);

function navButtonClick() {
  navButton.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
