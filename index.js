//Завдання 1
let count = 0
const interval = setInterval(() => {
    console.log("ШО ЦЕ ТАКЕ " + (count + 1))
    count++
    if (count === 5) {
        clearInterval(interval)
        console.log("СТОП!!!!!!");
    }
}, 1000)

//Завдання 2
const box = document.querySelector('.box');
let posX = 0
let posY = 0
let size = 100

function randomColor(){
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
} // 😈😈😈

setInterval(() => {
    posX += 10
    posY += 10
    size += 10
    box.style.backgroundColor = randomColor()
    box.style.left = posX + 'px'
    box.style.top = posY + 'px'
    box.style.width = size + 'px'
    box.style.height = size + 'px'
}, 1000)

//Завдання 3
const target = document.querySelector('.target')
const scoreDiv = document.getElementById('score')
let score = 0

const randomPosition = () => {
    let maxWidth = window.innerWidth - 50;
    let maxHeight = window.innerHeight - 50;
    let x = Math.random() * maxWidth;
    let y = Math.random() * maxHeight;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
}

target.addEventListener('click', () => {
    score++
    scoreDiv.textContent = "Score: " + score;
    target.textContent = score;
    randomPosition()
})
setInterval(randomPosition, 2000)

//Завдання 4
const start = document.querySelector("#startBtn");
const stop = document.querySelector("#stopBtn");
const input = document.querySelector(".inputTime");
const output = document.querySelector("#output");
let intervalId = null;
let timeoutId = null;
let counter = 0;

start.addEventListener('click', () => {
    const time = parseInt(input.value, 10); 
    if (isNaN(time) || time <= 0) {
        output.textContent = "Введіть коректне число секунд!";
        return;
    }

    if (intervalId !== null) return;
    counter = time;
    output.textContent = counter;
    intervalId = setInterval(() => {
        counter--
        output.textContent = counter
        if (counter <= 0) {
            clearInterval(intervalId);
            intervalId = null;
            output.textContent = "Час вийшов!";
            timeoutId = setTimeout(() => {
                alert("Час вийшов!");
            }, 100);
        }
    }, 1000);
})

stop.addEventListener('click', () => {
    clearInterval(intervalId)
    clearTimeout(timeoutId)
    intervalId = null
    timeoutId = null
    output.textContent = "Час зупинено";
})