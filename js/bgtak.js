const windowHeight = window.innerHeight

function backGroundHeight() {
   const place = document.querySelector(".main__wrapper");
   place.style = `height: ${windowHeight}px`;
}

backGroundHeight();