const btnactive = document.querySelectorAll('.prt__img--click');

for (let i = 0; i < btnactive.length; i++) {
   btnactive[i].addEventListener("click", function () {
      const current = document.getElementsByClassName("active");
      current[0].classList.remove('active');
      this.classList.add('active');
   });
}
