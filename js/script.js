// Toggle menu untuk mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active'); // Tutup menu setelah klik
    });
});

// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close');

// Event listener untuk tombol "Pelajari Lebih Lanjut"
document.querySelectorAll('.detail').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.destination-card');
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = 'flex';
    });
});

// Tutup modal saat klik close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Tutup modal saat klik di luar modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});