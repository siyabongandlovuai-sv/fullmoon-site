document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');

  toggle.addEventListener('click', function() {
    if (nav.style.display === 'flex' || nav.style.display === 'block') {
      nav.style.display = 'none';
      toggle.textContent = '☰';
    } else {
      nav.style.display = 'block';
      toggle.textContent = '✕';
      nav.style.flexDirection = 'column';
    }
  });

  // Demo form handler
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks! This demo form does not send emails yet.');
    form.reset();
  });
});
