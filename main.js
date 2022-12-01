const mainMenu = document.querySelector("#menu");
const closemenu = document.querySelector(".closeMenu");
const openmenu = document.querySelector(".openMenu");

openmenu.addEventListener("click", show);
closemenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  openmenu.style.display = "none";
  closemenu.style.display = "block";
}

function close() {
  mainMenu.style.display = "none";
  openmenu.style.display = "block";
  closemenu.style.display = "none";
}
