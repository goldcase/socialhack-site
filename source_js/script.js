// Write any custom javascript functions here

// For particle background
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa',
    density: 40000,
    // curvedLines: true,
    parallaxMultiplier: 4
  });
  // var splash = document.getElementById('splash');
  // splash.style.marginTop = - splash.offsetHeight + 'px';
}, false);
