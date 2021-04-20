// ! Изменение элемента при достижении определенного блока==========================================================================

window.addEventListener('scroll', () => {
   let navTop = window.pageYOffset;

   if (navTop > 50) {
      document.querySelector('.header').classList.add('sect1');
   } else {
      document.querySelector('.header').classList.remove('sect1');
   }
})

