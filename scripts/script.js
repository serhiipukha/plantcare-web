/* Menu */
const menu = document.querySelector(".nav");
const mobileMenuTrigger = document.querySelectorAll(".mobile__menu__trigger");

mobileMenuTrigger.forEach((button) => {
  button.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});

const sidebar = document.querySelector(".sidebar");
const mobileSidebarTrigger = document.querySelectorAll(
  ".sidebar__mobile__trigger"
);

mobileSidebarTrigger.forEach((button) => {
  button.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
});
