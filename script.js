/* ================= MOSTRAR Y OCULTAR CATÁLOGO ================
========= (controla el cambio entre Inicio y Catálogo ==========*/
const botonCatalogo = document.querySelector("[data-abrir-catalogo]");          /*Guarda el botón catálogo*/
const botonVolver = document.querySelector("[data-cerrar-catalogo]");         /*Guarda el botón volver*/

const encabezado = document.querySelector(".encabezado");                    /*Guarda todo el hero*/
const presentacion = document.querySelector(".presentacion");            /*Guarda la parte que dice: trabajo personalizado.....*/
const catalogo = document.querySelector("#catalogo");   
const botonContacto = document.querySelector("[data-abrir-contacto]");
const botonVolverContacto = document.querySelector("[data-cerrar-contacto]");
const contacto = document.querySelector("#contacto");

/* ================= ELEMENTOS DEL MODAL ================= */
const modalProducto = document.querySelector("#modal-producto");

const botonCerrarModal = document.querySelector(".modal-cerrar");

const imagenModal = document.querySelector("#modal-imagen");

const etiquetaModal = document.querySelector(".modal-etiqueta");

const tituloModal = document.querySelector("#modal-titulo");

const descripcionModal = document.querySelector("#modal-descripcion");

const precioModal = document.querySelector("#modal-precio");


/* Todas las tarjetas del catálogo */
const tarjetas = document.querySelectorAll(".tarjeta-producto");//Guarda toda la sección del catálogo*/


/* ===================== ABRIR EL CATÁLOGO ================
============ (muestra el catálogo y oculta el inicio) =========*/
botonCatalogo.addEventListener("click", function () {

    encabezado.classList.add("oculto");

    presentacion.classList.add("oculto");

    catalogo.classList.remove("oculto");

    tarjetas.forEach(function(tarjeta, indice){

        tarjeta.classList.remove("aparecer");

        setTimeout(function(){

            tarjeta.classList.add("aparecer");

        }, indice * 120);

    });

});

/* ======================= VOLVER AL INICIO (oculta el catálogo y muestra el inicio)*/
botonVolver.addEventListener("click", function () {

    catalogo.classList.add("oculto");

    encabezado.classList.remove("oculto");

    presentacion.classList.remove("oculto");

});

/* ===================== ABRIR CONTACTO ===================== */
botonContacto.addEventListener("click", function () {

    encabezado.classList.add("oculto");

    presentacion.classList.add("oculto");

    catalogo.classList.add("oculto");

    contacto.classList.remove("oculto");

    setTimeout(function(){

        contacto.classList.add("mostrar");

    },20);

});

/* ===================== VOLVER AL INICIO DESDE CONTACTO ===================== */
botonVolverContacto.addEventListener("click", function () {

    contacto.classList.remove("mostrar");

    contacto.classList.add("oculto");

    encabezado.classList.remove("oculto");

    presentacion.classList.remove("oculto");

});

/* ================= ABRIR MODAL DEL PRODUCTO ================= */
tarjetas.forEach(function(tarjeta){

    tarjeta.addEventListener("click", function(){

        // Obtener información de la tarjeta
        const imagen = tarjeta.querySelector("img");
        const etiqueta = tarjeta.querySelector(".etiqueta");
        const titulo = tarjeta.querySelector("h4");
        const descripcion = tarjeta.querySelector("p:not(.etiqueta)");
        const precio = tarjeta.querySelector("strong");

        // Copiar la información al modal
        imagenModal.src = imagen.src;
        imagenModal.alt = imagen.alt;

        etiquetaModal.textContent = etiqueta.textContent;

        tituloModal.textContent = titulo.textContent;

        descripcionModal.textContent = descripcion.textContent;

        precioModal.textContent = precio.textContent;

        // Mostrar el modal
        modalProducto.classList.remove("oculto");

    });

});

/* ================= CERRAR MODAL ================= */
botonCerrarModal.addEventListener("click", function(){

    modalProducto.classList.add("oculto");

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




