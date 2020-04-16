$(document).ready(function() {
    $('.advantages__wrap').slick({
        mobileFirst: true,
        variableWidth: true,
        focusOnSelect: true,
        
        dots: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 768,
              settings: "unslick"
            }
          ]
    });
});