let mainText5 = document.querySelector('.bttn2')

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if (value > 1800) {
        mainText5.style.animation = "opa 2s ease-out forwards";
   }
})