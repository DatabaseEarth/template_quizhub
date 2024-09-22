new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,

  // Autoplay
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 4,
    },
    600: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 7,
    },
    854: {
      slidesPerView: 8,
    },
    1024: {
      slidesPerView: 9,
    },
    1535: {
      slidesPerView: 10,
    },
  },
});
