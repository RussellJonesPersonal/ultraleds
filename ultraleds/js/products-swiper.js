var swiper = new Swiper(".products-swiper", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  slidesPerView: 2,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 7,
    },
  },
});