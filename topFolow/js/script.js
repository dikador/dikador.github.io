document.querySelector('.header__burger').addEventListener('click', () => {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.navbar-nav').classList.toggle('active');
   document.querySelector('body').classList.toggle('burger__active');
})



$(document).ready(function () {
   $('.shop').bind('touchstart mouseover', function (e) {
      const x = e.pageX / window.innerWidth;
      const y = e.pageY / window.innerHeight;

      document.querySelector('.hearts').style.transform = 'translate(' + x * 15 + 'px, ' + y * 15 + 'px)';

      document.querySelector('.inst').style.transform = 'translate(-' + x * 40 + 'px, -' + y * 20 + 'px)';

      document.querySelector('.hearts_bot').style.transform = 'translate(' + x * 30 + 'px, ' + y * 20 + 'px) rotate(20deg)';

      document.querySelector('.inst_bot').style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
   });

   $('.news').bind('touchstart mouseover', function (e) {
      const x = e.pageX / window.innerWidth;
      const y = e.pageY / window.innerHeight;

      document.querySelector('.news__teleg-top').style.transform = 'translate(-' + x * 40 + 'px, -' + y * 10 + 'px)';

      document.querySelector('.news__teleg-bot').style.transform = 'translate(' + x * 25 + 'px, ' + y * 15 + 'px) rotate(-20deg)';
   });

   $('.use__slider').slick({
      variableWidth: false,
      variableHeight: false,
      fade: true,
      arrows: false,
      swipe: false,
      autoplay: true,
      asNavFor: '.slick__dots',

      responsive: [
         {
            breakpoint: 576,
            settings: {
               autoplay: false,
               arrows: true,
               appendArrows: $('.use__arrows'),
            }
         },
      ]
   })


   $('.slick__dots').slick({
      slidesToShow: 4,
      asNavFor: '.use__slider',
      variableWidth: false,
      arrows: false,
      swipe: false,
      focusOnSelect: true,
   });


   $('.blog__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,

      responsive: [
         {
            breakpoint: 9999,
            settings: "unslick"
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               appendArrows: $('.blog__arrows'),
               arrows: true,
            }
         },
      ]
   });

   $('.news__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,

      responsive: [
         {
            breakpoint: 9999,
            settings: "unslick"
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               appendArrows: $('.news__arrows'),
               arrows: true,
            }
         },
      ]
   });


   let slickD = $('.use__item');
   $('.slick__dots').on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $(slickD).each(function (index, element) {

         if (slickD[index].classList.contains('slick-current')) {
            $(slickD).prev().addClass('hsa');
         }
         else if (slickD[index].classList.contains('slick-current') == false) {
            $(this).prev().removeClass('hsa');
         }

      });
   });

});

