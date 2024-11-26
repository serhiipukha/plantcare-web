const menu = document.querySelector(".nav");
const mobileMenuTrigger = document.querySelectorAll(".mobile__menu__trigger");

mobileMenuTrigger.forEach((button) => {
  button.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});
