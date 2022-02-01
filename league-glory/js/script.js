document.querySelector(".header__burger").addEventListener("click", () => {
   document.querySelector(".header__burger").classList.toggle("active");
   document.querySelector(".header__nav").classList.toggle("active");
});

const addSlider = (item, size) => {
   if (item) {
      if (window.innerWidth <= size) {
         item.forEach((element) => {
            element.classList.add("carousel-item");
         });
      } else {
         item.forEach((element) => {
            element.classList.remove("carousel-item");
         });
      }
   }
};

window.addEventListener("resize", () => {
   addSlider(document.querySelectorAll(".events__item"), 576);
   addSlider(document.querySelectorAll(".card-slide-wrapper"), 460);
});

addSlider(document.querySelectorAll(".events__item"), 576);
addSlider(document.querySelectorAll(".card-slide-wrapper"), 460);
