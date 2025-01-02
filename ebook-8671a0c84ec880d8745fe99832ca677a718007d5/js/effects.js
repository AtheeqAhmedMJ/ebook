document.addEventListener('DOMContentLoaded', () => {
    showBats();
});

function showBats() {
    for (let i = 0; i < 30; i++) {
        const bat = document.createElement('div');
        bat.classList.add('bat');
        const startPosition = Math.random() > 0.5 ? 'left' : 'right';
        const randomY = `${Math.random() * 100}vh`;
        bat.style.top = randomY;
        if (startPosition === 'left') {
            bat.style.left = `-${Math.random() * 10}vw`;
        } else {
            bat.style.right = `-${Math.random() * 10}vw`;
        }
        bat.style.animationDuration = `${Math.random() * 5 + 5}s`;
        bat.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(bat);
    }
}

function createSmoke() {
    const smokeContainer = document.querySelector('.smoke-container');
    smokeContainer.style.display = 'block';
    for (let i = 0; i < 10; i++) {
        const smoke = document.createElement('div');
        smoke.classList.add('smoke', `smoke${i % 3 + 1}`);
        smoke.style.left = `${Math.random() * 100}vw`;
        smoke.style.top = `${Math.random() * 100}vh`;
        smokeContainer.appendChild(smoke);
    }
}
