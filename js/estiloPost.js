const overlay1 = document.querySelector(".overlayPost1");


const overlay2 = document.querySelector(".overlayPost2");
const overlay3 = document.querySelector(".overlayPost3");

const boton1 = document.querySelector(".tar1");
const boton2 = document.querySelector(".tar2");
const boton3 = document.querySelector(".tar3");

boton1.addEventListener("click", function(){
    overlay1.classList.toggle("overlayPostAbierto");
})

boton2.addEventListener("click", function(){
    overlay2.classList.toggle("overlayPostAbierto");
})

boton3.addEventListener("click", function(){
    overlay3.classList.toggle("overlayPostAbierto");
})



const cierre1 = document.querySelector(".c1");
const cierre2 = document.querySelector(".c2");
const cierre3 = document.querySelector(".c3");

cierre1.addEventListener("click", function(){
    
    overlay1.classList.toggle("overlayPostAbierto");
})


cierre2.addEventListener("click", function(){
    
    overlay2.classList.toggle("overlayPostAbierto");
})



cierre3.addEventListener("click", function(){
    
    overlay3.classList.toggle("overlayPostAbierto");
})