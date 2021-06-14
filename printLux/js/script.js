$(document).ready(function () {

   // Высота полосок равная всему документу

   function setEqualHeight(element, wrapper) {
      let wrapperHeight = $(wrapper).height() + 'px';
      $(element).height(wrapperHeight);
   };

   setEqualHeight(".html__strip", '.wrapper');



   // Наведение на элеменент и смещение картинок

   function hoverImg(hoverElement, changingElement) {
      $(hoverElement).mouseover(function (e) {
         $(changingElement).addClass('rotate__img');
      });

      $(hoverElement).mouseout(function (e) {
         $(changingElement).removeClass('rotate__img');
      });
   }

   hoverImg('.hover__img-right', '.print__img-gorilla');

   hoverImg('.hover__img-left', '.print__img-circle');



   // phone mask
   $(".phone__input").mask("+7 (999) 99-99-999");


   // select in popup
   const selectPopup = $('.popup__selected');

   // Toggle menu
   $(selectPopup).each(function (index, selectSingle) {

      const selectSingle_title = selectSingle.querySelector('.popup__select-title');
      const selectSingle_labels = selectSingle.querySelectorAll('.popup__option');

      $(selectSingle_title).click(function (e) {
         e.preventDefault();
         if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
            $(selectSingle).removeClass('active');
         }

         else {
            $(selectPopup).each(function (index, element) {
               element.setAttribute('data-state', '');
               $(element).removeClass('active');
               selectSingle.setAttribute('data-state', 'active');
               $(selectSingle).addClass('active');

            });
         }
      });

      // Close when click to option
      for (let i = 0; i < selectSingle_labels.length; i++) {
         selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            if ('active' === selectSingle.getAttribute('data-state')) {
               selectSingle.setAttribute('data-state', '');
               $(selectSingle).removeClass('active');
            }
         });
         selectSingle.setAttribute('data-state', '');
      }
   });


   function rectable(block1, block2) {
      const retractableBlock = $(block1);
      const retractableBlockText = $(block2);

      $(retractableBlock).each(function (index, element) {
         $(element).click(function (e) {
            e.preventDefault();
            $(retractableBlock).removeClass('rectable');
            $(this).addClass('rectable');

            if ($(retractableBlock)[0].classList.contains('rectable')) {
               return $(retractableBlockText).addClass('rectable');
            } else {
               return $(retractableBlockText).removeClass('rectable');
            }
         });
      });
   }

   rectable('.advantages__block', '.advantages__title');

   // ymaps.ready(function () {

   //    // Иницилизация карты и координаты центра на карте
   //    var map = new ymaps.Map('map', {
   //       center: [55.761494, 37.748777],
   //       zoom: 18,
   //       controls: []
   //    });

   //    // Метка
   //    var point = new ymaps.Placemark([55.761494, 37.748777], {
   //       balloonContent: 'Шоссэ Энтузиастов, 31c17'
   //    }, {
   //       preset: 'islands#darkOrangeDotIcon'
   //    });

   //    map.geoObjects.add(point);


   //    // map.events.add('click', function (e) {
   //    //    $('.contact__map').addClass('rectable');
   //    //    $('.contact__content-left')[0].classList.add('rectable');
   //    // });

   //   

   // });


   // $('.contact__map').click(function (e) {
   $('.contact__right').bind('touchstart click', function (e) {
      e.preventDefault();
      $('.contact__map')[0].classList.add('rectable');
      $('.contact__content-left')[0].classList.add('rectable');
   });


   $('#btnClose').click(function (e) {
      e.preventDefault();
      $('.contact__map')[0].classList.remove('rectable');
      $('.contact__content-left')[0].classList.remove('rectable');
   });






   //! Popup
   const popupLinks = document.querySelectorAll('.popup-link')
   const body = document.querySelector('body')
   const lockPadding = document.querySelectorAll('.lock-padding')

   let unlock = true;

   // Время открытия попапа, чтобы нельзя было повторно вызвать попап в это время
   const timeout = 700;

   if (popupLinks.length > 0) {
      for (let index = 0; index < popupLinks.length; index++) {
         const popupLink = popupLinks[index];
         popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace("#", "");
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
         });
      }
   }

   const popupCloseIcon = document.querySelectorAll(".close-popup")
   if (popupCloseIcon.length > 0) {
      for (let index = 0; index < popupCloseIcon.length; index++) {
         const element = popupCloseIcon[index];
         element.addEventListener('click', function (e) {
            popupClose(element.closest('.popup'));
            e.preventDefault();
         });
      }
   }

   function popupOpen(curentPopup) {
      if (curentPopup && unlock) {
         const popupActive = document.querySelector('.popup.open');
         if (popupActive) {
            popupClose(popupActive, false);
         } else {
            bodyLock();
         }
         curentPopup.classList.add('open');
         curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup')) {
               popupClose(e.target.closest('.popup'));
            }
         });
      }
   }

   function popupClose(popupActive, doUnlock = true) {
      if (unlock) {
         popupActive.classList.remove('open');
         if (doUnlock) {
            bodyUnLock();
         }
      }
   }


   function bodyLock() {
      const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const element = lockPadding[index];
            element.style.paddingRight = lockPaddingValue
         }
      }
      body.style.paddingRight = lockPaddingValue;
      body.classList.add('lock');

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, timeout);
   }

   function bodyUnLock() {
      setTimeout(function () {
         for (let index = 0; index < lockPadding.length; index++) {
            const element = lockPadding[index];
            element.style.paddingRight = '0px';
         }
         body.style.paddingRight = '0px';
         body.classList.remove('lock')
      }, timeout);

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, timeout);
   }

   //! Polyfill for closest

   (function () {
      if (!Element.prototype.closest) {
         Element.prototype.closest = function (css) {
            let node = this;
            while (node) {
               if (node.matches(css)) return node;
               else node = node.parentElement;
            }
            return null;
         };
      }
   })();
   (function () {
      if (!Element.prototype.matches) {
         Element.prototype.matches = Element.prototype.MatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
      }
   })();
});