new Swiper('.team-slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   slidesPerView: 1.4,
   simulateTouch: false,
   spaceBetween: 10,
   centeredSlides: true,
   initialSlide: 1,
   loop: true,
   speed: 350,
   breakpoints: {
      320: { slidesPerView: 1.2 },
      420: { slidesPerView: 1.4 },
   },
});

document.querySelector('.header__burger').addEventListener('click', () => {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header__right').classList.toggle('active');
   document.querySelector('body').classList.toggle('active');
})

window.addEventListener('scroll', () => {
   let navTop = window.pageYOffset;

   let sec1 = document.querySelector('#advantages').getBoundingClientRect().top + 700;

   if (navTop > sec1) {
      document.querySelector('#header').classList.add('sect1');
   } else {
      document.querySelector('#header').classList.remove('sect1');
   }
})
