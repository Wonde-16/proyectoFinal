var cajas =document.querySelectorAll(".tarjeta");
var todas = document.querySelector(".todas");
var castores = document.querySelector(".castores");
var manada = document.querySelector(".manada");
var scout = document.querySelector(".scout");
var unidad = document.querySelector(".unidad");
var rover = document.querySelector(".rover");




todas.addEventListener("click", function(){

    cajas.forEach(caja => {
        caja.style.display="inline-flex"
    }) 
})

castores.addEventListener("click", function(){

    cajas.forEach(caja => {
   
        if(caja.getAttribute("data-filter") == "castores"){
            caja.style.display="inline-flex"
        }
        else{
            caja.style.display="none"
        }
    }) 
})

manada.addEventListener("click", function(){

    cajas.forEach(caja => {
   
        if(caja.getAttribute("data-filter") == "manada"){
            caja.style.display="inline-flex"
        }
        else{
            caja.style.display="none" 
        }
    }) 
})

scout.addEventListener("click", function(){

    cajas.forEach(caja => {
   
        if(caja.getAttribute("data-filter") == "scout"){
            caja.style.display="inline-flex"
        }
        else{
            caja.style.display="none" 
        }
    }) 
})

unidad.addEventListener("click", function(){

    cajas.forEach(caja => {
   
        if(caja.getAttribute("data-filter") == "unidad"){
            caja.style.display="inline-flex"
        }
        else{
            caja.style.display="none" 
        }
    }) 
})



rover.addEventListener("click", function(){

    cajas.forEach(caja => {
   
        if(caja.getAttribute("data-filter") == "rover"){
            caja.style.display="inline-flex"
        }
        else{
            caja.style.display="none" 
        }
    }) 
})


