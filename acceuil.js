document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.slide');
    var totalSlides = slides.length;
    var currentIndex = 0;
  
    function showSlide(index) {
      for (var i = 0; i < totalSlides; i++) {
        slides[i].style.opacity = 0;
      }
      slides[index].style.opacity = 1;
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }
  
    showSlide(currentIndex);
  
    setInterval(nextSlide, 10000);
  });
  