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

   let scroll1 = $('.scrolled')
   let scroll2 = $('.scrolled-2')
   let scroll3 = $('.scrolled-3')
   let scroll4 = $('.scrolled-4')

   $('.faq-btn').click(function (e) {
      e.preventDefault();
      $('.faq-btn').removeClass('minus');
      $(this).toggleClass('minus');
   });

   $(window).on("scroll", function () {
      var scrolled = $(this).scrollTop();
      if (scrolled > 967) {
         $('.nav-link').addClass('scrolled');
      }
      if (scrolled <= 967) {
         $('.nav-link').removeClass('scrolled');
      }
   });

   $(window).on("scroll", function () {
      var scrolled = $(this).scrollTop();



      if (scrolled > 2407) {
         $('.nav-link').addClass('scrolled-2');

         if (scrolled = scroll1) {
            $('.nav-link').removeClass('scrolled');
         }
      }
      if (scrolled <= 2407) {
         $('.nav-link').removeClass('scrolled-2');
      }
   });

   $(window).on("scroll", function () {
      var scrolled = $(this).scrollTop();
      if (scrolled > 3500) {
         $('.nav-link').addClass('scrolled-3');

         if (scrolled = scroll2) {
            $('.nav-link').removeClass('scrolled-2');
         }
      }
      if (scrolled <= 3500) {
         $('.nav-link').removeClass('scrolled-3');
      }
   });

   $(window).on("scroll", function () {
      var scrolled = $(this).scrollTop();
      if (scrolled > 6400) {
         $('.nav-link').addClass('scrolled-4');

         if (scrolled = scroll3) {
            $('.nav-link').removeClass('scrolled-3');
         }
      }
      if (scrolled <= 6400) {
         $('.nav-link').removeClass('scrolled-4');
      }
   });

   $('.header__burger').click(function (e) {
      e.preventDefault();
      $('.header__burger').toggleClass('active');
      $('.navigation-navbar').toggleClass('active');
   });
});


