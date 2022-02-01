// ! Изменение элемента при достижении определенного блока==========================================================================

$(document).ready(function () {
   $(window).scroll(function () {

      let navTop = $('.nav').offset().top;

      let sec1 = $('#services').offset().top
      let sec2 = $('#contact').offset().top

      if (navTop > sec1 && navTop < sec2) {
         $('.nav-link').addClass('sect1');
      } else {
         $('.nav-link').removeClass('sect1');
      }
   });
});