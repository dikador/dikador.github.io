document.querySelectorAll('.close-filter').forEach(element => {
   element.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.search__filter-properties').classList.toggle('active');
   })
});


function searchFilter(inputs, tables) {
   var phrase = document.getElementById(inputs);
   var table = document.getElementById(tables);
   var regPhrase = new RegExp(phrase.value, 'i');
   var flag = false;

   for (var i = 1; i < table.rows.length; i++) {
      flag = false;
      for (var j = table.rows[i].cells.length - 1; j >= 0; j--) {
         flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
         if (flag) break;
      }
      if (flag) {
         table.rows[i].style.display = "";
      } else {
         table.rows[i].style.display = "none";
      }
   }
};



document.querySelector('#searchOrder').addEventListener('keyup', () => {
   searchFilter('searchOrder', 'tableOrder');
});