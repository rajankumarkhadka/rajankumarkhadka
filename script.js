// Set dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Create movable stars background
function createStars() {
    const starsContainer = document.createElement('div');
    starsContainer.id = 'stars-container';
    document.body.insertBefore(starsContainer, document.body.firstChild);
    
    const starCount = 100; // Number of movable stars
    const animationTypes = ['float', 'drift-left', 'drift-right', 'orbit'];
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        // Random animation delay
        const delay = Math.random() * 5;
        
        // Random size variation
        const size = 1.5 + Math.random() * 2.5;
        
        // Random animation type (only movement, no twinkling)
        const animationType = animationTypes[Math.floor(Math.random() * animationTypes.length)];
        
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.animationDelay = delay + 's';
        
        // Add animation class for movement
        star.classList.add(animationType);
        
        starsContainer.appendChild(star);
    }
}

// Initialize stars when page is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createStars);
} else {
    createStars();
}

document.getElementById('mobile-menu-button').onclick = function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Hide mobile menu after clicking on "Home"
document.getElementById('mobile-menu').onclick = function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.add('hidden');
}
function sendMaill(){
    var parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value

    }
    emailjs.send("Dhanmaya", "Rajeshkhadka",parms).then(function (res) {
alert("email sent !" + res.status);

})

 }


