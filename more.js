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



  




 
   
