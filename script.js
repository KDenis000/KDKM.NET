// 1. Mobile Responsive Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. Automated Hero Header Slider (Homepage)
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000); // Transitions every 5 seconds
}

// 3. Dynamic Quick-View Popups (Modal Layout)
function openPreview(title, description, imgUrl) {
    const modal = document.getElementById('previewModal');
    if (modal) {
        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalDesc').innerText = description;
        document.getElementById('modalImg').src = imgUrl;
        modal.style.display = 'flex';
    }
}

function closePreview() {
    const modal = document.getElementById('previewModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close popup safely if user clicks background shade overlay
window.addEventListener('click', (e) => {
    const modal = document.getElementById('previewModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// 4. Live Title Filtering Engine (Movies Page Search)
const searchBox = document.getElementById('searchBox');
if (searchBox) {
    searchBox.addEventListener('keyup', (e) => {
        const queryText = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.movie-card');

        cards.forEach(card => {
            const keys = card.getAttribute('data-title').toLowerCase();
            if (keys.includes(queryText)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// 5. Standard Form Handlers
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your inquiry or download server query has been registered.');
        contactForm.reset();
    });
}
