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

// Modal contact form
