/* ================= MOSTRAR Y OCULTAR CATÁLOGO ================
========= (controla el cambio entre Inicio y Catálogo ==========*/
const botonCatalogo = document.querySelector("[data-abrir-catalogo]");          /*Guarda el botón catálogo*/
const botonVolver = document.querySelector("[data-cerrar-catalogo]");         /*Guarda el botón volver*/

const encabezado = document.querySelector(".encabezado");                    /*Guarda todo el hero*/
const presentacion = document.querySelector(".presentacion");            /*Guarda la parte que dice: trabajo personalizado.....*/
const catalogo = document.querySelector("#catalogo");   

/* ================= ELEMENTOS DEL MODAL ================= */
const modalProducto = document.querySelector("#modal-producto");

const botonCerrarModal = document.querySelector(".cerrar-modal");

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

});

/* ======================= VOLVER AL INICIO (oculta el catálogo y muestra el inicio)*/
botonVolver.addEventListener("click", function () {

    catalogo.classList.add("oculto");

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