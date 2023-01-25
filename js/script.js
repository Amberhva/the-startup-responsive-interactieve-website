// Navigation
let gap = 80;

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


// Scroll animation for the first & last fact
const observerCards = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-cards');
        } else {
            entry.target.classList.remove('show-cards');
        }
    });
});

const hiddenCardsElements = document.querySelectorAll('.hidden-cards');
hiddenCardsElements.forEach((el) => observerCards.observe(el));

// Scroll animation for the second fact
const observerSecondCard = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-second-card');
        } else {
            entry.target.classList.remove('show-second-card');
        }
    });
});

const hiddenSecondCardElements = document.querySelectorAll('.hidden-second-card');
hiddenSecondCardElements.forEach((el) => observerSecondCard.observe(el));