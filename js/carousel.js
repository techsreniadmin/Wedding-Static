
// Carousel and Image Modal JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize carousel
  const venueCarousel = document.getElementById('venueCarousel');
  if (venueCarousel) {
    const carousel = new bootstrap.Carousel(venueCarousel, {
      interval: 3000,
      pause: 'hover'
    });
    
    // Pause carousel when mouse is over it
    venueCarousel.addEventListener('mouseenter', function() {
      carousel.pause();
    });
    
    venueCarousel.addEventListener('mouseleave', function() {
      carousel.cycle();
    });
  }
  
  // Setup image modal functionality
  const imageModal = document.getElementById('imageModal');
  if (imageModal) {
    const modalInstance = new bootstrap.Modal(imageModal);
    const modalImage = document.getElementById('modalImage');
    let scale = 1;
    
    // Open modal when clicking on carousel image
    const carouselImages = document.querySelectorAll('.carousel-item img');
    carouselImages.forEach(img => {
      img.addEventListener('click', function() {
        modalImage.src = this.src;
        modalImage.style.transform = `scale(1)`;
        scale = 1;
        modalInstance.show();
      });
    });
    
    // Zoom functionality
    const zoomIn = document.getElementById('zoomIn');
    const zoomOut = document.getElementById('zoomOut');
    
    if (zoomIn && zoomOut) {
      zoomIn.addEventListener('click', function() {
        scale = Math.min(scale + 0.2, 3); // Max zoom 3x
        modalImage.style.transform = `scale(${scale})`;
      });
      
      zoomOut.addEventListener('click', function() {
        scale = Math.max(scale - 0.2, 0.5); // Min zoom 0.5x
        modalImage.style.transform = `scale(${scale})`;
      });
    }
    
    // Reset zoom when modal closes
    imageModal.addEventListener('hidden.bs.modal', function() {
      scale = 1;
      modalImage.style.transform = `scale(1)`;
    });
  }
});
