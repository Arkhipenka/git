let slideIndex = 2;

showContent(slideIndex);

function plusIndex(n) {
  showContent(slideIndex += n);
}

function currentSlide(n) {
  showContent(slideIndex = n)
}


function showContent(n) {
  let nav = document.getElementsTagName('a');

  if (n > dayTips.length - 1) {
    slideIndex = 0;
  }

  if (n < 0) {
    slideIndex = dayTips.length - 1;
  }


  for (let i = 0; i < nav.length; i++) {
    nav[i].className = nav[i].className.replace(" active", "");

  }

  nav[slideIndex].className += " active";
}


window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(event) {
  const key = event.key;
  if (event.key === "ArrowLeft") {
    plusIndex(-1);
  }
  if (event.key === "ArrowRight") {
    plusIndex(+1);
  }
  if (event.key === "Escape") {
    closeModal();
  }
}