let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
}

showSlides();

// Botones de navegación
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

prevButton.addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    showSlides();
});

nextButton.addEventListener("click", () => {
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    showSlides();
});
