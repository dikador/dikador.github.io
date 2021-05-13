document.querySelector('.header__burger').addEventListener('click', () => {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.navbar-body').classList.toggle('active');
   document.querySelector('body').classList.toggle('active');
})


if (window.pageYOffset >= 100) {
   document.querySelector('.header').classList.add('sect1')
} else {
   document.querySelector('.header').classList.remove('sect1')
}

window.addEventListener('scroll', () => {
   let navTop = window.pageYOffset;

   if (navTop >= 100) {
      document.querySelector('.header').classList.add('sect1')
   } else {
      document.querySelector('.header').classList.remove('sect1')
   }
})


let hb = $('.history__block');
let hc = $('.history-circle');


$(document).ready(function () {
   $(hb).bind('touchstart mouseover', function (e) {
      $(hb).removeClass('active-history');
      $(hc).removeClass('active-history');

      $(this).addClass('active-history');

      $(hb).each(function (index, element) {
         if (hb[index].classList.contains('active-history')) {
            return $(hb).prev().addClass('hsa');
         }
         else if (hb[index].classList.contains('active-history') == false) {
            $(this).prev().removeClass('hsa');
         }
      });
      let thc = $(this).find(hc);
      $(thc).addClass('active-history');
   });

   $('.history__inner').slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 2,
      loop: false,
      infinite: false,
      swipeToSlide: true,

      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },

         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
      ]
   });


   window.addEventListener('load', () => {
      if ($(window).innerWidth() <= 576) {

         $(hb).each(function (index, element) {
            $(element).click(function (e) {
               e.preventDefault();
               $('.history__inner').slick('slickPrev');
            });

            $(element).next().click(function (e) {
               e.preventDefault();
               if ($(element).next().hasClass('slick-active')) {
                  $('.history__inner').slick('slickPrev');
               }
               $('.history__inner').slick('slickNext');
            });
         });


         $('.history__inner').on('swipe', function (event, slick, direction) {
            $(hb).removeClass('active-history');
            $(hc).removeClass('active-history');

            $('.slick-active').addClass('active-history');
            let waf = $('.slick-active').find(hc);
            $(waf).addClass('active-history');
         });
      }
   })

});

