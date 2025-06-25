document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.main-nav');

    if (hamburger && navMenu) { // Kontrola, zda elementy existují
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('is-active'); // Animace hamburgeru
            navMenu.classList.toggle('is-open');     // Otevření/zavření menu
        });

        // Zavření menu po kliknutí na odkaz (pro plynulé scrollování)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('is-active');
                navMenu.classList.remove('is-open');
            });
        });
    }
});