let root = document.documentElement;
const requestAnimationFrame = window.requestAnimationFrame;

function run() {
    let h = (40 + Math.cos(performance.now() / 3000) * 40) + '%'

    root.style.setProperty('--rightPillarHeight', h);
    requestAnimationFrame(run);
}

run();



