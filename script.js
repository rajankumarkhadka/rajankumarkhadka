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

// Scroll-based star animation speed
let lastScrollY = 0;
let scrollVelocity = 0;
let scrollTimeout;
let currentSpeedMultiplier = 1;
let decelerationInterval;

function updateStarSpeed() {
    const starsContainer = document.getElementById('stars-container');
    if (starsContainer) {
        const stars = starsContainer.querySelectorAll('.star');
        
        stars.forEach(star => {
            // Get current animation type
            let animationName = '';
            if (star.classList.contains('float')) animationName = 'float';
            else if (star.classList.contains('drift-left')) animationName = 'drift-left';
            else if (star.classList.contains('drift-right')) animationName = 'drift-right';
            else if (star.classList.contains('orbit')) animationName = 'orbit';
            
            // Apply custom animation duration based on current speed multiplier
            if (animationName) {
                let baseDuration = 6;
                if (animationName === 'drift-left') baseDuration = 10;
                else if (animationName === 'drift-right') baseDuration = 12;
                else if (animationName === 'orbit') baseDuration = 15;
                
                const newDuration = baseDuration / currentSpeedMultiplier;
                star.style.animationDuration = newDuration + 's';
            }
        });
    }
}

window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;
    scrollVelocity = Math.abs(currentScrollY - lastScrollY);
    lastScrollY = currentScrollY;
    
    // Clear previous deceleration
    if (decelerationInterval) {
        clearInterval(decelerationInterval);
    }
    clearTimeout(scrollTimeout);
    
    // Calculate animation speed multiplier with more sensitivity (matches scroll speed better)
    currentSpeedMultiplier = 1 + (Math.min(scrollVelocity, 50) / 50) * 3;
    updateStarSpeed();
    
    // Smooth deceleration after scrolling stops
    scrollTimeout = setTimeout(function() {
        decelerationInterval = setInterval(function() {
            // Smoothly decrease speed back to 1
            currentSpeedMultiplier = Math.max(1, currentSpeedMultiplier - 0.08);
            updateStarSpeed();
            
            // Stop when reached normal speed
            if (currentSpeedMultiplier <= 1) {
                currentSpeedMultiplier = 1;
                clearInterval(decelerationInterval);
                updateStarSpeed();
            }
        }, 20); // Update every 20ms for smoother response
    }, 50);
});

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


