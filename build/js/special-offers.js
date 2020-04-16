$(document).ready(function() {
    $('.special-offers__slider').slick({
        variableWidth: true,
        focusOnSelect: true,
        prevArrow: $('.special-offers__prev'),
        nextArrow: $('.special-offers__next'),
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