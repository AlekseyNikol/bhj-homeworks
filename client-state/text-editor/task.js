// Задание один

const textarea = document.getElementById("editor");
const clearBtn = document.getElementById("btn_clear")

console.log(textarea);
console.log(clearBtn);

textarea.value = localStorage.getItem('text');


textarea.oninput = () => localStorage.text = textarea.value;

clearBtn.addEventListener("click", () => {textarea.value = "";
    localStorage.removeItem("text")}) 
    
/*
// one

clearBtn.addEventListener("click", () => {textarea.value = "";
    localStorage.text = textarea.value})



// two

clearBtn.addEventListener("click", () => {textarea.value = "";
    localStorage.clear()})

---------- почему первый и второй вариант после удаления localStorage в окне textarea выдает undefined?
*/  
