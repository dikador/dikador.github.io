document.querySelector('.header__burger').addEventListener('click', () => {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header__right').classList.toggle('active');
   document.querySelector('body').classList.toggle('active');
})

document.querySelectorAll('.smooth-scroll').forEach(link => {

   link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);
      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
         top: offsetPosition,
         behavior: 'smooth'
      });
   });
});


const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
let person = document.querySelector('#person');

plus.addEventListener('click', () => {
   person.value++;

   if (+person.value <= 1) {
      person.value = 1;
   }

   if (+person.value >= 2) {
      minus.classList.add('orange')
   }

})

minus.addEventListener('click', () => {
   person.value--;

   if (+person.value >= 2) {
      minus.classList.add('orange')
   } else {
      minus.classList.remove('orange')

   }

   if (+person.value < 1) {
      person.value = 1;
   }
})



window.addEventListener('scroll', () => {
   let navTop = window.pageYOffset;


   if (navTop > 100) {
      document.querySelector('.header').classList.add('sect1');
   } else {
      document.querySelector('.header').classList.remove('sect1');
   }


})



$(document).ready(function () {
   $('.reviews__inner').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },

         {
            breakpoint: 564,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
               dots: true
            }
         },
      ]
   })

   $('.about__right').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,

      responsive: [
         {
            breakpoint: 9999,
            settings: "unslick"
         },

         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               dots: true
            }
         },
      ]
   })

   document.querySelector('.close-popup').addEventListener('click', () => {
      var videoSrc = $("#main-youtbube").attr("src");
      $("#main-youtbube").attr("src", "");
      $("#main-youtbube").attr("src", videoSrc);
   })
});

$('.fotorama').fotorama({});

var input = document.querySelector('#date');
var datepicker = new HotelDatepicker(input);


