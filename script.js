// === VIDEO PLAYER LOGIC ===
function playMovie(movieUrl) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('internalPlayer');
    const source = video.querySelector('source');
    
    // Set the video source
    source.src = movieUrl;
    video.load(); // Load the new video
    video.play(); // Autoplay
    
    modal.style.display = 'flex';
}

function closeMovie() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('internalPlayer');
    
    video.pause();
    video.currentTime = 0; // Reset video
    modal.style.display = 'none';
}

// Close modal if user clicks outside the video
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeMovie();
    }
}


// === AUTH & DASHBOARD LOGIC ===
let isLogin = true;

function toggleAuth() {
    isLogin = !isLogin;
    const formTitle = document.getElementById('formTitle');
    const submitBtn = document.getElementById('submitBtn');
    const toggleText = document.getElementById('toggleText');
    const nameField = document.getElementById('nameField');

    if (isLogin) {
        formTitle.innerText = "Sign In";
        submitBtn.innerText = "Sign In";
        toggleText.innerText = "Don't have an account? Sign Up";
        nameField.style.display = "none";
    } else {
        formTitle.innerText = "Create Account";
        submitBtn.innerText = "Sign Up";
        toggleText.innerText = "Already have an account? Sign In";
        nameField.style.display = "block";
    }
}

function handleAuth(event) {
    event.preventDefault();
    // Simulate account creation / login
    document.getElementById('authForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

function logout() {
    // Simulate logging out
    document.getElementById('authForm').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    isLogin = true;
    toggleAuth(); // Reset to login screen
}
