//
// Dots generate for sliders
//

const sliderDotBlocks = document.querySelectorAll(
  '[data-glide-el="controls[nav]"]'
);

if (sliderDotBlocks) {
  sliderDotBlocks.forEach(function (dotBlock) {
    let sliderSlides = dotBlock.parentNode.querySelector('.glide__slides');

    for (let i = 0; i < sliderSlides.children.length; i++) {
      let sliderDot = document.createElement('div');
      sliderDot.classList.add('glide__bullet');
      sliderDot.setAttribute('data-glide-dir', '=' + i);

      dotBlock.appendChild(sliderDot);
    }
  });
}

//
// Wide slider
//

const wideSlider = document.querySelector('.wide-slider .glide');

if (wideSlider) {
  const wideSliderG = new Glide(wideSlider, {
    type: 'carousel',
    perView: 1,
    gap: 0
  });

  wideSliderG.on('move', function () {
    let bullets = document.querySelectorAll(
      '.wide-slider__bullets .glide__bullet'
    );
    bullets.forEach(function (elem) {
      elem.classList.remove('glide__bullet--active');
    });
    let activeBullet = document.querySelector(
      '.wide-slider__bullets .glide__bullet[data-glide-dir="=' +
      wideSliderG.index +
      '"]'
    );
    activeBullet.classList.add('glide__bullet--active');
  });

  wideSliderG.mount();
}

//
// Header cart
//

const headerCart = document.querySelector('.header__basket-wrapper');

if (headerCart) {
  const headerPopup = document.querySelector('.header__popup');
  const headerPopupClose = document.querySelector('.header__popup-close');

  headerCart.addEventListener('click', function (e) {
    headerCart.classList.add('open');
    headerPopup.classList.add('open');
  });

  headerPopupClose.addEventListener('click', function (e) {
    e.stopPropagation();
    headerCart.classList.remove('open');
    headerPopup.classList.remove('open');
  });
}

//
// Category opener
//

const categoriesBtn = document.querySelector('.catalog__aside-btn');

if (categoriesBtn) {
  const categoriesPopup = document.querySelector('.catalog__categories');

  categoriesBtn.addEventListener('click', function () {
    categoriesBtn.classList.toggle('open');
    categoriesPopup.classList.toggle('open');
  });
}

//
// Filter opener
//

const filterBtn = document.querySelector('.catalog__aside-btn-settings');

if (filterBtn) {
  const filterPopup = document.querySelector('.filter');

  filterBtn.addEventListener('click', function () {
    filterPopup.classList.toggle('open');
  });
}

//
// Mobile menu opener
//

const menuBtn = document.querySelector('.header__mobile-menu');

if (menuBtn) {
  const navPopup = document.querySelector('.header__nav');

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    navPopup.classList.toggle('open');
  });
}

//
// Animations
//

const decorateAdvantagesLeft = basicScroll.create({
  elem: document.querySelector('.our-products__decorate--to-right'),
  from: 'middle-middle',
  to: 'bottom-top',
  props: {
    '--dl': {
      from: 0,
      to: '-50%'
    }
  }
});

decorateAdvantagesLeft.start();

const decorateAdvantagesRight = basicScroll.create({
  elem: document.querySelector('.our-products__decorate--to-right'),
  from: 'middle-middle',
  to: 'bottom-top',
  props: {
    '--dr': {
      from: 0,
      to: '-30%'
    }
  }
});

decorateAdvantagesRight.start();

//
// Price input slider
//

const priceSliderElem = document.querySelector('.filter__price-elem');

if (priceSliderElem) {
  const priceSliderMin = document.querySelector('[name="priceMin"]');
  const priceSliderMax = document.querySelector('[name="priceMax"]');

  const priceSlider = noUiSlider.create(priceSliderElem, {
    start: [+priceSliderMin.value, +priceSliderMax.value],
    connect: true,
    range: {
      min: +priceSliderMin.value,
      max: +priceSliderMax.value
    }
  });

  priceSlider.on('update', function (values, handle) {
    if (handle) {
      priceSliderMax.value = Math.round(values[1]);
    } else {
      priceSliderMin.value = Math.round(values[0]);
    }
  });

  priceSliderMin.addEventListener('change', function () {
    priceSlider.set([this.value, null]);
  });

  priceSliderMax.addEventListener('change', function () {
    priceSlider.set([null, this.value]);
  });
}