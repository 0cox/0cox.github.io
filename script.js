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


document.addEventListener('DOMContentLoaded', (event) => {
    // Create worm element
    const worm = document.createElement('div');
    worm.id = 'worm';
    document.body.appendChild(worm);

    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        // Update worm position
        worm.style.left = e.pageX + 'px';
        worm.style.top = e.pageY + 'px';
    });

    // Click event on image
    document.getElementById('logo-holder').addEventListener('click', () => {
        worm.style.opacity = '0';
    });
});
