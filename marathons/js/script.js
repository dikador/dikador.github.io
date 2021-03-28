$(document).ready(function () {
   $('.shop__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 3,
      dots: true,
      arrows: false,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               dots: false
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               dots: false

            }
         }
      ]
   });

   $(window).scroll(function () {

      let navTop = $('.navbar-nav').offset().top;

      let sec1 = $('#brands').offset().top
      let sec2 = $('#features').offset().top
      let sec3 = $('#schedule').offset().top
      let sec4 = $('#faq').offset().top
      let sec5 = $('#details').offset().top


      if (navTop > sec1 && navTop < sec2) {
         $('.nav-link').addClass('scrolled-1');
      } else {
         $('.nav-link').removeClass('scrolled-1')
      }

      if (navTop > sec3 && navTop < sec4) {
         $('.nav-link').addClass('scrolled');
      } else {
         $('.nav-link').removeClass('scrolled');
      }

      if (navTop > sec4 && navTop < sec5) {
         $('.nav-link').addClass('scrolled-2');
      } else {
         $('.nav-link').removeClass('scrolled-2');
      }

      if (navTop > sec5) {
         $('.nav-link').addClass('scrolled-3');
      } else {
         $('.nav-link').removeClass('scrolled-3');
      }
   });

   $('.faq-btn').click(function (e) {
      e.preventDefault();
      $('.faq-btn').removeClass('minus');
      $(this).toggleClass('minus');
   });


   $('.header__burger').click(function (e) {
      e.preventDefault();
      $('.header__burger').toggleClass('active');
      $('.navigation-navbar').toggleClass('active');
   });
});


