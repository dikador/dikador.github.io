
function searchFilter(inputs, tables) {
   var input, filter, table, tr, td, i;
   input = document.getElementById(inputs);
   filter = input.value.toUpperCase();
   table = document.getElementById(tables);
   tr = table.getElementsByTagName("tr");
   for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
         if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
         } else {
            tr[i].style.display = "none";
         }
      }
   }
};

document.querySelectorAll('.close-filter').forEach(element => {
   element.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.search__filter-properties').classList.toggle('active');
   })
});

const clientFIO = document.querySelector('#clientFIO').checked;
const clientRace = document.querySelector('#clientRace').checked;
const clientDateBirth = document.querySelector('#clientDateOfBirth').checked;
const clientYindel = document.querySelector('#clientYindel').checked;
const clientGender = document.querySelector('#clientGender').checked;
const clientOne = document.querySelector('#column1').checked;
const clientTwo = document.querySelector('#column2').checked;
const clientThree = document.querySelector('#column3').checked;

const table = document.querySelector('#tableClient');
const tr = table.querySelectorAll("tr");

for (let i = 0; i < tr.length; i++) {
   if (!clientFIO) document.querySelectorAll('.tableClient-FIO')[i].style.display = 'none';
   if (!clientRace) document.querySelectorAll('.tableClient-race')[i].style.display = 'none';
   if (!clientDateBirth) document.querySelectorAll('.tableClient-dateBirthDay')[i].style.display = 'none';
   if (!clientYindel) document.querySelectorAll('.tableClient-yindel')[i].style.display = 'none';
   if (!clientGender) document.querySelectorAll('.tableClient-gender')[i].style.display = 'none';
   if (!clientOne) document.querySelectorAll('.tableClient-one')[i].style.display = 'none';
   if (!clientTwo) document.querySelectorAll('.tableClient-two')[i].style.display = 'none';
   if (!clientThree) document.querySelectorAll('.tableClient-three')[i].style.display = 'none';
}


document.querySelector('.btn-apply').addEventListener('click', (e) => {
   e.preventDefault();

   const clientFIO = document.querySelector('#clientFIO').checked;
   const clientRace = document.querySelector('#clientRace').checked;
   const clientDateBirth = document.querySelector('#clientDateOfBirth').checked;
   const clientYindel = document.querySelector('#clientYindel').checked;
   const clientGender = document.querySelector('#clientGender').checked;
   const clientOne = document.querySelector('#column1').checked;
   const clientTwo = document.querySelector('#column2').checked;
   const clientThree = document.querySelector('#column3').checked;

   const table = document.querySelector('#tableClient');
   const tr = table.querySelectorAll("tr");

   for (let i = 0; i < tr.length; i++) {
      if (clientFIO) document.querySelectorAll('.tableClient-FIO')[i].style.display = '';
      if (clientRace) document.querySelectorAll('.tableClient-race')[i].style.display = '';
      if (clientDateBirth) document.querySelectorAll('.tableClient-dateBirthDay')[i].style.display = '';
      if (clientYindel) document.querySelectorAll('.tableClient-yindel')[i].style.display = '';
      if (clientGender) document.querySelectorAll('.tableClient-gender')[i].style.display = '';
      if (clientOne) document.querySelectorAll('.tableClient-one')[i].style.display = '';
      if (clientTwo) document.querySelectorAll('.tableClient-two')[i].style.display = '';
      if (clientThree) document.querySelectorAll('.tableClient-three')[i].style.display = '';


      if (!clientFIO) document.querySelectorAll('.tableClient-FIO')[i].style.display = 'none';
      if (!clientRace) document.querySelectorAll('.tableClient-race')[i].style.display = 'none';
      if (!clientDateBirth) document.querySelectorAll('.tableClient-dateBirthDay')[i].style.display = 'none';
      if (!clientYindel) document.querySelectorAll('.tableClient-yindel')[i].style.display = 'none';
      if (!clientGender) document.querySelectorAll('.tableClient-gender')[i].style.display = 'none';
      if (!clientOne) document.querySelectorAll('.tableClient-one')[i].style.display = 'none';
      if (!clientTwo) document.querySelectorAll('.tableClient-two')[i].style.display = 'none';
      if (!clientThree) document.querySelectorAll('.tableClient-three')[i].style.display = 'none';
   }
})

document.querySelector('#searchClient').addEventListener('keyup', () => {
   searchFilter('searchClient', 'tableClient');
});



// function searchFilter(inputs, tables) {
//    const clientFIO = document.querySelector('#clientFIO').checked;
//    const clientRace = document.querySelector('#clientRace').checked;
//    const clientDateBirth = document.querySelector('#clientDateOfBirth').checked;
//    const clientYindel = document.querySelector('#clientYindel').checked;
//    const clientGender = document.querySelector('#clientGender').checked;


//    let input, filter, table, tr, i;
//    input = document.getElementById(inputs);
//    filter = input.value.toUpperCase();
//    table = document.getElementById(tables);
//    tr = table.getElementsByClassName("tr-filter");
//    let tbf = document.querySelectorAll(".table-filter");

//    // let j = table.getElementsByTagName('th').length;

//    let count = [];


//    if (!clientFIO) count.pop(0);
//    if (!clientRace) count.pop(1);
//    if (!clientDateBirth) count.pop(2);
//    if (!clientYindel) count.pop(3);
//    if (!clientGender) count.pop(4);

//    if (clientFIO) count.push(0);
//    if (clientRace) count.push(1);
//    if (clientDateBirth) count.push(2);
//    if (clientYindel) count.push(3);
//    if (clientGender) count.push(4);

//    let j = 0;

//    let f = 0;

//    let arrTrue = [];

//    for (i = 0; i < tr.length; i++) {


//       for (let index = 0; index < count.length; index++) {

//          if (j > count.length - 1) {
//             j = 0;
//          }
//          var filterIndex = count[index];
//          var td = tr[i].getElementsByClassName('table-filter')[filterIndex];

//          if (td) {
//             var txtValue = td.textContent || td.innerText;

//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                tr[i].style.display = "";
//                // console.log(tr[i], txtValue.toUpperCase().indexOf(filter) > -1);
//                // arrTrue.push(tr[i]);

//             } else {
//                // console.log(tr[i], txtValue.toUpperCase().indexOf(filter) > -1);
//                tr[i].style.display = "none";
//             }
//          }
//       }
//       console.log(arrTrue);

//       j++;
//       f++;
//    }
// }

// document.querySelector('#searchClient').addEventListener('keyup', () => {
   // searchFilter('searchClient', 'tableClient');
// });
// document.querySelector('#searchClient').addEventListener('keyup', searchFilter('searchClient', 'tableClient'));
