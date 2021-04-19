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

maskPhone('#phoneNumber', '+7(___)___-____');


document.querySelector('.button').addEventListener("click", function (e) {
   e.preventDefault()
   let nameInput = document.querySelector('#name').value;

   let passInput = document.querySelector('#pass').value;

   let phoneInput = document.querySelector('#phoneNumber').value;

   let mailInput = document.querySelector('#mail').value;

   let radioInput = document.querySelector('.input-radio-block:checked').value;

   let selectInput = document.querySelector('#select').value;

   let messInput = document.querySelector('#message').value;

   console.log(phoneInput);


   if (nameInput.length < 2) {
      document.querySelector('#name').classList.add('input__forms-val_error');
   } else {
      document.querySelector('#name').classList.remove('input__forms-val_error');
   }

   if (phoneInput.length < 11) {
      document.querySelector('#phoneNumber').classList.add('input__forms-val_error');
   } else {
      document.querySelector('#phoneNumber').classList.remove('input__forms-val_error');
   }

   if (passInput.length < 5) {
      document.querySelector('#pass').classList.add('input__forms-val_error');
   } else {
      document.querySelector('#pass').classList.remove('input__forms-val_error');
   }

   if (emailTest()) {
      document.querySelector('#mail').classList.add('input__forms-val_error');
   } else {
      document.querySelector('#mail').classList.remove('input__forms-val_error');
   };


   let checkedAcceptquad = document.querySelector('#checkbox__quad-accept');

   if (checkedAcceptquad.checked) {
      document.querySelector('.checkbox__quad-accept_text').classList.remove('checkbox__quad-val_error');
   } else {
      document.querySelector('.checkbox__quad-accept_text').classList.add('checkbox__quad-val_error');
   }

   function emailTest() {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(mailInput)
   }

   const errorVar = document.querySelectorAll('.input__forms-val_error')
   const errorVarCheckbox = document.querySelectorAll('.checkbox__quad-val_error')

   if (errorVar.length <= 0 && errorVarCheckbox.length <= 0) {
      window.location.reload();
   }
});