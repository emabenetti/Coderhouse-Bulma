// Script en vanilla JS para el hamburger menu

document.addEventListener('DOMContentLoaded', () => {

    // Busca todos los elementos "navbar-burger" del documento y los guarda en una variable
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Si la variable es mayor que cero (osea que encontró un navburguer)
    if ($navbarBurgers.length > 0) {

        // Le agrega un evento de click a cada navburguer
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Busca el atributo "data-target" (que en este caso es el resto del topnav)
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Activa la clase "is-active" en el "navbar-burger" y en el "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
});

// declarar variable para el índice del carousel
var slideIndex = 1;
showSlides(slideIndex);

// Controles de atras/siguiente
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Cambiar imagen con la miniatura
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// funcion principal carousel
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}