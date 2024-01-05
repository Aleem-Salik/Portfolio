const btnMenu = document.querySelector(".btn-nav-mobile");
const navLinksEl = document.querySelector(".nav-links");
const navbar = document.querySelector("#navbar");
const socialMedia = document.querySelector(".social-media");

btnMenu.addEventListener("click", function () {
  navbar.classList.toggle("nav-open");
});

navLinksEl.addEventListener("click", function (e) {
  if (!e.target.classList.contains("nav-link")) return;
  navbar.classList.remove("nav-open");
});

socialMedia.addEventListener("click", function (e) {
  if (!e.target.classList.contains("social-media-logo")) return;
  navbar.classList.remove("nav-open");
});
