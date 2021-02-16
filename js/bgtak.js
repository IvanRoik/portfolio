const windowHeight = window.innerHeight

function backGroundHeight() {
   document.querySelector(".main__wrapper").style = `height: ${windowHeight}px`;
}

backGroundHeight();