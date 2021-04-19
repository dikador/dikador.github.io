// ! Изменение элемента при достижении определенного блока==========================================================================

window.addEventListener('scroll', () => {
   let navTop = document.querySelector('.nav').getBoundingClientRect().top;

   let sec1 = document.querySelector('.sec1').getBoundingClientRect().top;
   let sec2 = document.querySelector('.sec2').getBoundingClientRect().top;
   let sec3 = document.querySelector('.sec3').getBoundingClientRect().top;

   let nav_link = document.querySelectorAll('.nav-link');

   nav_link.forEach(element => {
      if (navTop > sec1 && navTop < sec2) {
         element.classList.add('sect1');
      } else {
         element.classList.remove('sect1');
      }

      if (navTop > sec2 && navTop < sec3) {
         element.classList.add('sect2');
      } else {
         element.classList.remove('sect2');
      }
   });
})


// ! Заполнение полоски по мере скролла страницы==========================================================================


let strip = document.querySelector('.strip__fill')

let windowHeight = window.innerHeight;

window.addEventListener("scroll", (evt) => {
   changeActiveNavPosition();
})

function changeActiveNavPosition() {
   let mainContentHeight = document.querySelector('body').offsetHeight - windowHeight;
   let windowScrollProcent = window.pageYOffset / mainContentHeight * 100 + "%";

   strip.style.width = windowScrollProcent;
}


// !Прилипание блока в момент доскролливания до него===================================================================

let nav = document.querySelector('.nav')


function getCoords(block) {
   let box = block.getBoundingClientRect();
   return {
      top: box.top + pageYOffset
   }
}

const getCordT = getCoords(nav).top

let stickyNav = function () {
   let topScroll = window.pageYOffset;

   if (getCordT <= topScroll) {
      nav.classList.add('sticky');
      return
   }
   if (getCordT < topScroll) {
      nav.classList.remove('sticky');
   }
   else {
      nav.classList.remove('sticky');
   }
};


stickyNav();
window.addEventListener('scroll', () => {
   stickyNav();
})


// !Скрывает хедер при скролле вниз и раскрывает при скролле на верх=============================================================================

let scroll_top = window.pageYOffset,
   is_hidden = false;

let enabled = true;

let headerT = document.querySelector('.header');

window.addEventListener('scroll', function (scope) {
   let new_scroll_top = window.pageYOffset,
      menu_height = headerT.clientHeight;

   move_down = (new_scroll_top > scroll_top);

   if (move_down) {
      if (!is_hidden && (new_scroll_top > menu_height)) {
         is_hidden = true;
         headerT.classList.add('hide');
      }
   } else {
      if (is_hidden && enabled) {
         is_hidden = false;
         headerT.classList.remove('hide');
      }
   }

   scroll_top = new_scroll_top;
})