const burger = document.querySelector('.header__burger');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   document.querySelector('.header__body').classList.toggle('active')
   document.body.classList.toggle('active')
})

let navTop = window.pageYOffset;

if (navTop > 50) {
   document.querySelector('.header').classList.add('sect1');
} else {
   document.querySelector('.header').classList.remove('sect1');
}

window.addEventListener('scroll', () => {
   let navTop = window.pageYOffset;

   if (navTop > 50) {
      document.querySelector('.header').classList.add('sect1');
   } else {
      document.querySelector('.header').classList.remove('sect1');
   }
})


$(document).ready(function () {
   $('.slider__inner').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 650,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
            }
         },
      ]

   });


   $('.job__inner').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
         {
            breakpoint: 9999,
            settings: "unslick"
         },
         {
            breakpoint: 1150,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },

         {
            breakpoint: 680,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
            }
         },
      ]
   });


   var sliderJ = $('.job__inner');
   totalJ = sliderJ.slick("getSlick").slideCount;
   currentSlide = $('.job__inner').slick('slickCurrentSlide');
   slide = currentSlide + 1;
   if (totalJ > 1) {
      $("#job-id").text(slide);
      $('#job-num').text('/ ' + totalJ);
   }
   $(".job__inner").on('afterChange', function (event, slick, currentSlide, nextSlide) {
      var currentSl = currentSlide + 1;
      $("#job-id").text(currentSl);
   });



   $('.best__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 9999,
            settings: "unslick"
         },
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
      ]
   });

   var bestSlider = $('.best__slider');

   $('#best-num').text('/ ' + bestSlider.slick("getSlick").slideCount);
   $(".best__slider").on('afterChange', function (event, slick, currentSlide) {
      $("#best-id").text(currentSlide + 1);
   });

});


$(document).ready(function () {
   $('.advantages__inner').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
         {
            breakpoint: 9999,
            settings: "unslick"
         },
         {
            breakpoint: 850,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },

         {
            breakpoint: 650,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
      ]
   });

   let advSlider = $('.advantages__inner')
   $('#adv-num').text('/ ' + advSlider.slick("getSlick").slideCount);
   $(".advantages__inner").on('afterChange', function (event, slick, currentSlide) {
      $("#adv-id").text(currentSlide + 1);
   });
});