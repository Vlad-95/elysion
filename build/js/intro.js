$(document).ready(function() {
    
    $('.intro__carousel').on('init', function(event, slick) {
        let introSlideCountTotal = $('.intro__carousel-count-total').text(slick.slideCount);
    })

    $('.intro__carousel').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        let introSlideCountTotal = $('.intro__carousel-count-current').text(currentSlide + 1);
    })


    $('.intro__carousel').slick({
        arrows: true,
        dots: false,
        prevArrow: $('.intro__carousel-arrows-prev'),
        nextArrow: $('.intro__carousel-arrows-next'),
    
    });


    
    

    
})