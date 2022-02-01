function maskPhone(selector, masked = '+7 (___) ___-__-__') {
   const elems = document.querySelectorAll(selector);

   function mask(event) {
      const keyCode = event.keyCode;
      const template = masked,
         def = template.replace(/\D/g, ""),
         val = this.value.replace(/\D/g, "");
      console.log(template);
      let i = 0,
         newValue = template.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
         });
      i = newValue.indexOf("_");
      if (i !== -1) {
         newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, this.value.length).replace(/_+/g,
         function (a) {
            return "\\d{1," + a.length + "}";
         }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
         this.value = newValue;
      }
      if (event.type === "blur" && this.value.length < 5) {
         this.value = "";
      }
   }

   for (const elem of elems) {
      elem.addEventListener("input", mask);
      elem.addEventListener("focus", mask);
      elem.addEventListener("blur", mask);
   }
}

maskPhone('#phone', '+1(___)___-____');


document.querySelector('.btn-contact').addEventListener("click", function (e) {
   e.preventDefault()
   let nameInput = document.querySelector('#vorname').value;
   let twonameInput = document.querySelector('#nachname').value;

   let phoneInput = document.querySelector('#phone').value;

   let mailInput = document.querySelector('#email').value;

   let messInput = document.querySelector('#beschreibung').value;

   console.log(phoneInput);


   if (nameInput.length < 2) {
      document.querySelector('#vorname').classList.add('input__forms-val_error');
   } else {
      document.querySelector('#vorname').classList.remove('input__forms-val_error');
   }

   if (twonameInput.length < 2) {
      document.querySelector('#nachname').classList.add('input__forms-val_error');
   } else {
      document.querySelector('#nachname').classList.remove('input__forms-val_error');
   }

   if (phoneInput.length < 11) {
      document.querySelector('#phone').classList.add('input__forms-val_error');
   } else {
      document.querySelector('#phone').classList.remove('input__forms-val_error');
   }

   if (emailTest()) {
      document.querySelector('#email').classList.add('input__forms-val_error');
   } else {
      document.querySelector('#email').classList.remove('input__forms-val_error');
   };

   function emailTest() {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mailInput)
   }

   const errorVar = document.querySelectorAll('.input__forms-val_error')

   if (errorVar.length <= 0) {
      window.location.reload();
   }
});

