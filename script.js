
function onLogoClick() {
    window.location.href = "https://www.mixcloud.com/live/workshop_/";
    // animateLogoAndShowVideo();
}

function animateLogoAndShowVideo() {
    var logoHolder = document.getElementById("logo-holder");
    var videoContainer = document.getElementById("videoContainer");

    // Animate logo to the top
    logoHolder.style.top = "10px";
    logoHolder.style.fontSize = "50px";
    logoHolder.style.transform = "translateX(-50%)";

    // After the logo animation, fade in the video
    setTimeout(function() {
        videoContainer.style.top = "0";
        videoContainer.style.opacity = "1";
    }, 500); // 500ms for logo animation to complete
}


document.addEventListener('DOMContentLoaded', () => {
    const worm = document.createElement('div');
    worm.id = 'worm';
    document.body.appendChild(worm);

    let positions = []; // Store cursor positions
    const maxPositions = 10; // Max number of positions to store

    let idleTimer;
    const idleTime = 3000; // Time in ms to consider cursor idle

    document.addEventListener('mousemove', (e) => {
        // Reset idle timer on mouse move
        clearTimeout(idleTimer);
        worm.style.opacity = '1';

        // Update positions
        positions.push({x: e.pageX, y: e.pageY});
        if (positions.length > maxPositions) {
            positions.shift();
        }

        // Update worm position
        worm.style.left = positions[0].x + 'px';
        worm.style.top = positions[0].y + 'px';

        idleTimer = setTimeout(moveWormRandomly, idleTime);
    });

    document.getElementById('logo-holder').addEventListener('click', () => {
        worm.style.opacity = '0';
    });

    function moveWormRandomly() {
        // Random movement logic
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        worm.style.left = randomX + 'px';
        worm.style.top = randomY + 'px';
    }
});
