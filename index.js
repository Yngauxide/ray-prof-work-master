const images = document.querySelectorAll (".slideshow img");
let currentImage = 0;

function crossfade() {
    images[currentImage].classList.remove("active");
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add("active");
}

// Initial setup
images[currentImage].classList.add("active");

// Start the crossfade loop
setInterval(crossfade, 5000); // Change image every 3 seconds



// anima

window.addEventListener('scroll', function() {
    var box = document.getElementById('animatedBox');
    var scrollPosition = window.scrollY;

    // Adjust the condition based on your scroll position
    if (scrollPosition > 200) {
      box.style.opacity = 1;
    } else {
      box.style.opacity = 0;
    }
  });






  




 
   
