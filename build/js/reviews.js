$(document).ready(function() {
   $('.reviews__wrap').slick({
       mobileFirst: true,
       dots: true,
       arrows: false,
       responsive: [
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
        }
      ]
   }) 
});