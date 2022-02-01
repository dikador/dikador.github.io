$(document).ready(function () {
   $("#phoneDrive").mask("+3 (999) 999-9999");
   $("#phone_office").mask("+3 (999) 999-9999");
   $("#contact_phone").mask("+3 (999) 999-9999");
   $("#tel-intro").mask("+3 (999) 999-9999");


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


   $('#introNext').click(function (e) {
      e.preventDefault();
      let nameintroInput = $('#firstName_intro').val().trim();
      let lastintroInput = $('#lastName_intro').val().trim();
      let phoneintroInput = $('#tel-intro').val().trim();

      let mailintroInput = $('#mail_intro').val().trim();

      if (nameintroInput.length < 2) {
         $('#firstName_intro').addClass('input__forms-val_error');
      } else {
         $('#firstName_intro').removeClass('input__forms-val_error');
      }

      if (lastintroInput.length < 3) {
         $('#lastName_intro').addClass('input__forms-val_error');
      } else {
         $('#lastName_intro').removeClass('input__forms-val_error');
      }


      if (phoneintroInput.length < 8) {
         $('#tel-intro').addClass('input__forms-val_error');
      } else {
         $('#tel-intro').removeClass('input__forms-val_error');
      }


      if (emailTest()) {
         $('#correct_email_intro').addClass('cor_visible');
         $('#mail_intro').addClass('input__forms-val_error');
      } else {
         $('#correct_email_intro').removeClass('cor_visible');
         $('#mail_intro').removeClass('input__forms-val_error');
      };


      let checkedAcceptquad = $('#check-1')[0]

      if (checkedAcceptquad.checked) {
         $('.check-accept_1-text').removeClass('checkbox__quad-val_error');
      } else {
         $('.check-accept_1-text').addClass('checkbox__quad-val_error');
      }


      function emailTest() {
         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mailintroInput)
      }

      const errorVarcontact = document.querySelectorAll('.input__forms-val_error')
      const errorVarCheckbox = document.querySelectorAll('.checkbox__quad-val_error')

      if (errorVarcontact.length <= 0 && errorVarCheckbox.length <= 0) {
         $('.btn-intro_step').attr('href', '#popup');
         document.querySelector('#introNext').click()
      } else {
         $('.btn-intro_step').attr('href', '#');
      }
   });

   $('#sendIntro_work').click(function (e) {
      e.preventDefault();
      let stateintroInput = $('#state_send_intro').val().trim();
      let drivingintroInput = $('#driving_send_intro').val().trim();


      if (stateintroInput.length < 2) {
         $('#state_send_intro').addClass('input__forms-val_error');
      } else {
         $('#state_send_intro').removeClass('input__forms-val_error');
      }

      if (drivingintroInput.length < 3) {
         $('#driving_send_intro').addClass('input__forms-val_error');
      } else {
         $('#driving_send_intro').removeClass('input__forms-val_error');
      }


      let checkedAcceptintro = $('#check-2')[0]

      if (checkedAcceptintro.checked) {
         $('.accept__check-2').removeClass('checkbox__quad-val_error');
      } else {
         $('.accept__check-2').addClass('checkbox__quad-val_error');
      }

      let checkedAcceptedintro = $('#check-ac')[0]

      if (checkedAcceptedintro.checked) {
         $('.text__checked').removeClass('checkbox__quad-val_error');
      } else {
         $('.text__checked').addClass('checkbox__quad-val_error');
      }


      const errorVarsend = document.querySelectorAll('.input__forms-val_error')
      const errorVarsendCheckbox = document.querySelectorAll('.checkbox__quad-val_error')

      if (errorVarsend.length <= 0 && errorVarsendCheckbox.length <= 0) {
         window.location.reload();
      }
   });

});




