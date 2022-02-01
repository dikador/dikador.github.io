$(document).ready(function () {
   $('.header__burger').click(function (e) {
      e.preventDefault();
      $('.header__burger').toggleClass("active");
      $('.nav').toggleClass("active");
   });


   $('img.social').each(function () {
      var $img = $(this);
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      $.get(imgURL, function (data) {
         var $svg = $(data).find('svg');
         if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
         }
         $svg = $svg.removeAttr('xmlns:a');
         if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
         }
         $img.replaceWith($svg);
      }, 'xml');
   });

   $.each($('.intro__accept'), function (index, val) {
      if ($(this).find('input').prop('checked') == true) {
         $(this).addClass('active')
      }
   });

   $('.intro__accept').click(function (e) {
      e.preventDefault();
      if ($(this).hasClass('active')) {
         $(this).find('input').prop('checked', false)
      } else {
         $(this).find('input').prop('checked', true)
      }
      $(this).toggleClass('active')
   });



   $('#sendOffice').click(function (e) {
      e.preventDefault()
      let namesInput = $('#first_office').val().trim();
      let lastsInput = $('#lastName_office').val().trim();
      let homesInput = $('#citstz_office').val().trim();
      let phonesInput = $('#phone_office').val().trim();

      let mailsInput = $('#mail_office').val().trim();

      if (namesInput.length < 2) {
         $('#first_office').addClass('input__forms-val_error');
      } else {
         $('#first_office').removeClass('input__forms-val_error');
      }


      if (lastsInput.length < 2) {
         $('#lastName_office').addClass('input__forms-val_error');
      } else {
         $('#lastName_office').removeClass('input__forms-val_error');
      }


      if (homesInput.length < 3) {
         $('#citstz_office').addClass('input__forms-val_error');
      } else {
         $('#citstz_office').removeClass('input__forms-val_error');
      }


      if (phonesInput.length < 8) {
         $('#phone_office').addClass('input__forms-val_error');
      } else {
         $('#phone_office').removeClass('input__forms-val_error');
      }


      if (emailTest()) {
         $('#mail_office').addClass('input__forms-val_error');
      } else {
         $('#mail_office').removeClass('input__forms-val_error');
      };


      function emailTest() {
         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mailsInput)
      }

      const errorVars = document.querySelectorAll('.input__forms-val_error')


      if (errorVars.length <= 0) {
         window.location.reload();
      }
   });
});