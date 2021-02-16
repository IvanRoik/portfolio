document.querySelector('#close-tab')
   .addEventListener('click', () => hide_sections());

function hide_sections() {
   let posA = 0;
   const idA = setInterval(frame, 5);
   function frame() {
      if (posA == -100) {
         clearInterval(idA);
      } else {
         posA--;
         aboutPage.style.top = posA + "px";
         aboutPage.style.display = "none";
      }
   }
   let posC = 0;
   const idC = setInterval(frame, 5);
   function frame() {
      if (posC == -100) {
         clearInterval(idC);
      } else {
         posC--;
         contactPage.style.right = posC + "px";
         contactPage.style.display = "none";
      }
   }
   let posP = 0;
   const idP = setInterval(frame, 5);
   function frame() {
      if (posP == -100) {
         clearInterval(idP);
      } else {
         posP--;
         portfolioPage.style.left = posP + "px";
         portfolioPage.style.display = "none";
      }
   }
   let posS = 0;
   const idS = setInterval(frame, 5);
   function frame() {
      if (posS == 100) {
         clearInterval(idS);
      } else {
         posS++;
         servicesPage.style.bottom = posS + "px";
         servicesPage.style.top = posS + "px";
         servicesPage.style.display = "none";
      }
   }
};