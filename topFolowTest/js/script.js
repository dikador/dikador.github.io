
$(document).ready(function () {
   $('.nav-link').click(function (e) {
      document.querySelector('.header__burger').classList.remove('active');
      document.querySelector('.navbar-nav').classList.remove('active');
      document.querySelector('body').classList.remove('burger__active');
   });

   document.querySelector('.header__burger').addEventListener('click', () => {
      document.querySelector('.header__burger').classList.toggle('active');
      document.querySelector('.navbar-nav').classList.toggle('active');
      document.querySelector('body').classList.toggle('burger__active');
   })

   let navTop = window.pageYOffset;

   $(window).scroll(function () {
      let navTop = window.pageYOffset;

      if (navTop > 100) {
         document.querySelector('.header').classList.add('sect1');
      } else {
         document.querySelector('.header').classList.remove('sect1');
      }
   });


   if (navTop > 100) {
      document.querySelector('.header').classList.add('sect1');
   } else {
      document.querySelector('.header').classList.remove('sect1');
   }
});

