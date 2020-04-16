$(document).ready(function() {
    
    //результаты процедуры
    

    // вопросы ответы
    $('.service-question__item-title').click(function() {
        $(this).parent().toggleClass('active').find('.service-question__item-text').slideToggle();
        $('.service-question__item-title').not($(this)).parent().removeClass('active').find('.service-question__item-text').slideUp();
    });
})