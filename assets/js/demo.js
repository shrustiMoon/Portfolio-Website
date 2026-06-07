document.addEventListener('DOMContentLoaded', function() {
  var particles = document.getElementById('particles');

  if (!particles || particles.querySelector('.pg-canvas')) {
    return;
  }

  var particleOptions = {
    dotColor: '#80cbc4',
    lineColor: '#80cbc4',
    density: 12000,
    particleRadius: 5,
    lineWidth: 1,
    proximity: 95,
    parallax: true,
    parallaxMultiplier: 5
  };

  if (window.particleground) {
    window.particleground(particles, particleOptions);
  } else if (window.jQuery && window.jQuery.fn.particleground) {
    window.jQuery(particles).particleground(particleOptions);
  }
});
