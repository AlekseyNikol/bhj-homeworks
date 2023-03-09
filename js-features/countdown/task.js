const ReverseTimer = function () {
    const output = document.getElementById("timer");
    output.textContent -= 1;
    if (output.textContent <= 0) {
        alert('вы выиграли');
        clearInterval(inervalId);
    }
}
const inervalId = setInterval(ReverseTimer, 1000);