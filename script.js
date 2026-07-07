// script.js
document.querySelector("button").addEventListener("click", function() {
  let query = document.querySelector("input").value.toLowerCase();
  let movies = document.querySelectorAll(".movie-card");
  
  movies.forEach(card => {
    let title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
});
