// ======================================
// KDK M.NET JavaScript
// ======================================

// Welcome Message
console.log("Welcome to KDK M.NET");

// ======================================
// Search Function
// ======================================

const searchInput = document.querySelector(".search input");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let movies = document.querySelectorAll(".movie, .movie-card");

        movies.forEach(movie => {

            let title = movie.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {

                movie.style.display = "block";

            } else {

                movie.style.display = "none";

            }

        });

    });
}

// ======================================
// Smooth Scroll
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        ?.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ======================================
// Movie Card Hover Effect
// ======================================

const cards = document.querySelectorAll(".movie, .movie-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "scale(1)";

    });

});

// ======================================
// Login Form Validation
// ======================================

const loginForm = document.querySelector("form");

if (loginForm && document.querySelector(".login-page")) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email =
            this.querySelector('input[type="email"]').value;

        const password =
            this.querySelector('input[type="password"]').value;

        if (email === "" || password === "") {

            alert("Please fill in all fields.");

            return;

        }

        alert("Login Successful! (Demo Only)");

    });

}

// ======================================
// Contact Form
// ======================================

const contactForm = document.querySelector(".contact-page form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you for contacting KDK M.NET.");

        contactForm.reset();

    });
    // script.js
document.querySelector("button").addEventListener("click", function() {
  let query = document.querySelector("input").value.toLowerCase();
  let movies = document.querySelectorAll(".movie-card");
  
  movies.forEach(card => {
    let title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});


}

// ======================================
// Scroll To Top Button
// ======================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "gold";
topBtn.style.color = "#000";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ======================================
// Current Year in Footer
// ======================================

const footer = document.querySelector("footer p:last-child");

if (footer) {

    footer.innerHTML =
    `© ${new Date().getFullYear()} KDK M.NET. All Rights Reserved.`;

}

// ======================================
// End
// ======================================
