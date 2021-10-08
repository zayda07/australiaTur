//SLIDER COUNTRIES PART
let slidePosition = 0;
let slides = document.getElementsByName("card");
let totalSlides = slides.length;
console.log(totalSlides);

document.
  getElementById('card__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('card__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('card--visible');
    slide.classList.add('card--hidden');
  }

  slides[slidePosition].classList.add('card--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
    console.log(slidePosition);
    console.log(totalSlides);
  } else {
    slidePosition++;
    console.log(slidePosition);
    console.log(totalSlides);
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}


//SLIDER SCENERIES PART
let slidePosition1 = 0;
let slides1 = document.getElementsByName("card1");
let totalSlides1 = slides1.length;
console.log(totalSlides1);

document.
  getElementById('card1__button--next')
  .addEventListener("click", function() {
    moveToNextSlide1();
  });
document.
  getElementById('card1__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide1();
  });

function updateSlidePosition1() {
  for (let slide1 of slides1) {
    slide1.classList.remove('card--visible');
    slide1.classList.add('card--hidden');
  }

  slides[slidePosition1].classList.add('card--visible');
}

function moveToNextSlide1() {
  if (slidePosition1 === totalSlides1 - 1) {
    slidePosition1 = 0;
    console.log(slidePosition1);
    console.log(totalSlides1);
  } else {
    slidePosition1++;
    console.log(slidePosition1);
    console.log(totalSlides1);
  }

  updateSlidePosition();
}

function moveToPrevSlide1() {
  if (slidePosition1 === 0) {
    slidePosition1 = totalSlides1 - 1;
  } else {
    slidePosition1--;
  }

  updateSlidePosition();
}










/*var sidney = document.getElementById('sidney');
var melbourne = document.getElementById('melbourne');
var brisbane = document.getElementById('brisbane');
var images = [
   sidney,melbourne,brisbane
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}*/
