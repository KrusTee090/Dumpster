// Select modal and elements
const modal = document.getElementById('bookModal');
const overlay = document.getElementById('modalOverlay');
const closeBtn = modal.querySelector('.close-btn');
const bookBtn = modal.querySelector('.book-btn');

// Open modal for all "Book Now" buttons
document.querySelectorAll('.book-now-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // prevent scroll
  });
});

// Function to close modal
function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on close button, book button, or overlay click
closeBtn.addEventListener('click', closeModal);
bookBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if(e.key === "Escape" && modal.classList.contains('open')) {
    closeModal();
  }
});
