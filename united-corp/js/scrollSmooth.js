$(document).ready(function () {
   $('a[href^="#"').not('.btn-intro_step').on('click', function () {

      let href = $(this).attr('href');

      $('html, body').animate({
         scrollTop: $(href).offset().top
      }, {
         duration: 420,   // по умолчанию «400» 
         easing: "swing" // по умолчанию «swing» 
      })
      return false;
   });
});
