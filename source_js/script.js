// Write any custom javascript functions here

// For particle background
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    // dotColor: '#5cbdaa',
    // lineColor: '#5cbdaa',
    dotColor: '#bdc3c7',
    lineColor: '#ecf0f1',
    density: 20000,
    particleRadius: 3,
    proximity: 50,
    lineWidth: 0.5,
    // curvedLines: true,
    parallaxMultiplier: 4
  });
  // var splash = document.getElementById('splash');
  // splash.style.marginTop = - splash.offsetHeight + 'px';
}, false);

// Start Orbit carousel.
// var prize_orbit_target = $("#prize_orbit_target");
// var prize_orbit = new Foundation.Orbit(prize_orbit_target, options);

// Start Owl Carousel.
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    "items": 1,
    "navigation": true,
    "responsive": true,
    "autoPlay": true
  });

  $(document).on("scroll", function() {
    if ($(document).scrollTop() > 80) {
      console.log("Scroll event detected.");
      $(".title-bar").removeClass("large").addClass("small");
      $(".top-bar").removeClass("large").addClass("small");
    } else {
      $(".title-bar").removeClass("small").addClass("large");
      $(".top-bar").removeClass("small").addClass("large");
    }
  });
});