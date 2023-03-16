const sliderItems = document.querySelectorAll('.slider__item')
console.log(sliderItems)

const itemActive = document.querySelector('.slider__item_active')
console.log(itemActive)
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const arrayItm = Array.from(sliderItems);
console.log(arrayItm)




function prev() {
   //let arraySlider = sliderItems.findIndex(e => e == "slider__item_active"); // почему не срабатывает метод findIndex в данном случае?
   let arraySlider = arrayItm.findIndex(e => e.classList.contains("slider__item_active")); // зачем проверять наличие CSS класса элемента? без мотода contains возвращает (-1). И почему строка не работает без Array (arrayItm), то есть с переменной arrowNext?
   //console.log(arraySlider)
   arrayItm[arraySlider].classList.remove("slider__item_active");
   console.log(arrayItm)
   if (arraySlider > 0) {
      arraySlider -= 1
   } else {
      arraySlider = arrayItm.length - 1; //почему в условии(-1), зачем мы из длины массива вычетаем один элемент?
   }
   return arrayItm[arraySlider].classList.add("slider__item_active")
}

function next() {
   let arraySlider = arrayItm.findIndex(e => e.classList.contains('slider__item_active'));
   arrayItm[arraySlider].classList.remove('slider__item_active');

   if (arraySlider < arrayItm.length - 1) {
      arraySlider += 1;
   } else {
      arraySlider = 0;
   }
   return arrayItm[arraySlider].classList.add("slider__item_active")
}

arrowPrev.addEventListener('click', prev) // стрелка назад
arrowNext.addEventListener('click', next) // стрелка вперед
