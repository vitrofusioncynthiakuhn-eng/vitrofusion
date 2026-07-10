/* ================= MOSTRAR Y OCULTAR CATÁLOGO ================
========= (controla el cambio entre Inicio y Catálogo ==========*/
const botonCatalogo = document.querySelector("[data-abrir-catalogo]");          /*Guarda el botón catálogo*/
const botonVolver = document.querySelector("[data-cerrar-catalogo]");         /*Guarda el botón volver*/

const encabezado = document.querySelector(".encabezado");                    /*Guarda todo el hero*/
const presentacion = document.querySelector(".presentacion");            /*Guarda la parte que dice: trabajo personalizado.....*/
const catalogo = document.querySelector("#catalogo");                   //Guarda toda la sección del catálogo*/


/* ===================== ABRIR EL CATÁLOGO ================
============ (muestra el catálogo y oculta el inicio) =========*/
botonCatalogo.addEventListener("click", function () {           /*Quiere decir "cuando alguien haga clic en el botón catálogo..."*/

    encabezado.classList.add("oculto");

    presentacion.classList.add("oculto");         /* Hace desaparecer la presentación*/

    catalogo.classList.remove("oculto");

});

/* ======================= VOLVER AL INICIO (oculta el catálogo y muestra el inicio)*/
botonVolver.addEventListener("click", function () {

    catalogo.classList.add("oculto");

    encabezado.classList.remove("oculto");

    presentacion.classList.remove("oculto");

});