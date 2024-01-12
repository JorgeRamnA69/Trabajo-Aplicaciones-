
const botonDesplegar = document.getElementById("desplegar");
const icono = botonDesplegar.querySelector("i");
const ulDesplegable = document.getElementById("desplegable");
const mapaboton = document.getElementById("mapaboton");
const mapa = document.getElementById("mapa");
const losantosb = document.getElementById("losantosb");
const losantosd = document.getElementById("losantosd");

function toggleCruz() {
    botonDesplegar.classList.toggle('cruz');
    // añadir toggle visible
  }
  


botonDesplegar.addEventListener("click", function(event) {
    event.stopPropagation();
    if (ulDesplegable.classList.contains("oculto")) {
        ulDesplegable.classList.remove("oculto");
        ulDesplegable.classList.add("visible"); 
    } else {
        ulDesplegable.classList.add("oculto");
        ulDesplegable.classList.remove("visible"); 
    }
});

// 
document.addEventListener("click", function(event) {
    if (event.target !== ulDesplegable && !ulDesplegable.contains(event.target)) {
        // si el target del evento no es ul y no contiene ul:
        ulDesplegable.classList.add("oculto");
        ulDesplegable.classList.remove("visible");
        botonDesplegar.classList.remove('cruz');
    }
});

mapaboton.addEventListener("mouseover", function() {
    event.stopPropagation();

    if (mapa.classList.contains("oculto1")) {
        mapa.classList.remove("oculto1");
        mapa.classList.add("visible1")
    }
});

mapa.addEventListener("mouseleave", function(event) {
    if (!mapaboton.contains(event.relatedTarget) && !mapa.contains(event.relatedTarget)) {
        mapa.classList.add("oculto1");
        mapa.classList.remove("visible1");
    }
});

mapaboton.addEventListener("mouseleave", function(event){
    if (!mapa.contains(event.relatedTarget) && !mapaboton.contains(event.relatedTarget)) {
        mapa.classList.remove("visible1");
        mapa.classList.add("oculto1");
    }
});

losantosb.addEventListener("mouseover", function() {
    event.stopPropagation();

    if (losantosd.classList.contains("oculto2")) {
        losantosd.classList.remove("oculto2");
        losantosd.classList.add("visible2");
    }
});

losantosd.addEventListener("mouseleave", function(event) {
    if (!losantosb.contains(event.relatedTarget) && !losantosd.contains(event.relatedTarget)) {
        losantosd.classList.add("oculto2");
        losantosd.classList.remove("visible2");
    }
});

losantosb.addEventListener("mouseleave", function(event) {
    if (!losantosd.contains(event.relatedTarget) && !losantosb.contains(event.relatedTarget)) {
        losantosd.classList.add("oculto2");
        losantosd.classList.remove("visible2");
    }
});