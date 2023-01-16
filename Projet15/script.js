const counter = document.querySelectorAll(".counter");

counter.forEach(element => {
    element.innerText = '0';
    
    const updateCounter = ()=>{
        const target = +element.dataset.target;
        
        const c = +element.innerText;

        const increment = target / 200;
        if(c < target){
            element.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter,1);
        }else{
            element.innerText = target;
        }
    }
    updateCounter();
});