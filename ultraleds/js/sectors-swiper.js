var swiper = new Swiper('.sectors-swiper', {
  spaceBetween: 45,
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    enabled: true,
    clickable: true,
    el: '.swiper-pagination',
  },
  scrollbar: {
    enabled: false,
  },
  breakpoints: {
    768: {
      loop: true,
      slidesPerView: 2,
    },
    992: {
      loop: true,
      slidesPerView: 3,
    },
  },
});