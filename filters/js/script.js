function checkBox() {
   let checkbox = document.querySelectorAll('.check-accept')
   let wrapCheckbox = document.querySelectorAll('.check__checkbox-accept');

   if (checkbox.length > 0) {
      for (let index = 0; index < checkbox.length; index++) {
         const element = checkbox[index];

         if (element.checked) {
            wrapCheckbox.classList.add('active');
         }
      }
   }

   for (let index = 0; index < wrapCheckbox.length; index++) {
      const element = wrapCheckbox[index];

      element.addEventListener('click', function (e) {
         e.preventDefault;
         if (this.classList.contains('active')) {
            this.querySelector(".check-accept").checked = false;
         } else {
            this.querySelector(".check-accept").checked = true;
         }
         this.classList.toggle("active");
      })
   }
}

checkBox()

$(document).ready(function () {
   $(".acord__top").click(function (e) {
      e.preventDefault();

      if ($('.acord').hasClass('one-acord')) {
         $('.acord__top').not($(this)).removeClass('active__acord');
         $('.acord__bot').not($(this).next()).slideUp(300);
      }

      $(this).toggleClass('active__acord').next().slideToggle(300);
   });

   $('.more__settings-body').click(function (e) {
      e.preventDefault();
      $('.direction').slideToggle(300);
   });
});

document.querySelector('.more__settings-body').addEventListener('click', () => {
   document.querySelector('.more__settings-body').classList.toggle('open-settings');
})


document.querySelectorAll('.input__range-block').forEach(element => {
   const rangeI = element.querySelector('.range__input');
   const rangeNum = element.querySelector('.r-num');
   rangeNum.innerHTML = rangeI.value;

   const mScore = element.querySelector('.min-score');
   mScore.innerHTML = 80;
   mScore.style.left = (mScore.innerHTML * 100) / 200 + '%';

   rangeI.addEventListener('input', () => {
      let vali = rangeI.value;
      vali = (vali * 100) / 200;
      rangeI.style.background = '-webkit-linear-gradient(left, #05396a 0%, #05396a ' + vali + '%, #fff ' + vali + '%, #fff 100%)';
      rangeI.style.background = '-moz-linear-gradient(left, #05396a 0%, #05396a ' + vali + '%, #fff ' + vali + '%, #fff 100%)';

      rangeNum.innerHTML = rangeI.value;

      rangeNum.style.left = vali + '%';
      rangeNum.style.transform = "translate(-" + vali + "%, 0%)";


      // if (window.innerWidth <= 700) {
      if (+rangeI.value >= +mScore.innerHTML) {
         mScore.style.display = "none";
      } else {
         mScore.style.display = "block";
      }
      // }
   })
});

if (window.innerWidth <= 700) {
   $('#dbt1').click(function (e) {
      e.preventDefault();
      $(this).toggleClass('active')
      $('.direction__body-inner').slideToggle();
   });
}

if (window.innerWidth <= 700) {
   $('#dbt2').click(function (e) {
      e.preventDefault();
      $(this).toggleClass('active')
      $('.direction__filters-body').slideToggle();
   });
}
