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
