
window.onload = function(){
    const  sectionPrimera  =document.querySelector(".primero");
    let al1 = sectionPrimera.getBoundingClientRect();

    if(al1.top <= "0" && cont == 0){
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
  
}



