// THE SOVEREIGN PULSE - ENGINE LOGIC

document.addEventListener('DOMContentLoaded', () => {
    console.log("KNOCKSSTUDiOS Engine: Active");

    // Welcome Pulse effect on entry
    const body = document.querySelector('body');
    body.style.opacity = '0';
    body.style.transition = 'opacity 1.5s ease-in';
    
    setTimeout(() => {
        body.style.opacity = '1';
    }, 100);

    // Interactive power for buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
            btn.style.filter = 'brightness(1.2)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'scale(1.05)';
        });
    });
});

