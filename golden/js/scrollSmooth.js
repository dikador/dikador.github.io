$(document).ready(function () {
   $('a[href^="#"').not('.tabs-link').on('click', function () {

      let href = $(this).attr('href');

      $('html, body').animate({
         scrollTop: $(href).offset().top
      }, {
         duration: 500,   // по умолчанию «400» 
         easing: "swing" // по умолчанию «swing» 
      })
      return false;
   });
});
