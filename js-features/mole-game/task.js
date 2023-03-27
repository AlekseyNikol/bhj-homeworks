// Переменные

let killMole = document.getElementById("dead").innerHTML;
//console.log(killMole)
let lostMole = document.getElementById("lost").innerHTML;
//console.log(lostMole)

const arrayHole = Array.from(document.getElementsByClassName("hole"));;
//console.log(arrayHole)

arrayHole.map((el) => {
   el.onclick = () => {
      if (el.classList.contains("hole_has-mole")) {
         killMole++
         document.getElementById("dead").innerHTML = killMole;
      } else {
         lostMole++
         document.getElementById("lost").innerHTML = lostMole;
      }
      checkGame();
   }
})


let checkGame = () => {
   if (killMole >= 10 && lostMole < 5) { // почебу так код не работает (killMole = 10 && lostMole < 5)
      alert("Победа!");
      end()
   } else if (lostMole >= 5) { // почебу так код не работает (lostMole = 5)
      alert("Проиграли!");
      end()
   }
};

const end = () => {
   document.getElementById("dead").innerHTML = 0;
   document.getElementById("lost").innerHTML = 0;
   killMole = 0; // зачем нужно прописывать, если мы на 38 строке уже присваеваем = 0
   lostMole = 0;
}