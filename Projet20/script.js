const buttons = document.querySelectorAll(".ripple");

buttons.forEach(element => {
    element.addEventListener('click', function (e) {
        //position du click sur l'écran
        const x = e.clientX;
        const y = e.clientY;

        //position de l'élément dans le document
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        
        //Ici on détermine top et left
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement("span");
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(()=> circle.remove(),500);
    })
});