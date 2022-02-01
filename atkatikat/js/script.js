$(document).ready(function () {
   $("#phone").mask("+7 (999) 999-9999");

   let acord = document.querySelectorAll('.acord');
   acord.forEach(element => {
      let acordT = element.querySelectorAll('.acord__top');

      for (let index = 0; index < acordT.length; index++) {
         const elementTop = acordT[index];

         elementTop.addEventListener('click', (e) => {
            e.preventDefault;
            (elementTop.parentElement).classList.toggle('active__acord');
            $(elementTop.nextElementSibling).slideToggle();

            if (element.classList.contains('one-acord') && elementTop.parentElement.classList.contains('active__acord')) {
               element.querySelectorAll('.acord__item').forEach((element, i) => {
                  element.classList.remove('active__acord');
                  $('.acord__bot').not(elementTop.nextElementSibling).slideUp();
               });

               elementTop.parentElement.classList.add('active__acord')
            }
         })
      }
   });

   const swiper = new Swiper('.price__body', {
      loop: true,
      allowTouchMove: true,
      autoHeight: true,

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      breakpoints: {
         768: {
            allowTouchMove: false,
         }
      }
   })

   const swiperResult = new Swiper('.result__body', {
      loop: true,
      allowTouchMove: true,
      autoHeight: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      breakpoints: {
         1025: {
            allowTouchMove: false,
         },

      }
   })

   const swiperCard = new Swiper('.swiper__card-slider', {
      loop: true,
      allowTouchMove: true,

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
   })


   $('.advantages__cards.adaptive-use').masonry({
      itemSelector: '.advantages__card',
      isResizable: true,
      // resize: false,
      gutter: 20,
      percentPosition: true,
   });

   $(".calculator__range").ionRangeSlider();

   function numberWithSpaces(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
   }

   $('.calculator__range').change(function (e) {
      e.preventDefault();
      let weight = $('#rangeWeight')[0].value.split(';');
      let price = $('#rangePrice')[0].value.split(';');

      $('#total_sum').html(numberWithSpaces((+weight[1] * +price[1])));
   });


   $(window).resize(function () {
      const result = $('.result');
      const about = $('.about');

      $(result).css('padding-top', (($(about).height() / 2)) + 'px');
      $(about).css('margin-top', ('-' + ($(about).height() / 2)) + 'px');
   });


   $(window).trigger('resize');
   $('.calculator__range').trigger('change');

});
