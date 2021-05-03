document.querySelectorAll('.tabs').forEach(tabs => {

   let tab = tabs.querySelectorAll('.tabs > .tabs-items > div');
   let tab_link = tabs.querySelectorAll('.tabs-link');

   tab_link.forEach(element2 => {
      element2.addEventListener('click', (e) => {
         e.preventDefault();
         for (let index = 0; index < tab_link.length; index++) {
            const element = tab_link[index];
            element.classList.remove('active')
         }
         element2.classList.add('active');

         let elementHref = element2.getAttribute('href').substring(1);

         const tabElement = document.getElementById(elementHref);

         for (let index = 0; index < tab.length; index++) {
            const el = tab[index];
            el.classList.remove('active');
         };
         tabElement.classList.add('active')
      })
   });
});
