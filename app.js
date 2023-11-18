let adviceId = document.getElementById("adviceId");
let adviceContent = document.getElementById("adviceContent");
let rollBtn = document.getElementById("rollBtn");
let divider = document.querySelector(".divider");


function rollAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        adviceId.innerText = data.slip.id;
        adviceContent.innerText = data.slip.advice;
    })
    .catch(error => {
        adviceContent.innerText = error;
    });
};

rollAdvice();

rollBtn.addEventListener("click", rollAdvice);

if (window.innerWidth <= 450) {
    divider
    .setAttribute('src', "images/pattern-divider-mobile.svg")
}