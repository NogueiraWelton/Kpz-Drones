const scrollSections = document.querySelectorAll(".scroll");
const halfWindow = window.innerHeight * 0.5;

function scrollAnimation() {
  scrollSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - halfWindow < 0;

    if (isSectionVisible) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

const openMenu = document.querySelector(".hamburguer-menu");

function toggleMenu() {
  const menu = document.querySelector(".header-nav-menu");
  const links = document.querySelectorAll(".header-nav-menu li a");

  openMenu.classList.toggle("active");
  menu.classList.toggle("active");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

window.onload = () => {
  window.addEventListener("scroll", scrollAnimation);
  openMenu.addEventListener("click", toggleMenu);
};
