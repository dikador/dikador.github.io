function openBurger() {
    document.querySelector('.header__burger').classList.toggle("active");
    document.querySelector('.navs').classList.toggle("active");
    document.querySelector('.burger__full').classList.toggle("active");
}

$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if (scrolled > 607) {
        $('.wrapper').addClass('scrolled');
    }
    if (scrolled <= 607) {
        $('.wrapper').removeClass('scrolled');
    }
});

