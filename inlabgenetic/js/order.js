document.querySelectorAll('.close-filter').forEach(element => {
   element.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.search__filter-properties').classList.toggle('active');
   })
});


function searchFilter(inputs, tables) {
   var input, filter, table, tr, td, i;
   input = document.getElementById(inputs);
   filter = input.value.toUpperCase();
   table = document.getElementById(tables);
   tr = table.getElementsByTagName("tr");
   for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
         if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
         } else {
            tr[i].style.display = "none";
         }
      }
   }
};

document.querySelector('#searchOrder').addEventListener('keyup', () => {
   searchFilter('searchOrder', 'tableOrder');
});

const orderLabNum = document.querySelector('#labNum').checked;
const orderB24Id = document.querySelector('#b24Id').checked;
const orderAnalyzing = document.querySelector('#analyzing').checked;
const orderSamples = document.querySelector('#samples').checked;
const orderReport = document.querySelector('#reportOrder').checked;
const numOrder = document.querySelector('#NumOrder').checked;

const tableRep = document.querySelector('#tableOrder');
const trRep = tableRep.querySelectorAll("tr");


for (let i = 0; i < trRep.length; i++) {
   if (!orderLabNum) document.querySelectorAll('.orderLabNum')[i].style.display = 'none';
   if (!orderB24Id) document.querySelectorAll('.orderb24Id')[i].style.display = 'none';
   if (!orderAnalyzing) document.querySelectorAll('.orderanalyzing')[i].style.display = 'none';
   if (!orderReport) document.querySelectorAll('.report')[i].style.display = 'none';
   if (!numOrder) document.querySelectorAll('.orderNum')[i].style.display = 'none';
   if (!orderSamples) document.querySelectorAll('.orderSamples')[i].style.display = 'none';
}

document.querySelector('.btn-apply').addEventListener('click', (e) => {
   e.preventDefault();

   const orderLabNum = document.querySelector('#labNum').checked;
   const orderB24Id = document.querySelector('#b24Id').checked;
   const orderAnalyzing = document.querySelector('#analyzing').checked;
   const orderSamples = document.querySelector('#samples').checked;
   const orderReport = document.querySelector('#reportOrder').checked;
   const numOrder = document.querySelector('#NumOrder').checked;

   const tableRep = document.querySelector('#tableOrder');
   const trRep = tableRep.querySelectorAll("tr");

   for (let i = 0; i < trRep.length; i++) {

      if (orderLabNum) document.querySelectorAll('.orderLabNum')[i].style.display = '';
      if (orderB24Id) document.querySelectorAll('.orderb24Id')[i].style.display = '';
      if (orderAnalyzing) document.querySelectorAll('.orderanalyzing')[i].style.display = '';
      if (orderSamples) document.querySelectorAll('.orderSamples')[i].style.display = '';
      if (numOrder) document.querySelectorAll('.orderNum')[i].style.display = '';
      if (orderReport) document.querySelectorAll('.report')[i].style.display = '';


      if (!orderLabNum) document.querySelectorAll('.orderLabNum')[i].style.display = 'none';
      if (!orderB24Id) document.querySelectorAll('.orderb24Id')[i].style.display = 'none';
      if (!orderAnalyzing) document.querySelectorAll('.orderanalyzing')[i].style.display = 'none';
      if (!orderSamples) document.querySelectorAll('.orderSamples')[i].style.display = 'none';
      if (!numOrder) document.querySelectorAll('.orderNum')[i].style.display = 'none';
      if (!orderReport) document.querySelectorAll('.report')[i].style.display = 'none';

      // if (
      //    !orderLabNum && !orderB24Id && !orderAnalyzing && !orderSamples && !numOrder && !orderReport
      // ) {
      //    return $('.table-change').css('display', 'none');
      // }
   }
})