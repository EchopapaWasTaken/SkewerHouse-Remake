document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission
  alert('Thank you! Your message has been submitted. You will hear from us soon.'); // Display pop-up
});