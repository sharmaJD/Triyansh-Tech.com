document.addEventListener("DOMContentLoaded", () => {
    const home = document.querySelector('#home');
    if (home) {
        const slides = home.querySelector('.slides');
        const slideCount = home.querySelectorAll('.slide').length;
        let currentIndex = 0;

        function showNextSlide() {
            currentIndex++;
            if (currentIndex >= slideCount) {
                currentIndex = 0;
            }
            const newTransform = `translateX(-${currentIndex * 100}%)`;
            slides.style.transform = newTransform;
        }

        setInterval(showNextSlide, 3000);
    }
});
