$(document).ready(function () {
   $('img.img-svg').each(function () {
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

});



const acord_item = document.querySelectorAll('.header__drop');

const acordT = document.querySelectorAll('.dropdowns');

for (let index = 0; index < acord_item.length && acordT.length; index++) {

   let elementItem = acord_item[index];
   let elementTop = acordT[index];

   elementTop.addEventListener('click', (e) => {

      const dropB = elementItem.querySelector('.dorpdowns-menu');

      elementTop.classList.toggle('active-drop');
      dropB.classList.toggle('drops-item');


      if (elementTop.classList.contains('active-drop')) {

         acordT.forEach(element => {
            element.classList.remove('active-drop')
         });

         document.querySelectorAll('.dorpdowns-menu').forEach(element => {
            element.classList.remove('drops-item')
         });

         dropB.classList.add('drops-item')
         elementTop.classList.add('active-drop')
      }
   })
}



document.querySelector('.header__burger').addEventListener('click', () => {
   document.querySelector('.header__burger').classList.toggle('active');
   document.querySelector('.header__left-body').classList.toggle('active-burger')
})

