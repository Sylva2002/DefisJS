const sliderContainer = document.querySelector(".slider-container");
const rightSlide = document.querySelector(".right-slide");
const leftSlide = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slideLength = rightSlide.querySelectorAll("div").length;

let activeSlide = 0;

leftSlide.style.top = `-${(slideLength - 1 )*100}vh`

upButton.addEventListener('click', ()=> changeSlide('up'));
downButton.addEventListener('click', ()=> changeSlide('down'));

const changeSlide = (direction)=> {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction === "up"){
        activeSlide++
        if(activeSlide > slideLength-1){
            activeSlide = 0;
        }
    } else{
        activeSlide--
        if(activeSlide < 0){
            activeSlide = slideLength-1;
        }
    }
    rightSlide.style.transform= `translateY(-${activeSlide * sliderHeight}px)`
    leftSlide.style.transform= `translateY(${activeSlide * sliderHeight}px)`

}