const flechaIzq = document.querySelector(".flechaIzq");
const flechaDer = document.querySelector(".flechaDer");
const segundoImagenes = document.querySelector(".segundoImagenes");



flechaIzq.addEventListener("click", function(){
    segundoImagenes.classList.toggle("posicion1");
})

flechaDer.addEventListener("click", function(){
    segundoImagenes.classList.toggle("posicion1");
})