const adviceId = document.getElementsByClassName("id")[0];
const adviceText = document.getElementsByClassName("advice-text")[0];
const diceBtn = document.getElementsByClassName("dice")[0];

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => {
        return response.json();
    })
    .then((adviceData) => {
        const adviceNum = adviceData.slip.id;
        const advice =  adviceData.slip.advice;

        adviceId.textContent = adviceNum;
        adviceText.innerHTML = `${advice}`
    })
    .catch((error) => {
        console.log(error);
    });
}

diceBtn.addEventListener('click', function () {
    getAdvice();
})

window.onload = () => {
    getAdvice();
}