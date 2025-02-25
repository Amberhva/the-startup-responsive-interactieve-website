// Navigation
let gap = 50;

$(document).ready(function(){
    $(window).bind('scroll', function(){
        if ($(window).scrollTop() > gap){
            $('nav').addClass('active');
        } else {
            $('nav').removeClass('active');
        }
    });
});

// Intersection observer scroll animation
// Bron: https://www.youtube.com/watch?v=T33NN_pPeNI
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Carousel
// Bron: https://www.youtube.com/watch?v=9HcxHDS2w1s
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

// Counting numbers facts & figures
// let valueDisplays = document.querySelectorAll(".num");
// let interval = 2000;

// valueDisplays.forEach(valueDisplay => {
//     let startValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    
//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(function(){
//         startValue += 1;
//         valueDisplay.textContent = startValue;
//         if (startValue == endValue) {
//             clearInterval(counter);
//         }
//     }, duration);
// });