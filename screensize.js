
const logo = document.getElementById('logo');

function adjustImageSize() {
    if (window.innerWidth <= 450) {
        logo.src = "assets/logo50.webp"
    } else {
        logo.src = "assets/logo100.webp"
    }
}

// Call the function initially
adjustImageSize();

// Add an event listener for the window resize event
window.addEventListener('resize', adjustImageSize);
