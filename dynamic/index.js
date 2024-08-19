const date = new Date();
document.getElementById('demo').innerHTML = date.getFullYear();

function showSidebar() {
    const menuSign = document.querySelector('.aside_bar');
    menuSign.style.display = "block"
}

/* //Image slider  */

let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; // Restart slideshow from the first slide
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

showSlides();

/* //Image slider  */