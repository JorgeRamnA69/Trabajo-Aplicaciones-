const inicioboton = document.getElementById("inicioboton");
const iniciocasino = document.getElementById("iniciocasino");
const sociosboton = document.getElementById("sociosboton");
const socioscasino = document.getElementById("socioscasino");
const aticoboton = document.getElementById("aticoboton");
const aticocasino = document.getElementById("aticocasino");
const casinoboton = document.getElementById("casinoboton");
const casinocasino = document.getElementById("casinocasino");

const inicioli = document.getElementById("inicioli");
const sociosli = document.getElementById("sociosli");
const aticoli = document.getElementById("aticoli");
const casinoli = document.getElementById("casinoli");

const iniciodiv = document.getElementById("iniciodiv");
const sociosdiv = document.getElementById("sociosdiv");
const aticodiv = document.getElementById("aticodiv");
const casinodiv = document.getElementById("casinodiv");

const video = document.getElementById("video");

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');




function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.
    display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);

// Agregar eventos para las flechas de navegación
document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);

function resetearListas() {
    iniciocasino.classList.remove("iniciovisible");
    socioscasino.classList.remove("sociosvisible");
    aticocasino.classList.remove("aticovisible");
    casinocasino.classList.remove("casinovisible");
    inicioli.classList.remove("listacasinoactive");
    sociosli.classList.remove("listacasinoactive");
    aticoli.classList.remove("listacasinoactive");
    casinoli.classList.remove("listacasinoactive");
    iniciodiv.classList.remove("divtopactive");
    sociosdiv.classList.remove("divtopactive");
    aticodiv.classList.remove("divtopactive");
    casinodiv.classList.remove("divtopactive");
    video.classList.remove("oculto4");

    iniciocasino.classList.add("oculto4");
    socioscasino.classList.add("oculto4");
    aticocasino.classList.add("oculto4");
    casinocasino.classList.add("oculto4");
    inicioli.classList.add("listacasino");
    sociosli.classList.add("listacasino");
    aticoli.classList.add("listacasino");
    casinoli.classList.add("listacasino");
    iniciodiv.classList.add("divtop");
    sociosdiv.classList.add("divtop");
    aticodiv.classList.add("divtop");
    casinodiv.classList.add("divtop");
    video.classList.add("video");
}

inicioboton.addEventListener("click", function() {
   
    if (iniciocasino.classList.contains("oculto4")) {
        resetearListas(); // Agrega paréntesis aquí
        iniciocasino.classList.remove("oculto4");
        inicioli.classList.remove("listacasino");
        iniciodiv.classList.remove("divtop");
        iniciocasino.classList.add("iniciovisible");
        inicioli.classList.add("listacasinoactive");
        iniciodiv.classList.add("divtopactive");
        video.classList.remove("video");
        video.classList.add("oculto4");
    } else {
        resetearListas(); // Agrega paréntesis aquí
    }
});
sociosboton.addEventListener("click", function() {

    if (socioscasino.classList.contains("oculto4")) {
        resetearListas(); // Agrega paréntesis aquí
        socioscasino.classList.remove("oculto4");
        sociosli.classList.remove("listacasino");
        sociosdiv.classList.remove("divtop");
        socioscasino.classList.add("sociosvisible");
        sociosli.classList.add("listacasinoactive");
        sociosdiv.classList.add("divtopactive");
        video.classList.remove("video");
        video.classList.add("oculto4");
    } else {
        resetearListas(); // Agrega paréntesis aquí
    }
});
aticoboton.addEventListener("click", function() {

    if (aticocasino.classList.contains("oculto4")) {
        resetearListas(); // Agrega paréntesis aquí
        aticocasino.classList.remove("oculto4");
        aticoli.classList.remove("listacasino");
        aticodiv.classList.remove("divtop");
        aticocasino.classList.add("aticovisible");
        aticoli.classList.add("listacasinoactive");
        aticodiv.classList.add("divtopactive");
        video.classList.remove("video");
        video.classList.add("oculto4");
    } else {
        resetearListas(); // Agrega paréntesis aquí
    }
});
casinoboton.addEventListener("click", function() {

    if (casinocasino.classList.contains("oculto4")) {
        resetearListas(); // Agrega paréntesis aquí
        casinocasino.classList.remove("oculto4");
        casinoli.classList.remove("listacasino");
        casinodiv.classList.remove("divtop");
        casinocasino.classList.add("casinovisible");
        casinoli.classList.add("listacasinoactive");
        casinodiv.classList.add("divtopactive");
        video.classList.remove("video");
        video.classList.add("oculto4");
    } else {
        resetearListas(); // Agrega paréntesis aquí
    }
});