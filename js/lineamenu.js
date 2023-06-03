const part = document.querySelectorAll("nav a");
console.log(part)


// ________________section 1_________________________

const  section1  =document.querySelector(".parte1");
const  section2  =document.querySelector(".parte2");
const  section3  =document.querySelector(".parte3");
const  section4  =document.querySelector(".parte4");
const  section5  =document.querySelector(".parte5");
const  section6  =document.querySelector(".parte6");
const  section7  =document.querySelector(".parte7");



window.addEventListener("scroll",function(){


    const alturaPantalla = window.innerHeight;

    //_____________rec section 1______________
    let rect1 = section1.getBoundingClientRect();


    const alturaSection1 = rect1.top;

    if (alturaSection1 < alturaPantalla && alturaSection1 >= 0){
        part[0].style.borderBottom = "2px solid #632599";
        part[1].style.borderBottom = "0px";
        part[2].style.borderBottom = "0px";
        part[3].style.borderBottom = "0px";
        part[4].style.borderBottom = "0px";
        part[5].style.borderBottom = "0px";
        part[6].style.borderBottom = "0px";
    }

    //_____________rec section 2______________
    let rect2 = section2.getBoundingClientRect();


    const alturaSection2 = rect2.top;

    if (alturaSection2 < alturaPantalla && alturaSection2 >= 0){
        part[0].style.borderBottom = "0px";
        part[1].style.borderBottom = "2px solid #632599";
        part[2].style.borderBottom = "0px";
        part[3].style.borderBottom = "0px";
        part[4].style.borderBottom = "0px";
        part[5].style.borderBottom = "0px";
        part[6].style.borderBottom = "0px";
    }

    
    //_____________rec section 3______________
    let rect3 = section3.getBoundingClientRect();


    const alturaSection3 = rect3.top;

    if (alturaSection3 < alturaPantalla && alturaSection3 >= 0){
        part[0].style.borderBottom = "0px";
        part[1].style.borderBottom = "0px";
        part[2].style.borderBottom = "2px solid #632599";
        part[3].style.borderBottom = "0px";
        part[4].style.borderBottom = "0px";
        part[5].style.borderBottom = "0px";
        part[6].style.borderBottom = "0px";
    }

    //_____________rec section 4______________
    let rect4 = section4.getBoundingClientRect();


    const alturaSection4 = rect4.top;

    if (alturaSection4 < alturaPantalla && alturaSection4 >= 0){
        part[0].style.borderBottom = "0px";
        part[1].style.borderBottom = "0px";
        part[2].style.borderBottom = "0px";
        part[3].style.borderBottom = "2px solid #632599";
        part[4].style.borderBottom = "0px";
        part[5].style.borderBottom = "0px";
        part[6].style.borderBottom = "0px";
    }

    //_____________rec section 5______________
    let rect5 = section5.getBoundingClientRect();


    const alturaSection5 = rect5.top;

    if (alturaSection5 < alturaPantalla && alturaSection5 >= 0){
        part[0].style.borderBottom = "0px";
        part[1].style.borderBottom = "0px";
        part[2].style.borderBottom = "0px";
        part[3].style.borderBottom = "0px";
        part[4].style.borderBottom = "2px solid #632599";
        part[5].style.borderBottom = "0px";
        part[6].style.borderBottom = "0px";
    }


    //_____________rec section 6______________
    let rect6 = section6.getBoundingClientRect();


    const alturaSection6 = rect6.top;

    if (alturaSection6 < alturaPantalla && alturaSection6 >= 0){
        part[0].style.borderBottom = "0px";
        part[1].style.borderBottom = "0px";
        part[2].style.borderBottom = "0px";
        part[3].style.borderBottom = "0px";
        part[4].style.borderBottom = "0px";
        part[5].style.borderBottom = "2px solid #632599";
        part[6].style.borderBottom = "0px";
    }
    


    //_____________rec section 7______________
    let rect7 = section7.getBoundingClientRect();


    const alturaSection7 = rect7.top;

    if (alturaSection7 < alturaPantalla && alturaSection7 >= 0){
        part[0].style.borderBottom = "0px";
        part[1].style.borderBottom = "0px";
        part[2].style.borderBottom = "0px";
        part[3].style.borderBottom = "0px";
        part[4].style.borderBottom = "0px";
        part[5].style.borderBottom = "0px";
        part[6].style.borderBottom = "2px solid #632599";
    }


    //_____________rec section 8______________
    let rect8 = section8.getBoundingClientRect();


    const alturaSection8 = rect8.top;

    if (alturaSection8 < alturaPantalla && alturaSection8 >= 0){
        part[0].style.borderBottom = "0px";
        part[1].style.borderBottom = "0px";
        part[2].style.borderBottom = "0px";
        part[3].style.borderBottom = "0px";
        part[4].style.borderBottom = "0px";
        part[5].style.borderBottom = "0px";
        part[6].style.borderBottom = "0px";
        part[7].style.borderBottom = "2px solid #632599";
        
        
    }
});