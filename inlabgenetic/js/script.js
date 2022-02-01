$(document).ready(function () {
   if (window.innerWidth <= 1024) {
      document.querySelector('.sidebar').classList.add('disable')
   }

   document.querySelector('.header__burger').addEventListener('click', () => {
      document.querySelector('.sidebar').classList.toggle('disable');
      document.querySelector('.header__burger').classList.toggle('disable');
   });


   $('.main_input_file').change(function (e) {
      e.preventDefault();
      var f_name = [];

      for (var i = 0; i < $(this).get(0).files.length; ++i) {
         f_name.push(" " + $(this).get(0).files[i].name);
      }

      $(".f_name").val(f_name.join(", "));
   });

});