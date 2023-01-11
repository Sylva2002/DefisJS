const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// Using Async/Await
async function generateJoke(){
    const confi = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', confi)
    const data = await res.json();

    jokeEl.innerHTML = data.joke;
}

// Using .then
/* function generateJoke(){
    const confi = {
        headers: {
            'Accept': 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', confi).then(res=>res.json().then(data =>{
        jokeEl.innerHTML = data.joke;
    } ))
} */