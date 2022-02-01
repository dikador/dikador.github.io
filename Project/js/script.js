// Tab
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function () {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


// Slider
$('.team__content').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        draggable: false,
        swipe: false,
        variablewidth: true,
    });
});

let burger = document.querySelector('.header__burger').addEventListener('click', function OpenBurger() {
    document.querySelector('.header__burger').classList.toggle('active__burger')
    document.querySelector('.nav').classList.toggle('active__burger')
})

// more view

function viewButton() {
    document.querySelector(".btn-view").classList.toggle("not__active")
    document.querySelector(".work__more-content").classList.toggle("more__active")
}