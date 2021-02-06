const preLoaderBtn = document.querySelector("#preloader");
const preLoaderImg = document.querySelector("#status");

window.addEventListener('load', function preLoader() {
   preLoaderBtn.classList.add('display-block');
   preLoaderImg.classList.add('display-block');
   window.setTimeout(function () {
      preLoaderBtn.classList.add('display-none');
      preLoaderImg.classList.add('display-none');
      preLoaderImg.classList.remove('display-block');
      preLoaderBtn.classList.remove('display-block');
   }, 1000);
});