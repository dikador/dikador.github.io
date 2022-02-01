$(document).ready(function () {

   if (localStorage.getItem("login")) {
      $('.login-name')[0].innerHTML = localStorage.getItem("login");

      $('.login-btn').remove()
   }else {
      $('.login-name').remove()
   }

   $('#form-button').click(function (e) {
      e.preventDefault()
      let nameInput = $('#name').val().trim();
      let mailInput = $('#mail').val().trim();

      if (nameInput.length < 2) {
         $('#name').addClass('input__forms-val_error');
      } else {
         $('#name').removeClass('input__forms-val_error');
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
         window.location.reload()
      }
   });


   $('#reg-button').click(function (e) {
      e.preventDefault()
      let nameInput = $('#login').val().trim();
      let passInput = $('#password').val().trim();

      if (nameInput.length < 2) {
         $('#login').addClass('input__forms-val_error');
      } else {
         $('#login').removeClass('input__forms-val_error');
      }

      if (passInput.length < 5) {
         $('#password').addClass('input__forms-val_error');
      } else {
         $('#password').removeClass('input__forms-val_error');
      };

      const errorVar = document.querySelectorAll('.input__forms-val_error')

      if (errorVar.length <= 0) {
         localStorage.setItem("login", nameInput)
         localStorage.setItem("password", passInput);

         window.location.reload();
      }
   });
});