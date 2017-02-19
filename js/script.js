$(function() {
    $('.hamburger').click(function(e) {
        $(this).toggleClass('is-active');
        $('.navbar > ul').toggleClass('show-navbar');
    });

    $('.navbar > ul').click(function(e) {
        $('.hamburger').removeClass('is-active');
        $(this).removeClass('show-navbar');
    });

    $('a[href^="#"]').click(function(e) {
        var href = $(this).attr('href');
        var scrollTop = href === '#' ? 0 : $(href).offset().top - 70;

        $('html, body').animate({
            scrollTop: scrollTop,
        });
    });
});
