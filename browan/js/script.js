document.querySelector('.header__burger').addEventListener('click', () => {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.navbar-body').classList.toggle('active');
   document.querySelector('body').classList.toggle('active');
})


if (window.pageYOffset >= 100) {
   document.querySelector('.header').classList.add('sect1')
} else {
   document.querySelector('.header').classList.remove('sect1')
}

window.addEventListener('scroll', () => {
   let navTop = window.pageYOffset;

   if (navTop >= 100) {
      document.querySelector('.header').classList.add('sect1')
   } else {
      document.querySelector('.header').classList.remove('sect1')
   }
})



let hb = $('.history__block');
let hc = $('.history-circle');


$(document).ready(function () {
   $(hb).bind('touchstart mouseover', function (e) {
      $(hb).removeClass('active-history');
      $(hc).removeClass('active-history');

      $(this).addClass('active-history');

      $(hb).each(function (index, element) {
         if (hb[index].classList.contains('active-history')) {
            return $(hb).prev().addClass('hsa');
         }
         else if (hb[index].classList.contains('active-history') == false) {
            $(this).prev().removeClass('hsa');
         }
      });
      let thc = $(this).find(hc);
      $(thc).addClass('active-history');
   });

   $('.history__inner').slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 2,
      loop: false,
      infinite: false,
      swipeToSlide: true,

      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },

         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
      ]
   });


   window.addEventListener('load', () => {
      if ($(window).innerWidth() <= 576) {
         $('.history__inner').on('swipe', function (event, slick, direction) {
            $(hb).removeClass('active-history');
            $(hc).removeClass('active-history');

            $('.slick-active').addClass('active-history');
            let waf = $('.slick-active').find(hc);
            $(waf).addClass('active-history');
         });
      }
   })



   // if ($(window).innerWidth() <= 576) {


   // $('.history-inner').mousemove(function (e) {
   //    // values: e.clientX, e.clientY, e.pageX, e.pageY
   //    $('.slick-active').addClass('active-history');
   // });




   // $('.history__block').each(function (index, element) {
   //    // element == this
   //    if (hb[index].classList.contains('active-history')) {
   //       return $(hb).prev().addClass('hsa');
   //    }
   //    else if (hb[index].classList.contains('active-history') == false) {
   //       $(this).prev().removeClass('hsa');
   //    }
   // });



   // }
   // })


   $('.history__inner').on('wheel', (function (e) {
      e.preventDefault();
      if (e.originalEvent.deltaY < 0) {
         $(this).slick('slickNext');
      } else {
         $(this).slick('slickPrev');
      }
   }));
});



function maskPhone(selector, masked = '+7 (___) ___-__-__') {
   const elems = document.querySelectorAll(selector);

   function mask(event) {
      const keyCode = event.keyCode;
      const template = masked,
         def = template.replace(/\D/g, ""),
         val = this.value.replace(/\D/g, "");
      console.log(template);
      let i = 0,
         newValue = template.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
         });
      i = newValue.indexOf("_");
      if (i !== -1) {
         newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, this.value.length).replace(/_+/g,
         function (a) {
            return "\\d{1," + a.length + "}";
         }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
         this.value = newValue;
      }
      if (event.type === "blur" && this.value.length < 5) {
         this.value = "";
      }
   }

   for (const elem of elems) {
      elem.addEventListener("input", mask);
      elem.addEventListener("focus", mask);
      elem.addEventListener("blur", mask);
   }
}

maskPhone('#phone', '+1(___)___-____');


document.querySelector('.btn-contact').addEventListener("click", function (e) {
   e.preventDefault()
   let nameInput = document.querySelector('#vorname').value;
   let twonameInput = document.querySelector('#nachname').value;

   let phoneInput = document.querySelector('#phone').value;

   let mailInput = document.querySelector('#email').value;

   let messInput = document.querySelector('#beschreibung').value;

   console.log(phoneInput);


   if (nameInput.length < 2) {
      document.querySelector('#vorname').classList.add('input__forms-val_error');
   } else {
      document.querySelector('#vorname').classList.remove('input__forms-val_error');
   }

   if (twonameInput.length < 2) {
      document.querySelector('#nachname').classList.add('input__forms-val_error');
   } else {
      document.querySelector('#nachname').classList.remove('input__forms-val_error');
   }

   if (phoneInput.length < 11) {
      document.querySelector('#phone').classList.add('input__forms-val_error');
   } else {
      document.querySelector('#phone').classList.remove('input__forms-val_error');
   }

   if (emailTest()) {
      document.querySelector('#email').classList.add('input__forms-val_error');
   } else {
      document.querySelector('#email').classList.remove('input__forms-val_error');
   };

   function emailTest() {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mailInput)
   }

   const errorVar = document.querySelectorAll('.input__forms-val_error')

   if (errorVar.length <= 0) {
      window.location.reload();
   }
});

