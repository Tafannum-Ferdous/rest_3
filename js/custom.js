var lastScroll = 0;
var isScrolled = false;
window.addEventListener("scroll", function () {
  var topHeader = document.querySelector(".topheader");
  var currentScroll =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
  var scrollDirection = currentScroll < lastScroll;
  var shouldToggle = isScrolled && scrollDirection;
  isScrolled = currentScroll > 100;
  topHeader.classList.toggle("active", shouldToggle);
  lastScroll = currentScroll;
});