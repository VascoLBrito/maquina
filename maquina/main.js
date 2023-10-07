// PARALLAX

const parallaxElement = document.querySelector(".parallax");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;

  parallaxElement.style.backgroundPositionY = offset * 0.5 + "px";
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
