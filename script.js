/* =========================================================
   ELEMENTOS PRINCIPALES
========================================================= */

const botonCatalogo = document.querySelector("[data-abrir-catalogo]");
const botonVolver = document.querySelector("[data-cerrar-catalogo]");

const botonContacto = document.querySelector("[data-abrir-contacto]");
const botonVolverContacto = document.querySelector("[data-cerrar-contacto]");

const encabezado = document.querySelector(".encabezado");
const presentacion = document.querySelector(".presentacion");

const catalogo = document.querySelector("#catalogo");
const contacto = document.querySelector("#contacto");


/* =========================================================
   MODAL
========================================================= */

const modalProducto = document.querySelector("#modal-producto");

const botonCerrarModal = document.querySelector(".modal-cerrar");

const imagenModal = document.querySelector("#modal-imagen");
const etiquetaModal = document.querySelector(".modal-etiqueta");
const tituloModal = document.querySelector("#modal-titulo");
const descripcionModal = document.querySelector("#modal-descripcion");
const precioModal = document.querySelector("#modal-precio");

const botonConsultaModal =
    document.querySelector("#boton-consulta-modal");


/* Todas las tarjetas */

const tarjetas =
    document.querySelectorAll(".tarjeta-producto");


/* =========================================================
   ABRIR CATÁLOGO
========================================================= */

if(botonCatalogo){

    botonCatalogo.addEventListener("click", function(){

        encabezado.classList.add("oculto");
        presentacion.classList.add("oculto");

        contacto.classList.add("oculto");

        catalogo.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   VOLVER AL INICIO
========================================================= */

if(botonVolver){

    botonVolver.addEventListener("click", function(){

        catalogo.classList.add("oculto");

        encabezado.classList.remove("oculto");
        presentacion.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   ABRIR CONTACTO
========================================================= */

if(botonContacto){

    botonContacto.addEventListener("click", function(evento){

        evento.preventDefault();

        encabezado.classList.add("oculto");
        presentacion.classList.add("oculto");
        catalogo.classList.add("oculto");

        contacto.classList.remove("oculto");

        setTimeout(function(){
            contacto.classList.add("mostrar");
        }, 20);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   VOLVER DESDE CONTACTO
========================================================= */

if(botonVolverContacto){

    botonVolverContacto.addEventListener("click", function(){

        contacto.classList.remove("mostrar");
        contacto.classList.add("oculto");

        encabezado.classList.remove("oculto");
        presentacion.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   ABRIR PRODUCTO / MODAL
========================================================= */

catalogo.addEventListener("click", function(evento){

    const tarjeta = evento.target.closest(".tarjeta-producto");

    // Si no tocamos una tarjeta, no hacemos nada
    if(!tarjeta){
        return;
    }


    const imagen = tarjeta.querySelector("img");
    const etiqueta = tarjeta.querySelector(".etiqueta");
    const titulo = tarjeta.querySelector("h4");
    const descripcion = tarjeta.querySelector("p:not(.etiqueta)");
    const consulta = tarjeta.querySelector("strong");


    /* Pasar los datos al modal */

    if(imagen && imagenModal){
        imagenModal.src = imagen.src;
        imagenModal.alt = imagen.alt;
    }

    if(etiqueta && etiquetaModal){
        etiquetaModal.textContent =
            etiqueta.textContent.trim();
    }

    if(titulo && tituloModal){
        tituloModal.textContent =
            titulo.textContent.trim();
    }

    if(descripcion && descripcionModal){
        descripcionModal.textContent =
            descripcion.textContent.trim();
    }

    if(consulta && precioModal){
        precioModal.textContent =
            consulta.textContent.trim();
    }


    /* WhatsApp */

    if(botonConsultaModal && titulo){

        const numeroWhatsApp = "5493773436905";

        const mensaje =
            `Hola Cynthia 😊 Vi la pieza "${titulo.textContent.trim()}" en tu catálogo y quería hacer una consulta.`;

        botonConsultaModal.href =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    }


    /* Mostrar modal */

    if(modalProducto){
        modalProducto.classList.remove("oculto");
    }

});

/* =========================================================
   CERRAR MODAL CON X
========================================================= */

if(botonCerrarModal){

    botonCerrarModal.addEventListener("click", function(){

        modalProducto.classList.add("oculto");

    });

}


/* =========================================================
   CERRAR TOCANDO AFUERA
========================================================= */

modalProducto.addEventListener("click", function(evento){

    if(evento.target === modalProducto){

        modalProducto.classList.add("oculto");

    }

});


/* =========================================================
   CERRAR CON ESCAPE
========================================================= */

document.addEventListener("keydown", function(evento){

    if(evento.key === "Escape"){

        modalProducto.classList.add("oculto");

    }

});
/* =================== SLIDER DEL ENCABEZADO =================== */

const slides = document.querySelectorAll(".slide");     /*Busca todas las imág. que tienen la clase .slide (las imagenes en el html), las guarda todas juntas en una lista*/

let indiceSlide = 0;          /*Es una variable, guarda cual imág. está mostrando (imagen 1, ....)*/

setInterval(function () {           /*Muy usada, "repetí este código cada cierto tiempo", el tiempo esta al final, en este caso es 400(4seg)*/

    slides[indiceSlide].classList.remove("activo");             

    indiceSlide++;

    if (indiceSlide >= slides.length) {             /*Es tipo, llegaste al final de todas las imág.? bueno, volve al principio*/

        indiceSlide = 0;                      /*Ahí vuelve a empezar*/

    }

    slides[indiceSlide].classList.add("activo");

}, 4000);




