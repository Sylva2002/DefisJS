const closeBtn = document.getElementById('close');
const openBtn = document.getElementById('open');
const container = document.querySelector(".container");

openBtn.addEventListener("click",()=>{
    container.classList.add("show-nav");
});

closeBtn.addEventListener("click",()=>{
    container.classList.remove("show-nav");
});