
  (function (Drupal) {
    Drupal.behaviors.speakerModal = {
      attach: function (context, settings) {
        document.addEventListener('DOMContentLoaded', function () {
            new Splide('#speaker-splide', {
              type   : 'loop',
              perPage: 4,
              gap    : '20px',
              autoplay: true,
              pagination: false,
              breakpoints: {
                768: { perPage: 1 },
                1024: { perPage: 2 },
              },
            }).mount();
          });
        // Select all speaker elements once the DOM is fully loaded.
        const speakers = context.querySelectorAll('.speaker-block');
        
        // Loop over each speaker element and add click event listener.
        speakers.forEach((speaker) => {
          speaker.addEventListener('click', function (event) {
            // Get the speaker data from the clicked element.
            const speakerData = event.currentTarget.dataset;
  //console.log (speakerData)
            // Update modal content with speaker details.
            document.querySelector('.modal1 .modal-name').textContent = speakerData.name;
            document.querySelector('.modal1 .modal-title').textContent = speakerData.desg;
            document.querySelector('.modal1 .modal-company').textContent = speakerData.org;
            document.querySelector('.modal1 .modal-bio').innerHTML = speakerData.bio;
            
            // Optional: Update the modal image if available
            const modalImage = document.querySelector('.modal1 .modal-image');
            if (modalImage) {
              modalImage.src = speakerData.photo;
            }
            const drupalLink = document.querySelector('.modal1 .drupal-link');
           
            if (drupalLink) {
                drupalLink.href = speakerData.drupal;
            }
            const xLink = document.querySelector('.modal1 .x-link');
           
            if (xLink) {
                xLink.href = speakerData.x;
            }
            const xlinkedinLink = document.querySelector('.modal1 .linkedin-link');
           
            if (xlinkedinLink) {
                xlinkedinLink.href = speakerData.linkedin;
            }
  
  
            // Display the modal (assuming it has a class "modal" and a "show" class to make it visible).
           document.querySelector('.modal1').classList.add('show');
          
          });
        });
       
        // Close modal functionality
       document.querySelector('.modal1 .close-modal').addEventListener('click', function () {
         document.querySelector('.modal1').classList.remove('show');
        });
      }
    };
  })(Drupal);
 