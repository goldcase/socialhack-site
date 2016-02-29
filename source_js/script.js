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

  /*
   * Navigation bar.
   * Shrinks navigation bar on scroll.
   * Basic approach cited from webdesignerdepot.com.
   * Also highlights current position on navigation bar.
   */

   var nav_children = $(".menu ul").children("li");

   var li_array = nav_children.get();

   var anchor_children = nav_children.children("a");

     var anchors = anchor_children.map(function() {
    return $(this).attr("href");
   }).get();

   var tops = anchors.map(function(currentVal) {
    return Number($(currentVal).offset().top);
   });

   var heights = anchors.map(function(currentVal) {
    var ret = $(currentVal).height();
    console.log("height of " + currentVal + " is " + ret);

    return Number(ret);
   });

   var document_height = $(document).height();

   function changePositionIndicator() {
    console.log("Checking to change position.");

    var window_height = $(window).height();
    var cur_top = $(window).scrollTop();
    var screen_bottom = cur_top + window_height;

    console.log("Window height is " + window_height);

    tops.forEach(function(currentVal, idx) {
      var sum_top_height = currentVal + heights[idx];
      console.log("if " + currentVal + " < " + screen_bottom + " < " + sum_top_height);

      // if (cur_top > currentVal && cur_top < sum_top_height) {
      if (currentVal < screen_bottom && screen_bottom < sum_top_height) {
        console.log("activating " + Number(idx+1));
        $(nav_children).removeClass("active");
        $(nav_children[idx+1]).addClass("active");
      }
      //  else {
      //  $(nav_children[idx+1]).removeClass("active");
      // }
    });
   }

   changePositionIndicator();

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