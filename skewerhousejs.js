$(document).ready(function() {
  $('.specials-button').click(function() {
      var category = $(this).data('category');

      // Remove active class from all buttons and add to the clicked button
      $('.specials-button').removeClass('active');
      $(this).addClass('active');

      // Hide all card sets and show the selected one
      $('.specials-section-cards').hide();
      $('.specials-section-cards[data-category="' + category + '"]').show();
  });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission
  alert('Thank you! Your message has been submitted. You will hear from us soon.'); // Display pop-up
});