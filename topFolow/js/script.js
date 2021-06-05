document.querySelector('.shop').addEventListener('mousemove', (e) => {
   const x = e.pageX / window.innerWidth;
   const y = e.pageY / window.innerHeight;

   document.querySelector('.hearts').style.transform = 'translate(' + x * 20 + 'px, ' + y * 25 + 'px)';

   document.querySelector('.inst').style.transform = 'translate(-' + x * 40 + 'px, -' + y * 20 + 'px)';

   document.querySelector('.hearts_bot').style.transform = 'translate(' + x * 30 + 'px, ' + y * 20 + 'px) rotate(40deg)';

   document.querySelector('.inst_bot').style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
});


document.querySelector('.news').addEventListener('mousemove', (e) => {
   const x = e.pageX / window.innerWidth;
   const y = e.pageY / window.innerHeight;

   document.querySelector('.news__teleg-top').style.transform = 'translate(-' + x * 40 + 'px, -' + y * 10 + 'px)';

   document.querySelector('.news__teleg-bot').style.transform = 'translate(' + x * 30 + 'px, ' + y * 20 + 'px) rotate(-20deg)';
});


$(document).ready(function () {
   $('.use__slider').slick({
      variableWidth: false,
      variableHeight: false,
      fade: true,
      arrows: false,
      // dots: true,
      // appendDots: $('.slick__dots'),
      asNavFor: '.slick__dots'
   })
});

$('.slick__dots').slick({ // настройка навигации
   slidesToShow: 4, // указываем что нужно показывать 3 навигационных изображения
   asNavFor: '.use__slider', // указываем что это навигация для блока выше
   variableWidth: false,
   arrows: false,
   focusOnSelect: true // указываем что бы слайделось по клику
});