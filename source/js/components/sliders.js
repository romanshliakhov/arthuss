import Swiper from '../vendor/swiper.js';

// Hero slider
let sliderHero = new Swiper(".hero__slider", {
  slidesPerView: 1,
  loop: true,
  observer: true,
  navigation: {
      nextEl: ".hero__slider-next",
      prevEl: ".hero__slider-prev",
      clickable: true,
  },
});

// Banner slider
let sliderBanners = new Swiper(".banners__slider", {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  observer: true,
  navigation: {
      nextEl: ".banners__slider-next",
      prevEl: ".banners__slider-prev",
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
  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    576: {
      spaceBetween: 40,
    },
    992: {
      spaceBetween: 70,
    }
  }
});

// Feedback slider
let sliderFeedbacks = new Swiper(".branding__feedbacks-slider", {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  observer: true,
  navigation: {
      nextEl: ".branding__slider-next",
      prevEl: ".branding__slider-prev",
      clickable: true,
  },
});


// Modal slider
let sliderModalProduct = new Swiper(".modal__product-slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  spaceBetween: 13,
  slidesPerView: 2,
  slidesPerGroup: 2,
  grid: {
    rows: 1,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  }
});


// Product-page Slider
for (const sliderProduct of document.querySelectorAll('.product__images-slider')) {
  if (sliderProduct) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(min-width:993px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(sliderProduct, {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 10,
          observer: true,
          observeParents: true,
          adaptiveHeight: true,
          breakpoints: {
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            576: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }

}

// Order history Slider
for (const sliderProduct of document.querySelectorAll('.account__order-slider')) {
  if (sliderProduct) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(max-width:576px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(sliderProduct, {
          slidesPerView: 'auto',
          spaceBetween: 15,
          observer: true,
          observeParents: true,
          adaptiveHeight: true,
          loop: true,
          navigation: {
            nextEl: ".account__slider-next",
            prevEl: ".account__slider-prev",
            clickable: true,
        },
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }

}









