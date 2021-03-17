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





   let cdlDriverPosition = $(".cdl_driver_pos")
   let substance_drive = $(".substance_drive")


   let yearsDrtiverPos = $(".yearsDrtiverPos")
   let duiDriverPos = $(".duiDriverPos")


   let companies_drive = $(".companies_drive")
   let ticket_drive = $(".ticket_drive")



   $('#sendDrive').click(function (e) {

      e.preventDefault();

      let position = $("#position")[0].value

      let lastNamedrive = $("#lastName-drive").val().trim();

      let zipDrive = $("#zipDrive").val().trim();

      for (let cdlDrive of cdlDriverPosition) {
         if (cdlDrive.checked) {
         }
      }
      for (let substance_drive of substance_drive) {
         if (substance_drive.checked) {
         }
      }

      let firstName_drive = $("#firstName_drive").val().trim();

      let cityDrive = $("#cityDrive").val().trim();

      let mailDrive = $("#mailDrive").val().trim();

      for (let years of yearsDrtiverPos) {
         if (years.checked) {
         }
      }
      for (let duiDrive of duiDriverPos) {
         if (duiDrive.checked) {
         }
      }

      let middleDrive = $("#middleDrive").val().trim();
      let stateDrive = $("#stateDrive").val().trim();
      let phoneDrive = $("#phoneDrive").val().trim();

      for (let companiesDrive of companies_drive) {
         if (companiesDrive.checked) {
         }
      }
      for (let ticketsDrive of ticket_drive) {
         if (ticketsDrive.checked) {
         }
      }
      let accidentsDrive = $("#accidentsDrive").val().trim();

      $.ajax({
         type: "POST",
         url: "ajax/mail.php",
         cache: false,
         data: {
            "position": position,
            "lastNamedrive": lastNamedrive,
            "zipDrive": zipDrive,
            "cdlDrive": cdlDrive,
            "substance_drive": substance_drive,
            "firstName_drive": firstName_drive,
            "cityDrive": cityDrive,
            "mailDrive": mailDrive,
            "years": years,
            "duiDrive": duiDrive,
            "middleDrive": middleDrive,
            "stateDrive": stateDrive,
            "phoneDrive": phoneDrive,
            "companiesDrive": companiesDrive,
            "ticketsDrive": ticketsDrive,
            "accidentsDrive": accidentsDrive,
         },
         dataType: "html",
         beforeSend: function () {
            $('#sendDrive').addClass('dis')
            $('#sendDrive').prop("disabled", true)
         },
         success: function (data) {
            alert(data);
            $('#sendDrive').removeClass('dis')
            $('#sendDrive').prop("disabled", false)
         }
      });
   });




   //! intro__form

   // $(".step").click(function (e) {
   //    e.preventDefault();
   //    let firstIntro = $("#firstName-intro").val().trim();
   //    let lastNameIntro = $("#lastName-intro").val().trim();
   //    let mailIntro = $("#mail-intro").val().trim();
   //    let telIntro = $("#tel-intro").val().trim();



   // });







   // let stateIntro = $('#stateInput')[0]


   // let firstIntro = $('#firstName-intro')[0]
   // let lastNameIntro = $('#lastName-intro')[0]
   // let mailIntro = $('#mail-intro')[0]
   // let introAccept = $('.intro__accept')[0]
   // let accept = $('.active')[0]

   // $(".btn-intro").click(function (e) {
   //    e.preventDefault();
   //    if (firstIntro.value.length >= 2 && lastNameIntro.value.length >= 2 && mailIntro.value.length >= 2) {
   //       $(".btn-intro").attr('href', "#popup");
   //    }
   //    else {
   //       alert("Заполните все поля")
   //    }
   // });





   // let introForm = $('.intro__form');

   // $(introForm).submit(formSend(e));

   // async function formSend(e) {
   //    e.preventDefault();

   //    let error = formValiadate(introForm)
   // }


   // function formValiadate(introForm) {
   //    let error = 0;
   //    let formReq = $('._req')

   //    for (let index = 0; index < formReq.length; index++) {
   //       const input = formReq[index];

   //       formRemoveError(input);

   //       if (input.classList.contains('_email')) {

   //       }

   //    }
   // }

   // function formAddError(input) {
   //    input.parentElement.classList.add('_error')
   //    input.classList.add('_error')
   // }

   // function formRemoveError(input) {
   //    input.parentElement.classList.remove('_error')
   //    input.classList.remove('_error')
   // }
});
