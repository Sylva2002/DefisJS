const canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
const sizeInput = document.getElementById('size');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const colorInput = document.getElementById('color');
const clear = document.getElementById('clear');

clear.addEventListener('click', ()=>{
    ctx.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);
})


increase.addEventListener('click', ()=>{
    let save = +sizeInput.textContent;

    save += 5;
    
    sizeInput.textContent = save;
})

decrease.addEventListener("click", ()=>{
    let save = +sizeInput.textContent;
    if(save <= 5){
        save = 5;
    }else{
        save -= 5;
    }


    sizeInput.textContent = save;
})

let size = 0;
let color = '';
let isPressed = false;
let x;
let y;

canvas.addEventListener("mousedown",(e)=>{
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
    
});

canvas.addEventListener("mouseup",(e)=>{
    isPressed = false;

    x = undefined;
    y = undefined;
    
});

canvas.addEventListener("mousemove",(e)=>{
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY; 
        drawCricle(x2, y2);
        drawLine(x, y, x2, y2);

        x=x2;
        y=y2;
    }
})

function drawCricle(x, y){
    size = +sizeInput.textContent;
    color = colorInput.value;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2){
    size = +sizeInput.textContent;
    color = colorInput.value;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}
