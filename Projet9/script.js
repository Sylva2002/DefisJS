const sounds = ['sound1','sound2','sound3','sound4','sound5'];

sounds.forEach(element => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    
    btn.innerText = element;

    btn.addEventListener('click', ()=>{
        stopSongs();
        document.getElementById(element).play();
    })

    document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
        sounds.forEach(element => {
            const song = document.getElementById(element);
            song.pause();
            song.currentTime = 0;
        });
}