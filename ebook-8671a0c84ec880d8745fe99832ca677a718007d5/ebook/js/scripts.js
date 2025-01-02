document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-button');
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const errorMessage = document.getElementById('error-message');
    const iframe = document.getElementById('ebook');
    const bgMusic = document.getElementById('bg-music');
    const scrollTutorial = document.getElementById('scroll-tutorial');
    const smokeContainer = document.querySelector('.smoke-container');

    // Ensure elements exist
    if (!enterButton || !introScreen || !mainContent || !iframe) {
        console.error("Critical elements are missing from the DOM.");
        return;
    }

    // Event Listener for Enter Button
    enterButton.addEventListener('click', () => {
        // Redirect to ebook.html (if opening new page)
        window.location.href = 'ebook/ebook.html';

        // Uncomment below for iframe-based navigation:
        // introScreen.style.display = 'none';
        // mainContent.style.display = 'flex';
        // bgMusic.play().catch((error) => {
        //     console.error("Failed to play background music:", error);
        // });
        // loadEbook();
        // createSmokeEffect();
        // showScrollTutorial();
    });

    // Load the eBook
    function loadEbook() {
        iframe.style.display = 'block';
        iframe.addEventListener('load', () => {
            console.log("eBook loaded successfully.");
        });
    }

    // Create Smoke Effect
    function createSmokeEffect() {
        // Clear previous smoke
        smokeContainer.innerHTML = '';
        smokeContainer.style.display = 'block';

        // Create new smoke elements
        ['smoke1', 'smoke2', 'smoke3'].forEach((className) => {
            const smoke = document.createElement('div');
            smoke.classList.add('smoke', className);
            smokeContainer.appendChild(smoke);
        });

        // Hide smoke after some time
        setTimeout(() => {
            smokeContainer.style.display = 'none';
        }, 5000);
    }

    // Scroll Tutorial
    function showScrollTutorial() {
        scrollTutorial.style.display = 'flex';
        setTimeout(() => {
            scrollTutorial.style.display = 'none';
        }, 10000);
    }

    // Error Message Toggle
    function alternateErrorMessage() {
        const errorText = document.getElementById('error-text');
        let toggle = true;
        setInterval(() => {
            errorText.textContent = toggle ? "Help us!" : "Error 404";
            toggle = !toggle;
        }, 1000);
    }

    // Handle Mobile Viewport Adjustments
    (function adjustViewport() {
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            viewportMeta.setAttribute('content', 'width=1200');
        }
    })();
});
