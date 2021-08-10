const scrollSections = document.querySelectorAll(".scroll");
const halfWindow = window.innerHeight * 0.5;
const activeItem = "active";

function scrollAnimation() {
  scrollSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - halfWindow < 0;

    if (isSectionVisible) {
      section.classList.add(activeItem);
    } else {
      section.classList.remove(activeItem);
    }
  });
}

const openMenu = document.querySelector(".hamburguer-menu");

function toggleMenu() {
  const menu = document.querySelector(".header-nav-menu");
  const links = document.querySelectorAll(".header-nav-menu li a");

  openMenu.classList.toggle(activeItem);
  menu.classList.toggle(activeItem);
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove(activeItem);
      openMenu.classList.remove(activeItem);
    });
  });
}

window.onload = () => {
  window.addEventListener("scroll", scrollAnimation);
  openMenu.addEventListener("click", toggleMenu);
};
