const card = document.querySelectorAll('.card');

card.forEach(element => {
    element.addEventListener('click',()=>{
        removeActiveClass();
        element.classList.add('active');
        
    })
});

function removeActiveClass(){
    card.forEach(element => {
        element.classList.remove('active');
    });
}