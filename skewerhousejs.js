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

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.main-menu-button, .main-button');
  const cardContainers = document.querySelectorAll('.menu-card-container');
  const featuretteContainers = document.querySelectorAll('.menu-featurette-container'); // Change to select all featurette containers

  buttons.forEach(button => {
      button.addEventListener('click', function () {
          const category = this.dataset.category;

          // Remove active class from all buttons
          buttons.forEach(btn => btn.classList.remove('active'));

          // Add active class to the clicked button
          this.classList.add('active');

          // Hide all card containers
          cardContainers.forEach(container => {
              container.style.display = 'none';
          });

          // Hide all featurette containers
          featuretteContainers.forEach(container => {
              container.style.display = 'none';
          });

          // Show the selected card container
          document.getElementById(category + '-cards').style.display = 'flex';

          // Show the selected featurette container
          document.getElementById(category + '-featurette').style.display = 'block';
      });
  });
});