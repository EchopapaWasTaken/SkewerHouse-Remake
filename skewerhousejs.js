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