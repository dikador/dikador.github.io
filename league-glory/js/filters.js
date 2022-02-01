const tooltipsBody = document.querySelectorAll(".tooltip-apply");

document.querySelector("#filter-visible").addEventListener("change", function () {
   const filter = document.querySelector("#filters");
   this.checked ? filter.classList.add("visible") : filter.classList.remove("visible");
});

document.querySelector("#filter-sports").addEventListener("change", function () {
   if (document.querySelector("#positions")) {
      if (this.value.includes("position-false")) {
         document.querySelector("#positions").classList.add("remove-item");
      } else {
         document.querySelector("#positions").classList.remove("remove-item");
      }
   }
});
