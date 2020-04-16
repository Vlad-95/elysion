$(document).ready(function() {
    $('.portfolio__slider').slick({
        variableWidth: true,
        focusOnSelect: true,
        prevArrow: $('.portfolio__prev'),
        nextArrow: $('.portfolio__next'),
        dots: false,
        arrows: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false
              }
            }
          ]
    });
});