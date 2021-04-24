
// !Чистый JS

let acord = document.querySelectorAll('.header__drop');

acord.forEach(element => {
   let acord_item = element.querySelectorAll('.acord__item');

   let acordT = element.querySelectorAll('.acord__top');

   for (let index = 0; index < acord_item.length && index < acordT.length; index++) {
      const elementItem = acord_item[index];
      const elementTop = acordT[index];

      elementTop.addEventListener('click', (e) => {
         e.preventDefault;

         const acordB = elementItem.querySelector('.acord__bot');

         (elementTop).classList.toggle('active__acord');
         (acordB).classList.toggle('active__acord');

         if (element.classList.contains('one-acord') && elementTop.classList.contains('active__acord')) {

            element.querySelectorAll('.acord__top').forEach(element => {
               element.classList.remove('active__acord')
            });

            element.querySelectorAll('.acord__bot').forEach(element => {
               element.classList.remove('active__acord')
            });

            acordB.classList.add('active__acord')
            elementTop.classList.add('active__acord')
         }
      })
   }
});