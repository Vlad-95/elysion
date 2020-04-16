$(document).ready(function() {

    // открытие селекта карт на мобиле
    $('.loyalty__tabs-current').click(function() {
        $('.loyalty__tabs-dropdown').slideToggle();
    });

    $('.loyalty__tabs-dropdown').on('click', '.loyalty__tabs-other:not(.active)', function() {
        var clickedElem = $(this).text();
        $('.loyalty__tabs-current p').text(clickedElem);

        $('.loyalty__tabs-dropdown').slideUp();

        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.loyalty__tabs').find('.loyalty__tabs-content').find('.loyalty__tabs-content-item').removeClass('active').eq($(this).index()).addClass('active');

    });
})