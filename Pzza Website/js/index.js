$(document).ready(function() {
    var slider = $('.slider');
    var slides = $('.slide');
    var slideWidth = $('.slide').width();
    var currentSlide = 0;
  
    function nextSlide() {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
      } else {
        currentSlide = 0;
      }
      updateSlider();
    }
  
    function updateSlider() {

      var translateValue = -currentSlide * slideWidth;
      slider.css('transform', 'translateX(' + translateValue + 'px)');
  
  }
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });
  