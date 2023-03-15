const sliderItems = document.querySelectorAll('.slider__item')
console.log(sliderItems)

const itemActive = document.querySelector('.slider__item_active')
console.log(itemActive)
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const arrayItm = Array.from(sliderItems);
console.log(arrayItm)




function prev() {
   //let arraySlider = sliderItems.findIndex(e => e == "slider__item_active"); // почему не срабатывает метод findIndex, как показано в учебнике?
   let arraySlider = arrayItm.findIndex(e => e.classList.contains("slider__item_active")); // зачем проверять наличие CSS класса элемента? без мотода contains возвращает (-1). И почему строка не работает без Array?
   //console.log(arraySlider)
   arrayItm[arraySlider].classList.remove("slider__item_active")
   console.log(arrayItm)
   if (arraySlider > 0) {
      //console.log(88)
      arraySlider -= 1
   } else {
      //console.log(87)
      arraySlider = (arrayItm.length - 1);
   }
   return arrayItm[arraySlider].classList.add("slider__item_active")
}
arrowPrev.addEventListener('click', prev)