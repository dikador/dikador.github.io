$(document).ready(function () {


   $(".acord__top").click(function (e) {
      e.preventDefault();
      const acordB = $(this).next()

      $(this, acordB).toggleClass('active__acord');
      $(acordB).slideToggle(300);

      if ($('.acord').hasClass('one-acord')) {
         $('.acord__top').not($(this)).removeClass('active__acord');
         $('.acord__bot').not(acordB).slideUp(300);
      }
   });

   $('.acord__bot').click(function (e) {

      let acordBtn = $(e.currentTarget).find('.btn-upload');

      if ($('.f_name').val() == 'Файл не выбран') {
         acordBtn = acordBtn[0];
         acordBtn.classList.add('disable');

         acordBtn.disabled = true;
      }

      $('.acord__bot-input').change(function () {
         let f_name = [];

         acordBtn.classList.remove('disable');
         acordBtn.disabled = false;

         for (let i = 0; i < $(this).get(0).files.length; ++i) {
            f_name.push(" " + $(this).get(0).files[i].name);
         }

         let fileName = $(e.currentTarget).find(".f_name");

         fileName = fileName[0]

         $(fileName).val(f_name.join(", "));
      });




      $('.show-table').each(function (index, element) {
         if (e.target == element) {
            $(e.currentTarget).addClass('show');

            // const btnOpenFullTable = $(e.currentTarget).find('.acord__table-full');
            const btnOpenFullTable = $(e.currentTarget).find('.open-full_table');

            const btnStelsBack = $(e.currentTarget).find('.acord__bot-stels_back');

            let fullTable = $(e.currentTarget).find('.acord__table-full');

            fullTable = fullTable[0];

            $(btnOpenFullTable).click(function (e) {
               fullTable.classList.add('visible');
               $(this).addClass('visible');
            });


            $(btnStelsBack).click(function () {
               fullTable.classList.remove('visible');
               $(btnOpenFullTable).removeClass('visible');
               $(this).removeClass('visible');

               e.currentTarget.classList.remove('show');
            });
         }
      });
   });


});
