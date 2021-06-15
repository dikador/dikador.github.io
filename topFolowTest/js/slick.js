$('.use__slider').slick({
   variableWidth: false,
   variableHeight: false,
   fade: true,
   arrows: false,
   swipe: false,
   autoplay: true,
   asNavFor: '.slick__dots',
   lazyLoad: 'ondemand',

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
         $('.slick-current').addClass('hsl');

      }
      else if (slickD[index].classList.contains('slick-current') == false) {
         $(this).prev().removeClass('hsa');
         $(this).removeClass('hsl');
      }
   });
});