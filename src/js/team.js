$(document).ready(function() {
    $('.team__slider').slick({
        variableWidth: true,
        focusOnSelect: true,
        dots: false,
        arrows: false,
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