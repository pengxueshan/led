$(function () {
    $(window).on('scroll', function () {
        var scrollHeight = $(window).scrollTop();
        var op = 0;
        if (scrollHeight < 300) {
            op = scrollHeight / 300;
        } else {
            op = 1;
        }
        $('.header .bg').css({
            opacity: op
        });
    });

    // var windowHeight = $(window).height();
    // windowHeight = windowHeight > 940 ? 940 : windowHeight;
    // $('.banner:not(.banner-page)').css({
    //     height: windowHeight
    // });

    var currentPath = location.pathname;
    $('.header .nav a[href="' + currentPath + '"]').parent().addClass('active');
});