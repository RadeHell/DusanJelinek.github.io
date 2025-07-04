document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.main-nav');

    if (hamburger && navMenu) { // Kontrola, zda elementy existují
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('is-active'); // Animace hamburgeru
            navMenu.classList.toggle('is-open');     // Otevření/zavření menu
        });



        document.addEventListener('DOMContentLoaded', () => {
            // Rotující galerie
            const galleryGrid = document.querySelector('.gallery-grid');
            const galleryImages = document.querySelectorAll('.gallery-grid img');
            let index = 0;
            let total = galleryImages.length;
            let imageWidth = galleryImages[0].clientWidth + 20; // 20 = gap
        
            function slideGallery() {
                if (total * imageWidth > window.innerWidth) {
                    index = (index + 1) % total;
                    galleryGrid.style.transform = `translateX(-${index * imageWidth}px)`;
                }
            }
        
            setInterval(slideGallery, 3000); // mění obrázek každé 3 sekundy
        
            window.addEventListener('resize', () => {
                imageWidth = galleryImages[0].clientWidth + 20;
            });
        
            // Lightbox na klik
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
        
            galleryImages.forEach(img => {
                img.addEventListener('click', () => {
                    lightbox.classList.add('active');
                    lightboxImg.src = img.src;
                    lightboxImg.alt = img.alt;
                });
            });
        
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('active');
                lightboxImg.src = '';
            });
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
