const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

let currentCircle = 1;

next.addEventListener('click',()=>{
    currentCircle++;
    if(currentCircle > circle.length){
        currentCircle= circle.length;
    }
    update();
})
prev.addEventListener('click',()=>{
    currentCircle--;
    if(currentCircle < 1){
        currentCircle = 1
    }
    update();
})

function update(){
    circle.forEach( (element, index) => {
        if(index < currentCircle){
            element.classList.add('active');
        } else{
            element.classList.remove('active');
        }
    });
    
    const actives = document.querySelectorAll(".active");
    progress.style.width =((actives.length-1) / (circle.length-1)*100) + '%';

    if(currentCircle === 1){
        prev.disabled = true;
    } else if(currentCircle === circle.length){
        next.disabled = true;
    } else{
        prev.disabled = false;
        next.disabled = false;
    }
    
}