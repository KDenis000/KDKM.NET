// Movie Filtering System for movies.html
const searchBox = document.getElementById('searchBox');

if (searchBox) {
    searchBox.addEventListener('keyup', function(e) {
        const text = e.target.value.toLowerCase();
        const movieCards = document.querySelectorAll('.movie-card');

        movieCards.forEach(card => {
            const titleAttr = card.getAttribute('data-title').toLowerCase();
            if (titleAttr.includes(text)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Interactive alert logic for the Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you! Your message/movie request has been sent successfully.');
        contactForm.reset();
    });
}
