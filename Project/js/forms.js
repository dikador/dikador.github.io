$(document).ready(function () {

   $('#sendForm').click(function (e) {
      e.preventDefault()
      let nameInput = $('#Name').val().trim();

      let mailInput = $('#mail').val().trim();

      if (nameInput.length < 2) {
         $('#Name').addClass('input__forms-val_error');
      } else {
         $('#Name').removeClass('input__forms-val_error');
      }

      if (emailTest()) {
         $('#mail').addClass('input__forms-val_error');
      } else {
         $('#mail').removeClass('input__forms-val_error');
      };

      function emailTest() {
         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mailInput)
      }

      const errorVar = document.querySelectorAll('.input__forms-val_error')

      if (errorVar.length <= 0) {
         $('.form-val')[0].reset()
      }
   });
});