let button = document.querySelector('.button');

let input = document.querySelector('.input');


button.addEventListener('click', () => {
   if (input.value.length <= 0) {
      alert('заполни поле с данными');
   } else {
      alert("У вас - " + input.value + " группа крови");

   }
})