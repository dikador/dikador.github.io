const swiper = new Swiper('.main_slider__slider', {
   slidesPerView: 1,
   lazy: true,
   allowTouchMove: false,

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // autoplay: {
   //    delay: 4000,
   //    // disableOnInteraction: false,
   // },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

const swiperBook = new Swiper('.slider-info', {
   slidesPerView: 2,
   allowTouchMove: false,

   spaceBetween: 15,
   lazy: true,

   autoplay: {
      delay: 4000,
   },

   breakpoints: {
      769: {
         slidesPerView: 6,
      },

      480: {
         slidesPerView: 4,
         autoplay: false,
      },

      420: {
         slidesPerView: 3,
         spaceBetween: 30,
         autoplay: false,
      }
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});


document.querySelector('.header__burger').addEventListener('click', function () {
   this.classList.toggle('active');
   document.querySelector('.sub_Header').classList.toggle('active');
   document.querySelector('body').classList.toggle('disable');
})


document.querySelectorAll('.acordTop').forEach((element, index) => {
   let itemHeight = document.querySelectorAll('.acord__bot-content')[index].offsetHeight;

   element.addEventListener('click', function () {
      let acordBotContent = this.nextElementSibling;

      if (this.classList.contains('active')) {
         acordBotContent.style.height == '0px'? acordBotContent.style.height = itemHeight + 'px' : acordBotContent.style.height = '0px';
       return this.classList.toggle('active');
    }

    for (var i = 0; i < document.querySelectorAll('.acord__bot').length; i++) {
     const acordBot = document.querySelectorAll('.acord__bot')[i];
     const acordTop = document.querySelectorAll('.acordTop')[i];
     const acord__botContent = document.querySelectorAll('.acord__bot')[i];
     acord__botContent.style.height = '0px';

     acordBot.classList.remove('active');
     acordTop.classList.remove('active');

  }

  this.nextElementSibling.style.height = itemHeight + 'px';
  this.classList.add('active');
});
});

for (let index = 0; index < document.querySelectorAll('.open-btn').length; index++) {
   const element = document.querySelectorAll('.open-btn')[index];

   element.addEventListener('click', function () {
      // console.log(this.previousElementSibling);
      this.previousElementSibling.classList.toggle('active');
      document.querySelector('.swiper__controls').classList.toggle('active');
   })
}
