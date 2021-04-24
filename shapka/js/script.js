$(document).ready(function () {
   jQuery('img.svg').each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function (data) {
         // Get the SVG tag, ignore the rest
         var $svg = jQuery(data).find('svg');

         // Add replaced image's ID to the new SVG
         if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
         }
         // Add replaced image's classes to the new SVG
         if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
         }

         // Remove any invalid XML tags as per http://validator.w3.org
         $svg = $svg.removeAttr('xmlns:a');

         // Replace image with new SVG
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

