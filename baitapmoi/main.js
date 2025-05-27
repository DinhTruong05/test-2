 const swbutton = new swichbutton();
 const lampe = new lamp();

 swbutton.connecttolamp(lampe);

 function clickbuttonon() {
     swbutton.switchon();
     changeBackGroundColor()
 }
 function clickbuttonoff() {
     swbutton.switchoff();
     changeBackGroundColor()
 }

 function changeBackGroundColor(){
     let lamcontainer = document.getElementById("lamp-container");
     if (lampe._state === true)
        lamcontainer.style.backgroundColor = "yellow";
     else
        lamcontainer.style.backgroundColor = "black";
     
 }