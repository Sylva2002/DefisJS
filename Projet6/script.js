const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);


function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(element => {
        const boxTop = element.getBoundingClientRect().top;
        console.log("triggerBottom :" + triggerBottom);
        console.log("boxTop :" + boxTop);
        if (boxTop < triggerBottom) {
            element.classList.add("show");
        } else{
            element.classList.remove("show");
        }
    });
}