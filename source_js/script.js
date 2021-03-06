// Write any custom javascript functions here

// For particle background
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#bdc3c7',
    lineColor: '#ecf0f1',
    density: 30000,
    particleRadius: 5,
    proximity: 50,
    lineWidth: 0.5,
    parallaxMultiplier: 3
  });

  particleground(document.getElementById('particles-late'), {
    dotColor: '#2980b9',
    lineColor: '#3498db',
    density: 40000,
    particleRadius: 4,
    proximity: 100,
    lineWidth: 0.5,
    parallaxMultiplier: 8
  });
}, false);

// Start Owl Carousel.
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 3,
    itemsMobile: [479, 1],
    itemsTablet: [979, 3],
    navigation: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      640 : {
        items: 3
      }
    },
    autoPlay: true
  });

  /*
   * Navigation bar.
   * Shrinks navigation bar on scroll.
   * Basic approach cited from webdesignerdepot.com.
   * Also highlights current position on navigation bar.
   */

   var nav_children = $(".menu").children("li");
   console.log(nav_children);

   var li_array = nav_children.get();
   console.log(li_array);

   var anchor_children = nav_children.children("a");

   var anchors = anchor_children.map(function() {
    return $(this).attr("href");
   }).get().filter(function(elem, idx) {
    return elem != "#";
   });

   console.log(anchors);

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
        // $(nav_children).removeClass("active");
        // $(nav_children[idx+1]).addClass("active");

        $(anchor_children).removeClass("active");
        // $(anchor_children[idx+1]).addClass("active");
        $(anchor_children[idx]).addClass("active");

      }
      //  else {
      //  $(nav_children[idx+1]).removeClass("active");
      // }
    });
   }

   changePositionIndicator();

  $(document).on("scroll", function() {
    changePositionIndicator();

    if ($(document).scrollTop() > 54) {
      console.log("Scroll event detected.");
      $(".title-bar").removeClass("large").addClass("small");
      $(".top-bar").removeClass("large").addClass("small");
    } else {
      $(".title-bar").removeClass("small").addClass("large");
      $(".top-bar").removeClass("small").addClass("large");
    }
  });
  var container = $("html, body");

    $("a").click(function(event) {
      var anchor = $(this).attr("href");

      container.animate({
        scrollTop: $(anchor).offset().top
      }, 1000);

      event.preventDefault();
    });
});