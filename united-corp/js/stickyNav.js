$(document).ready(function () {
    // захватить начальное верхнее смещение навигации
    var stickyNavTop = $('.nav').offset().top;

    // наша функция, которая определяет, должна ли навигационная панель иметь "фиксированное" положение CSS или нет.
    var stickyNav = function () {
        var scrollTop = $(window).scrollTop(); // наше текущее положение по вертикали сверху

        // если мы прокручиваем больше, чем область навигации, измените его положение на фиксированное, чтобы оно оставалось наверху,
        // в противном случае измените его обратно на относительное
        if (scrollTop > stickyNavTop) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();
    // и запускать его снова каждый раз при прокрутке
    $(window).scroll(function () {
        stickyNav();
    });
});