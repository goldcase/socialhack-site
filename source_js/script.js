// Write any custom javascript functions here

// For particle background
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    // dotColor: '#5cbdaa',
    // lineColor: '#5cbdaa',
    dotColor: '#bdc3c7',
    lineColor: '#ecf0f1',
    density: 20000,
    particleRadius: 5,
    proximity: 50,
    lineWidth: 0.5,
    // curvedLines: true,
    parallaxMultiplier: 4
  });
  // var splash = document.getElementById('splash');
  // splash.style.marginTop = - splash.offsetHeight + 'px';
}, false);
