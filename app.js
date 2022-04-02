import 'core-js/stable';
import 'regenerator-runtime';
import anime from 'animejs';
import Letterize from 'letterizejs';
import './styles.css';

const sky = document.getElementById('sky');
const shootingStar = document.querySelector('.shootingStar');
const headerName = document.querySelector('.about__me--name');
const sliderExists = document.querySelector('.slider');
const icons = document.querySelectorAll('.skill-language-row-icons');

const starNum = 60;
const shootingStarNum = 30;

const windowWidth = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth
);
const windowHeight = Math.max(
  document.documentElement.clientHeight,
  window.innerHeight
);

const starryNight = () => {
  anime({
    targets: ['#sky .star'],
    opacity: [
      {
        duration: 700,
        value: '0',
      },
      {
        duration: 700,
        value: '1',
      },
    ],
    easing: 'linear',
    loop: true,
    delay: (el, i) => 50 * i,
  });
};

const shootingStars = () => {
  anime({
    targets: ['.shootingStar .wish'],
    easing: 'linear',
    loop: true,
    delay: (el, i) => 1000 * i,
    opacity: [
      {
        duration: 700,
        value: '1',
      },
    ],
    width: [
      {
        value: '150px',
      },
      {
        value: '0px',
      },
    ],
    translateX: 350,
  });
};

const getRandomRadius = () => {
  return Math.random() * 0.7 + 0.6;
};

const getRandomX = () => {
  return Math.floor(Math.random() * Math.floor(windowWidth)).toString();
};

const getRandomY = () => {
  return Math.floor(Math.random() * Math.floor(windowHeight)).toString();
};

[...Array(starNum)].map(() => {
  return sky.insertAdjacentHTML(
    'afterbegin',
    `
  <circle cx=${getRandomX()} cy=${getRandomY()} r=${getRandomRadius()} stroke='none' strokeWidth='0' fill='white' class='star'></circle>
  `
  );
});

[...Array(shootingStarNum)].map(() => {
  return shootingStar.insertAdjacentHTML(
    'afterbegin',
    `
  <div class='wish' style='left: ${getRandomY()}px; top: ${getRandomX()}px;'></div>
  `
  );
});

if (headerName) {
  const myName = new Letterize({
    targets: document.querySelector('.about__me--name'),
    wrapper: 'div',
  });

  const animation = anime.timeline({
    targets: myName.listAll,
    delay: anime.stagger(50),
    loop: true,
  });

  animation
    .add({
      translateY: -40,
    })
    .add({
      translateY: 0,
    });
}

anime({
  targets: icons,
  scale: [
    { value: 0.1, easing: 'easeOutSine', duration: 500 },
    { value: 1, easing: 'easeInOutQuad', duraction: 1200 },
  ],
  delay: anime.stagger(200, { grid: [4, 2], from: 'center' }),
});

if (sliderExists) {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxSlide = slides.length;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    currentSlide === maxSlide - 1 ? (currentSlide = 0) : currentSlide++;
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  const prevSlide = function () {
    currentSlide === 0 ? (currentSlide = maxSlide - 1) : currentSlide--;
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  const activeDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach((dot) => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const init = function () {
    createDots();
    activeDot(0);
    goToSlide(0);
  };

  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  document.querySelector('nav').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('nav__item')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
}

window.addEventListener('load', function () {
  starryNight();
  shootingStars();
});
