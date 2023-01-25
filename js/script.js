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