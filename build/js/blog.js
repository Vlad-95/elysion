$(document).ready(function() {
    $('.blog__slider').slick({
        arrows: true,
        dots: false,
        variableWidth: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.blog__prev'),
        nextArrow: $('.blog__next'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: true,
                    variableWidth: true,
                    slidesToScroll: 1
                    
                }
            }
        ]
    })
});