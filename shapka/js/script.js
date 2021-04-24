document.querySelectorAll('img.svg').forEach(img => {
   var imgId = img.id;
   var imgClass = img.className;
   var imgURL = img.src;
   var imgFill = img.getAttribute('data-fill');

   fetch(imgURL).then(r => r.text()).then(text => {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(text, "text/xml");
      var svg = xmlDoc.getElementsByTagName('svg')[0];

      if (typeof imgId !== 'undefined') {
         svg.setAttribute('id', imgId);
      }

      if (typeof imgClass !== 'undefined') {
         svg.setAttribute('class', imgClass);
      }

      if (typeof imgFill !== 'undefined') {
         svg.setAttribute('fill', imgFill);
      }

      img.parentNode.replaceChild(svg, img);

   }).catch(console.error);

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

