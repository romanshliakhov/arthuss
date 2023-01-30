import Swiper from '../vendor/swiper.js';

// Hero slider
let sliderHero = new Swiper(".hero__slider", {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  observer: true,
  navigation: {
      nextEl: ".hero__slider-next",
      prevEl: ".hero__slider-prev",
      clickable: true,
  },
});

// Default slider
for (const container of  document.querySelectorAll('.container') ) {
  let mainSlider = new Swiper(container.querySelector('.block__slider'), {
    slidesPerView: 'auto',
    freeMode: true,
    observer: true,
    spaceBetween: 14,
    loop: true,
    adaptiveHeight: true,
    navigation: {
      nextEl: container.querySelector(".block__slider-next"),
      prevEl: container.querySelector(".block__slider-prev"),
      clickable: true,
  },
    // breakpoints: {
    //   320: {
    //       slidesPerView: 'auto',
    //       freeMode: true,
    //       spaceBetween: 10,
    //     },
    //   1440: {
    //     slidesPerView: 5,
    //     spaceBetween: 18,
    //   }
    // }
  });
}

// Socials slider
let sliderSocials = new Swiper(".socials__slider", {
  spaceBetween: 70,
  slidesPerView: 'auto',
  loop: true,
  observer: true,
  speed: 20000,
  autoplay: {
      delay: 0,
  },
});













