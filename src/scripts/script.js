'use strict';

const sliderImg = document.querySelector('.slider');
let currentImageIndex = 1;

setInterval(function moveSlider() {
  setTimeout(function clear() {
    sliderImg.classList.remove('move');
  }, 2000);

  currentImageIndex++;

  if (currentImageIndex <= 4) {
    sliderImg.classList.remove(`slider__${currentImageIndex - 1}`);
    sliderImg.classList.add('move', `slider__${currentImageIndex}`);
  }

  if (currentImageIndex >= 4) {
    currentImageIndex = 1;
    sliderImg.classList.add('move');
  }
}, 4000);
