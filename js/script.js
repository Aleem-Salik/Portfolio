const btnMenu = document.querySelector(".btn-nav-mobile");
const navLinksEl = document.querySelector(".nav-link");
const navbar = document.querySelector("#navbar");

btnMenu.addEventListener("click", function () {
  navbar.classList.toggle("nav-open");
});

navLinksEl.addEventListener("click", function () {
  navbar.classList.remove("nav-open");
});
