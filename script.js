const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");

function onLogoClick() {
    window.location.href = "https://www.mixcloud.com/live/workshop_/";
    // animateLogoAndShowVideo();
}


const wormPoints = [];
const mousePos = { x: 0, y: 0 };
const MAX_POINTS = 20;

function animateWorm() {
    console.log("animateWorm call");
    requestAnimationFrame(animateWorm);
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    // Update worm points

    // Draw worm
    for (let i = 0; i < wormPoints.length; i++) {
        ctx.beginPath();
        ctx.moveTo(wormPoints[i].x, wormPoints[i].y);
        ctx.arc(wormPoints[i].x, wormPoints[i].y, 1 + wormPoints[i].t * 200, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 240, 224, ${1 / (1 + wormPoints[i].t * 10)})`
        ctx.fill();
        wormPoints[i].t += 0.02;
    }
}
animateWorm();

cvs.width = cvs.offsetWidth;
cvs.height = cvs.offsetHeight;

document.addEventListener('mousemove', (e) => {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
    wormPoints.push({ x: mousePos.x, y: mousePos.y, t: 0 });
    if (wormPoints.length > MAX_POINTS) {
        wormPoints.shift();
    }
});
