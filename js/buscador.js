const busc = document.querySelector(".linea img");
const buscador = document.querySelector(".buscador");
const lupa = document.querySelector(".lupa");

busc.addEventListener("click", function (){
    
    buscador.classList.toggle("buscadorCerrado");
    buscador.classList.toggle("buscadorAbierto");
})

lupa.addEventListener("click", function (){
    
    buscador.classList.toggle("buscadorCerrado");
    buscador.classList.toggle("buscadorAbierto");
})
