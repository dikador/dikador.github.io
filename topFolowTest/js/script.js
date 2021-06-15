document.querySelector('.header__burger').addEventListener('click', () => {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.navbar-nav').classList.toggle('active');
   document.querySelector('body').classList.toggle('burger__active');
})



$(document).ready(function () {
   $('.shop').bind('touchstart mouseover', function (e) {
      const x = e.pageX / window.innerWidth;
      const y = e.pageY / window.innerHeight;

      document.querySelector('.hearts').style.transform = 'translate(' + x * 15 + 'px, ' + y * 15 + 'px)';

      document.querySelector('.inst').style.transform = 'translate(-' + x * 40 + 'px, -' + y * 20 + 'px)';

      document.querySelector('.hearts_bot').style.transform = 'translate(' + x * 30 + 'px, ' + y * 20 + 'px) rotate(20deg)';

      document.querySelector('.inst_bot').style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
   });

   $('.news').bind('touchstart mouseover', function (e) {
      const x = e.pageX / window.innerWidth;
      const y = e.pageY / window.innerHeight;

      document.querySelector('.news__teleg-top').style.transform = 'translate(-' + x * 40 + 'px, -' + y * 10 + 'px)';

      document.querySelector('.news__teleg-bot').style.transform = 'translate(' + x * 25 + 'px, ' + y * 15 + 'px) rotate(-20deg)';
   });


   $('.nav-link').click(function (e) {
      document.querySelector('.header__burger').classList.remove('active');
      document.querySelector('.navbar-nav').classList.remove('active');
      document.querySelector('body').classList.remove('burger__active');
   });

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

