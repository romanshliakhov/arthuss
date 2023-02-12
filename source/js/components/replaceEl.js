let replaceSettings = {
  beforebegin: 'beforebegin', // перед самим элементом targetElement
  afterbegin: 'afterbegin', // внутри элемента targetElement, перед его первым потомком
  beforeend: 'beforeend', //  внутри элемента targetElement, после его последнего потомка
  afterend: 'afterend', // после самого элемента targetElement
  mobile: 576,
  smallTablet: 768,
  tablet: 992
}

let elementName = {
  headerLogo: '.header__logo',
  headerLogoParent: '.header__inner',
  headerLogoMobile: '.mobile__menu-head',

  burger: '.burger',
  burgerDefault: '.header__inner',
  burgerMobile: '.mobile__menu-head',

  basket: '.basket',
  basketDefault: '.header__icons',
  basketMobile: '.mobile__menu-head',

  lang: '.lang',
  langParent: '.header__logo',
  langMobile: '.mobile__profile',

  heroSliderControls: '.hero__slider-controls',
  heroSliderControlsParent: '.hero__inner',
  heroSliderControlsMobile: '.hero__slider',

  visionaryBanner: '.visionary__banner',
  visionaryBannerParent: '.visionary__info',
  visionaryBannerMobile: '.visionary__info-bot',

}

let items = [...document.querySelectorAll('.wrapper')];

const replaceElements = (elements, elementClass, desktopClass, mobileClass, mobileSetting, desktopSetting, breakpointSetting) => {
  let containerWidth = document.documentElement.clientWidth;

  elements.map(function (item) {
    const myElement = item.querySelector(elementClass);
    const myDesktop = item.querySelector(desktopClass);
    const myMobile = item.querySelector(mobileClass);

    (function() {
      if (myDesktop && myElement && myMobile) {
        containerWidth <= breakpointSetting ?
        myMobile.insertAdjacentElement(mobileSetting, myElement) :
        myDesktop.insertAdjacentElement(desktopSetting, myElement);
      }
    }());
  });
}

burgerBtn = document.querySelector('.burger');

window.addEventListener('resize', () => {
  if(burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      if(burgerBtn.classList.contains('active')) {
        console.log(burgerBtn);

        replaceElements(items, elementName.headerLogo, elementName.headerLogoParent, elementName.headerLogoMobile, replaceSettings.afterbegin, replaceSettings.afterbegin, replaceSettings.smallTablet);

        replaceElements(items, elementName.burger, elementName.burgerDefault, elementName.burgerMobile, replaceSettings.afterbegin, replaceSettings.afterbegin, replaceSettings.smallTablet);

        replaceElements(items, elementName.basket, elementName.basketDefault, elementName.basketMobile, replaceSettings.beforeend, replaceSettings.beforeend, replaceSettings.smallTablet);
      } else {
        replaceElements(items, elementName.headerLogo, elementName.headerLogoMobile, elementName.headerLogoParent, replaceSettings.afterbegin, replaceSettings.afterbegin, replaceSettings.smallTablet);

        replaceElements(items, elementName.burger, elementName.burgerMobile, elementName.burgerDefault, replaceSettings.afterbegin, replaceSettings.afterbegin, replaceSettings.smallTablet);

        replaceElements(items, elementName.basket, elementName.basketMobile, elementName.basketDefault, replaceSettings.beforeend, replaceSettings.beforeend, replaceSettings.smallTablet);
      }
    })
  }

  replaceElements(items, elementName.lang, elementName.langParent, elementName.langMobile, replaceSettings.afterend, replaceSettings.afterend, replaceSettings.smallTablet);

  replaceElements(items, elementName.heroSliderControls, elementName.heroSliderControlsParent, elementName.heroSliderControlsMobile, replaceSettings.afterbegin, replaceSettings.afterbegin, replaceSettings.tablet);

  replaceElements(items, elementName.visionaryBanner, elementName.visionaryBannerParent, elementName.visionaryBannerMobile, replaceSettings.beforebegin, replaceSettings.beforebegin, replaceSettings.tablet);
});

window.addEventListener('DOMContentLoaded', () => {
  if(burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      if(burgerBtn.classList.contains('active')) {
        console.log(burgerBtn);

        replaceElements(items, elementName.headerLogo, elementName.headerLogoParent, elementName.headerLogoMobile, replaceSettings.afterbegin, replaceSettings.afterbegin, replaceSettings.smallTablet);

        replaceElements(items, elementName.burger, elementName.burgerDefault, elementName.burgerMobile, replaceSettings.afterbegin, replaceSettings.afterbegin, replaceSettings.smallTablet);

        replaceElements(items, elementName.basket, elementName.basketDefault, elementName.basketMobile, replaceSettings.beforeend, replaceSettings.beforeend, replaceSettings.smallTablet);
      } else {
        replaceElements(items, elementName.headerLogo, elementName.headerLogoMobile, elementName.headerLogoParent, replaceSettings.afterbegin, replaceSettings.afterbegin, replaceSettings.smallTablet);

        replaceElements(items, elementName.burger, elementName.burgerMobile, elementName.burgerDefault, replaceSettings.afterbegin, replaceSettings.afterbegin, replaceSettings.smallTablet);

        replaceElements(items, elementName.basket, elementName.basketMobile, elementName.basketDefault, replaceSettings.beforeend, replaceSettings.beforeend, replaceSettings.smallTablet);
      }
    })
  }

  replaceElements(items, elementName.lang, elementName.langParent, elementName.langMobile, replaceSettings.afterend, replaceSettings.afterend, replaceSettings.smallTablet);

  replaceElements(items, elementName.heroSliderControls, elementName.heroSliderControlsParent, elementName.heroSliderControlsMobile, replaceSettings.afterbegin, replaceSettings.afterbegin, replaceSettings.tablet);

  replaceElements(items, elementName.visionaryBanner, elementName.visionaryBannerParent, elementName.visionaryBannerMobile, replaceSettings.beforebegin, replaceSettings.beforebegin, replaceSettings.tablet);
});
