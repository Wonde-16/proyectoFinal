import { CountUp } from '../countUp.js/dist/countUp.js';

var cont = 0

window.addEventListener("load",function(){
    const  sectionPrimera  =document.querySelector(".parte1");
    let al1 = sectionPrimera.getBoundingClientRect();
    console.log(al1)

    if(al1.top == "140" && cont == 0){
        var countUp = new CountUp('contador1', 32000);
        countUp.start();
        var countUp = new CountUp('contador2', 7000);
        countUp.start();
        var countUp = new CountUp('contador3', 1400000);
        countUp.start();
        var countUp = new CountUp('contador4', 300);
        countUp.start();
        cont = cont+1
    }
  
})









