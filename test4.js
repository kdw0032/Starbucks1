let mainText3 = document.querySelector('.bttn')

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if (value > 800) {
        mainText3.style.animation = "sli 2s ease-out forwards";
    }else {
        mainText3.style.animation = `back2 2s ease-out forwards`;
    }
})