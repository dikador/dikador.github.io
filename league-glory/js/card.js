window.addEventListener("resize", () => {
   // removeSkills();
   postitionTooltip();
});

const postitionTooltip = () => {
   const tooltips = document.querySelectorAll(".tooltip");

   tooltips.forEach((el) => {
      if (el.offsetParent.offsetLeft + el.clientWidth + 80 > window.innerWidth) {
         el.classList.add("bot-tooltip");
         el.classList.remove("right-tooltip");
      } else {
         el.classList.add("right-tooltip");
         el.classList.remove("bot-tooltip");
      }
   });
};

const removeSkills = () => {
   if (document.querySelectorAll(".main-card-skills")) {
      document.querySelectorAll(".main-card-skills").forEach((el) => {
         let limit = 7;
         const skills = el.querySelectorAll(".skills-item");

         if (!el.classList.contains("show-skills")) {
            if (window.innerWidth > 460) {
               do {
                  limit--;

                  skills[limit].classList.add("more-skills");
                  skills[limit].dataset.textSkill = skills[limit].innerText;
                  skills[limit].innerHTML = "...";

                  if (skills.length >= limit) {
                     for (let i = limit; i < skills.length; i++) {
                        if (skills[i + 1]) {
                           skills[i + 1].classList.add("remove-item");
                        }
                     }
                  }
               } while (window.innerWidth > 768 ? el.clientWidth > window.innerWidth - 394 : el.clientWidth > window.innerWidth - 175);
            } else {
               limit = 4;
               for (let i = limit; i < skills.length; i++) {
                  if (i == limit) {
                     skills[limit].classList.add("more-skills");
                     skills[limit].dataset.textSkill = skills[limit].innerText;
                     skills[limit].innerHTML = "...";
                  }
                  if (skills[i + 1]) {
                     skills[i + 1].classList.add("remove-item");
                  }
               }
            }
         }

         skills[limit].addEventListener("click", function () {
            skills[limit].innerHTML = skills[limit].dataset.textSkill;
            skills[limit].classList.remove("more-skills");
            skills.forEach((element) => {
               element.classList.remove("remove-item");
               if (element.dataset.textSkill) {
                  element.innerHTML = element.dataset.textSkill;
               }
            });
            el.classList.add("show-skills");
         });
      });
   }
};

if (document.querySelector(".tabs-adaptive .form-control")) {
   document.querySelector(".tabs-adaptive .form-control").addEventListener("change", function () {
      window.location = this.value;
   });
}

removeSkills();
postitionTooltip();
