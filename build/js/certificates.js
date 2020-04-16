$(document).ready(function() {
   $('.certificates__slider').slick({
       slidesToShow: 6,
       slidesToScroll: 1,
       dots: false,
       arrows: true,
       infinite: true,
       prevArrow: $('.certificates__prev'),
       nextArrow: $('.certificates__next'),
       responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 4
            }
        },
        {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
        }
      ]
   }) 
});