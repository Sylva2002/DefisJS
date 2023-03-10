const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggleEl.addEventListener("click",(e)=>{

    const html = document.querySelector("html");
    if(html.classList.contains("dark")){
        html.classList.remove("dark");
        e.target.innerHTML = "Dark Mode";
    } else{
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode";
    }
})

function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour,0, 23,0,360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute,0, 59,0,360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second,0, 59,0,360)}deg)`;

    timeEl.innerHTML = `${hour}:${minute}`;
    
    dateEl.innerHTML= `${days[day]}, ${months[month]} <span class="circle"> ${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) =>{
    return((num - in_min) * (out_max - out_min)) / (in_max - in_min) +out_min;
}
setTime();

setInterval(setTime, 1000);