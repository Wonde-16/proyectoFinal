const botonV = document.querySelector(".contenidoSeccionImagenes .verMas");
const botonO = document.querySelector(".contenidoSeccionImagenes .noVer");
var imagenes =document.querySelectorAll(".ocu");

botonV.addEventListener("click", function(){

    imagenes.forEach(imagen => {
   
        imagen.classList.toggle("ocultar");
    }) 

    botonV.classList.toggle("ocultar");
    botonO.classList.toggle("ocultar");
})

botonO.addEventListener("click", function(){

    imagenes.forEach(imagen => {
   
        imagen.classList.toggle("ocultar");
    }) 

    botonV.classList.toggle("ocultar");
    botonO.classList.toggle("ocultar");
})