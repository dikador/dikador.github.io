$(document).ready(function () {
   $("#phoneDrive").mask("+3 (999) 999-9999");
   $("#phone_office").mask("+3 (999) 999-9999");
   $("#contact_phone").mask("+3 (999) 999-9999");



   $('#sendDrive').click(function (e) {
      e.preventDefault();
      let nameInput = $('#firstName_drive').val().trim();
      let lastInput = $('#lastName-drive').val().trim();
      let homeInput = $('#zipDrive').val().trim();
      let stateInput = $('#stateDrive').val().trim();
      let cityInput = $('#cityDrive').val().trim();

      let phoneInput = $('#phoneDrive').val().trim();

      let mailInput = $('#mailDrive').val().trim();

      if (nameInput.length < 2) {
         $('#firstName_drive').addClass('input__forms-val_error');
      } else {
         $('#firstName_drive').removeClass('input__forms-val_error');
      }


      if (lastInput.length < 2) {
         $('#lastName-drive').addClass('input__forms-val_error');
      } else {
         $('#lastName-drive').removeClass('input__forms-val_error');
      }


      if (homeInput.length < 4) {
         $('#zipDrive').addClass('input__forms-val_error');
      } else {
         $('#zipDrive').removeClass('input__forms-val_error');
      }


      if (stateInput.length < 3) {
         $('#stateDrive').addClass('input__forms-val_error');
      } else {
         $('#stateDrive').removeClass('input__forms-val_error');
      }


      if (cityInput.length < 3) {
         $('#cityDrive').addClass('input__forms-val_error');
      } else {
         $('#cityDrive').removeClass('input__forms-val_error');
      }



      if (phoneInput.length < 8) {
         $('#phoneDrive').addClass('input__forms-val_error');
      } else {
         $('#phoneDrive').removeClass('input__forms-val_error');
      }


      if (emailTest()) {
         $('#mailDrive').addClass('input__forms-val_error');
      } else {
         $('#mailDrive').removeClass('input__forms-val_error');
      };


      let checkedAcceptquad = $('#accept-driver-position')[0]

      if (checkedAcceptquad.checked) {
         $('.accept-label').removeClass('checkbox__quad-val_error');
      } else {
         $('.accept-label').addClass('checkbox__quad-val_error');
      }

      function emailTest() {
         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mailInput)
      }

      const errorVar = document.querySelectorAll('.input__forms-val_error')
      const errorVarCheckbox = document.querySelectorAll('.checkbox__quad-val_error')



      if (errorVar.length <= 0 && errorVarCheckbox.length <= 0) {
         window.location.reload();
      }
   });


   $('#sendContcat').click(function (e) {
      e.preventDefault();
      let namecontInput = $('#contact_name').val().trim();
      let contactSubInput = $('#contactSub').val().trim();
      let phonecontInput = $('#contact_phone').val().trim();

      let mailcontInput = $('#contact_mail').val().trim();

      if (namecontInput.length < 2) {
         $('#contact_name').addClass('input__forms-val_error');
      } else {
         $('#contact_name').removeClass('input__forms-val_error');
      }

      if (contactSubInput.length < 3) {
         $('#contactSub').addClass('input__forms-val_error');
      } else {
         $('#contactSub').removeClass('input__forms-val_error');
      }


      if (phonecontInput.length < 8) {
         $('#contact_phone').addClass('input__forms-val_error');
      } else {
         $('#contact_phone').removeClass('input__forms-val_error');
      }


      if (emailTest()) {
         $('#contact_mail').addClass('input__forms-val_error');
      } else {
         $('#contact_mail').removeClass('input__forms-val_error');
      };


      function emailTest() {
         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mailcontInput)
      }

      const errorVarcontact = document.querySelectorAll('.input__forms-val_error')

      if (errorVarcontact.length <= 0) {
         window.location.reload();
      }
   });
});




