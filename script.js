const colors = ['#b7edf2','#8e9b82','#174e66','#9fe354','#d2dcc8'];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}