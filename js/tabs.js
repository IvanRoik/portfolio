const aboutPage = document.querySelector('.main__about');
const contactPage = document.querySelector('.main__contact');
const portfolioPage = document.querySelector('.main__portfolio');
const servicesPage = document.querySelector('.main__services');


document.querySelector('.btn-tab-1')
   .addEventListener('click', () => showTabs(1));

document.querySelector('.btn-tab-2')
   .addEventListener('click', () => showTabs(2));

document.querySelector('.btn-tab-3')
   .addEventListener('click', () => showTabs(3));

document.querySelector('.btn-tab-4')
   .addEventListener('click', () => showTabs(4));

function showTabs(num) {
   if (num == 1) {
      let pos = -100;
      const id = setInterval(change, 5);
      function change() {
         if (pos == 0) {
            clearInterval(id);
         } else {
            pos++;
            aboutPage.style.top = pos + "px";
            aboutPage.style.display = "block";
         }
      }
   } else if (num == 2) {
      let pos = 100;
      const id = setInterval(change, 5);
      function change() {
         if (pos == 0) {
            clearInterval(id);
         } else {
            pos--;
            contactPage.style.left = pos + "px";
            contactPage.style.display = "block";
         }
      }
   } else if (num == 3) {
      let pos = 100;
      const id = setInterval(change, 5);
      function change() {
         if (pos == 0) {
            clearInterval(id);
         } else {
            pos--;
            servicesPage.style.bottom = pos + "px";
            servicesPage.style.top = pos + "px";
            servicesPage.style.display = "block";
         }
      }
   } else if (num == 4) {
      let pos = -100;
      const id = setInterval(change, 5);
      function change() {
         if (pos == 0) {
            clearInterval(id);
         } else {
            pos++;
            portfolioPage.style.left = pos + "px";
            portfolioPage.style.display = "block";
         }
      }
   }
}

document.querySelector('img.prt-close-1')
   .addEventListener('click', () => hide_section(1));

document.querySelector('img.prt-close-2')
   .addEventListener('click', () => hide_section(2));

document.querySelector('img.prt-close-3')
   .addEventListener('click', () => hide_section(3));

document.querySelector('img.prt-close-4')
   .addEventListener('click', () => hide_section(4));

function hide_section(num) {
   if (num == 1) {
      let pos = 0;
      const id = setInterval(change, 5);
      function change() {
         if (pos == -100) {
            clearInterval(id);
         } else {
            pos--;
            aboutPage.style.top = pos + "px";
            aboutPage.style.display = "none";
         }
      }
   } else if (num == 2) {
      let pos = 0;
      const id = setInterval(change, 5);
      function change() {
         if (pos == -100) {
            clearInterval(id);
         } else {
            pos--;
            contactPage.style.right = pos + "px";
            contactPage.style.display = "none";
         }
      }
   } else if (num == 3) {
      let pos = 0;
      const id = setInterval(change, 5);
      function change() {
         if (pos == -100) {
            clearInterval(id);
         } else {
            pos--;
            portfolioPage.style.left = pos + "px";
            portfolioPage.style.display = "none";
         }
      }
   } else if (num == 4) {
      let pos = 0;
      const id = setInterval(change, 5);
      function change() {
         if (pos == 100) {
            clearInterval(id);
         } else {
            pos++;
            servicesPage.style.bottom = pos + "px";
            servicesPage.style.top = pos + "px";
            servicesPage.style.display = "none";
         }
      }
   }
};







