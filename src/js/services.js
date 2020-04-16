$(document).ready(function() {
    let servicesClickHandler = function(evt) {
        evt.preventDefault();
           
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.services-main__tabs').siblings('.services-main__content').find('.services-main__content-item').removeClass('active').eq($(this).index()).addClass('active');
    }

    if (window.innerWidth >= window.common.windowWidth.desktop) {
        $('.services-main__wrap').on('click', '.services-main__tabs-item', servicesClickHandler);
    }

    $(window).resize(function() {

        if (window.innerWidth >= window.common.windowWidth.desktop) {
            $('.services-main__wrap').on('click', '.services-main__tabs-item', servicesClickHandler);
        } else {
            $('.services-main__wrap').off('click', '.services-main__tabs-item', servicesClickHandler);
        }
    })
  
    
})