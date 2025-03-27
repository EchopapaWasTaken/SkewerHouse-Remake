/*Specials Section Start*/
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
/*Specials Section Start*/

/*Main Menu Section Start*/
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
/*Main Menu Section End*/

/*Modal Section Start*/
document.addEventListener('DOMContentLoaded', function() {
    const submitBookingBtn = document.getElementById('submitBookingBtn');
    const bookingConfirmation = document.getElementById('bookingConfirmation');
    const modalBodyForm = document.querySelector('.modal-body form');
    const bookingError = document.getElementById('bookingError');
    const initialParagraph = document.querySelector('.modal-body p'); // Get the initial paragraph

    if (submitBookingBtn) {
        submitBookingBtn.addEventListener('click', function(event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const guests = document.getElementById('guests').value;

            // Check for empty fields
            if (!name || !date || !time || !guests) {
                bookingError.textContent = 'Please fill in all fields.';
                bookingError.style.display = 'block';
                return; // Stop further execution
            }

            // Check if the date is in the future
            const selectedDate = new Date(date);
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison

            if (selectedDate < currentDate) {
                bookingError.textContent = 'Please select a future date.';
                bookingError.style.display = 'block';
                return; // Stop further execution
            }

            // Check if the time is in the past for the selected date.
            if (selectedDate.getTime() === currentDate.getTime()) {
                const selectedTime = time.split(':');
                const selectedHour = parseInt(selectedTime[0]);
                const selectedMinute = parseInt(selectedTime[1]);

                const now = new Date();
                const currentHour = now.getHours();
                const currentMinute = now.getMinutes();

                if (selectedHour < currentHour || (selectedHour === currentHour && selectedMinute < currentMinute)) {
                    bookingError.textContent = 'Please select a future time for today.';
                    bookingError.style.display = 'block';
                    return; // Stop further execution
                }
            }

            // Clear any previous error message
            bookingError.style.display = 'none';

            // Create confirmation message
            const confirmationMessage = `
                <p><strong>Booking Confirmed!</strong></p>
                <p>Name: ${name}</p>
                <p>Date: ${date}</p>
                <p>Time: ${time}</p>
                <p>Guests: ${guests}</p>
            `;

            // Display confirmation message
            bookingConfirmation.innerHTML = confirmationMessage;
            bookingConfirmation.style.display = 'block';

            // Hide the form and initial paragraph
            modalBodyForm.style.display = 'none';
            initialParagraph.style.display = 'none'; // Hide the paragraph

            // Change the modal footer
            document.querySelector('.modal-footer').innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>`;
        });
    } else {
        console.log('Submit Booking button not found.');
    }

    // Reset the modal on close
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
        bookingModal.addEventListener('hidden.bs.modal', function() {
            bookingConfirmation.style.display = 'none';
            modalBodyForm.style.display = 'block';
            bookingError.style.display = 'none'; // Clear error on modal close
            initialParagraph.style.display = 'block'; // Show the paragraph again
        });
    }
});
/*Modal Section End*/