document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-button');
    const nextButton = document.getElementById('next-button');
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const errorMessage = document.getElementById('error-message');
    const iframe = document.getElementById('ebook');
    const bgMusic = document.getElementById('bg-music');
    const scrollTutorial = document.getElementById('scroll-tutorial');

    enterButton.addEventListener('click', () => {
        introScreen.style.display = 'none';
        mainContent.style.display = 'flex';
        bgMusic.play();
        createSmoke();  // Start the smoke animation when the main content is shown
        showScrollTutorial(); // Show the scroll tutorial
    });

    iframe.addEventListener('load', () => {        nextButton.style.display = 'block';
    });

    nextButton.addEventListener('click', () => {
        mainContent.style.display = 'none';
        errorMessage.style.display = 'block';
        alternateErrorMessage();
    });

    function alternateErrorMessage() {
        const errorText = document.getElementById('error-text');
        let isError = true;
        setInterval(() => {
            errorText.textContent = isError ? "Help us!" : "Error 404";
            isError = !isError;
        }, 1000);
    }

    function showScrollTutorial() {
        scrollTutorial.style.display = 'flex';
        setTimeout(() => {
            scrollTutorial.style.display = 'none';
        }, 10000);
    }

    function createSmoke() {
        const smokeContainer = document.querySelector('.smoke-container');
        const smoke1 = document.createElement('div');
        const smoke2 = document.createElement('div');
        const smoke3 = document.createElement('div');

        smoke1.classList.add('smoke', 'smoke1');
        smoke2.classList.add('smoke', 'smoke2');
        smoke3.classList.add('smoke', 'smoke3');

        smokeContainer.appendChild(smoke1);
        smokeContainer.appendChild(smoke2);
        smokeContainer.appendChild(smoke3);

        setTimeout(() => {
            smokeContainer.style.display = 'block';
        }, 1000);
    }
});
(function() {
    var viewportMeta = document.querySelector('meta[name="viewport"]');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Adjust the viewport for mobile devices to mimic desktop
        viewportMeta.setAttribute('content', 'width=1200');
    }
})();
