let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlides(step) {
    showSlide(slideIndex + step);
}

window.onload = function() {
    // Récupère l'image dont on veut ajuster la marge
    const imageElement = document.querySelector('img'); // Modifier le sélecteur selon le bon élément


    const sliderElement = document.querySelector('#slider-container');
    // Récupère la largeur totale de l'écran
    const screenWidth = window.innerWidth;

    // Récupère la largeur de l'image
    const imageWidth = imageElement.offsetWidth;

    // Calcule la marge gauche et droite (centrage)
    const marginInlineValue = (screenWidth - imageWidth) / 2;

    // Applique la marge calculée à l'image
    sliderElement.style.marginInline = `${marginInlineValue}px`;
};


// Auto slide functionality (optional)
setInterval(() => {
    moveSlides(1);
}, 3000); // 1000 = 1s 