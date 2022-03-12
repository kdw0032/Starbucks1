let mainText2 = document.querySelector('.txt')

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if (value > 800) {
        mainText2.style.animation = "slide2 2s ease-out forwards";
    }else {
        mainText2.style.animation = `back2 2s ease-out forwards`;
    }
})