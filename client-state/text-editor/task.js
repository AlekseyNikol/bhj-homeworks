// Задание один

const textarea = document.getElementById("editor");
const clearBtn = document.getElementById("clear-btn")

console.log(textarea);
console.log(clearBtn);

textarea.value = localStorage.text;
textarea.oninput = () => localStorage.text = textarea.value;
clearBtn.onclick = () => {
    textarea.value = "";
    localStorage.text = textarea.value;
}