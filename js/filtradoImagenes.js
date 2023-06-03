var cajas =document.querySelectorAll(".tarjeta")
var todas = document.querySelector(".todas")
var zonaScout = document.querySelector(".zonaScout")
var salidas = document.querySelector(".salidas")




todas.addEventListener("click", function(){

    cajas.forEach(caja => {
        caja.style.display="inline-flex"
    }) 
})

zonaScout.addEventListener("click", function(){
    console.log("hola");

    cajas.forEach(caja => {
   
        if(caja.getAttribute("data-filter") == "zonaScout"){
            caja.style.display="inline-flex"
        }
        else{
            caja.style.display="none"
        }
    }) 
})

salidas.addEventListener("click", function(){

    cajas.forEach(caja => {
   
        if(caja.getAttribute("data-filter") == "salidas"){
            caja.style.display="inline-flex"
        }
        else{
            caja.style.display="none" 
        }
    }) 
})

