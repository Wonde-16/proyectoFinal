const hamb = document.querySelector(".ham");
const nav = document.querySelector("section.nav ul");


hamb.addEventListener("click", function(){
    nav.classList.toggle("navegadorHam");
    nav.classList.toggle("navegador");
})

