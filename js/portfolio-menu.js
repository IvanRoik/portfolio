document.querySelector('#loadMore').addEventListener('click', function () {
   const loadMenuList = document.querySelectorAll('.prt-loadmore');
   if (loadMenuList[7].style.display == "none") {
      for (let i = 2; i < 8; i++) {
         loadMenuList[i].style.display = "block";
      }
      console.log('first click');
   } else if (loadMenuList[9].style.display == "none") {
      for (let i = 7; i < 10; i++) {
         loadMenuList[i].style.display = "block";
      }
      console.log('second click')
   }
});