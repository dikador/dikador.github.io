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
      console.log(this);
      if (this.classList.contains('active')) {
         this.querySelector(".check-accept").checked = false;
      } else {
         this.querySelector(".check-accept").checked = true;
      }

      this.classList.toggle("active");
   })

}
