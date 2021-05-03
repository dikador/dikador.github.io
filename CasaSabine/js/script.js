document.querySelector('.header__burger').addEventListener('click', () => {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header__right').classList.toggle('active');
   document.querySelector('body').classList.toggle('active');
})

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
let person = document.querySelector('#person');

plus.addEventListener('click', () => {
   person.value++;

   if (+person.value <= 1) {
      person.value = 1;
   }
})

minus.addEventListener('click', () => {
   person.value--;

   if (+person.value < 1) {
      person.value = 1;
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
});

// var input = document.getElementById('#date');
// var datepicker = new HotelDatepicker(input);

// var hdpkr = new HotelDatepicker(document.getElementById('#date'),);

var input = document.querySelector('#date');
var datepicker = new HotelDatepicker(input);