const sol = document.querySelector(".sol");
const luna =document.querySelector(".luna");
const body = document.querySelector("body");
const modoOscuro = document.querySelector(".modoOscuro");
const nav = document.querySelector(".nav");

modoOscuro.addEventListener("click", function (){
    console.log("hola")
    nav.classList.toggle("navDark");
    sol.classList.toggle("solOcultado");
    sol.classList.toggle("solAbierto");
    luna.classList.toggle("lunaAbierto");
    body.classList.toggle("bodyDark");
})
