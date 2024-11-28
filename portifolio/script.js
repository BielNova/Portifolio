document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded Successfully!");

    const hero = document.querySelector('.hero');
    hero.classList.add('fade-in');

    window.addEventListener('scroll', () => {
        const content = document.querySelectorAll('.content, .code-snippet');
        content.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (position < screenPosition) {
                element.classList.add('visible');
            }
        });
    });
});
