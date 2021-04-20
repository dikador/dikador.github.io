const burger = document.querySelector('.header__burger');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   document.querySelector('.header__body').classList.toggle('active')
})

// new Swiper('.slider__inner', {
//    slidesPerView: 3,
//    // spaceBetween: 30,
//    // slidesPerGroup: 3,
//    loop: true,
//    // loopFillGroupWithBlank: true,
//    navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//    },
// });
$('.slider__inner').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 3
});