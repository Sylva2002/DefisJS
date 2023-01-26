const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesCliked = 0;

loveMe.addEventListener("click", (e)=>{
    if(clickTime === 0){
        clickTime = new Date().getTime();
    } else{
        if ((new Date().getTime() - clickTime)< 800) {
            createHeart(e);
            clickTime = 0;
        } else {
        clickTime = new Date().getTime();
        }
    }
})

const createHeart= (e)=>{
    const heart =document.createElement('span');
    heart.classList.add("heart-icon");
    heart.textContent = 'Love';
    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x- leftOffset;
    const yInside = y- topOffset;
    
    
    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;
    
    loveMe.appendChild(heart);

    times.innerHTML = ++timesCliked;

    setTimeout(()=>{heart.remove()},1000);
}