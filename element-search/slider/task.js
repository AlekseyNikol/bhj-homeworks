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
   let sliderIndex = arrayItm.findIndex(e => e.classList.contains("slider__item_active")); // зачем проверять наличие CSS класса элемента? без мотода contains возвращает (-1). И почему строка не работает без Array (arrayItm), то есть с переменной arrowNext?

   arrayItm[sliderIndex].classList.remove("slider__item_active");
   console.log(arrayItm)
   if (sliderIndex > 0) {
      sliderIndex -= 1
   } else {
      sliderIndex = arrayItm.length - 1; //почему в условии(-1), зачем мы из длины массива вычетаем один элемент?
   }
   return arrayItm[sliderIndex].classList.add("slider__item_active")
}

function next() {
   let sliderIndex = arrayItm.findIndex(e => e.classList.contains('slider__item_active'));
   arrayItm[sliderIndex].classList.remove('slider__item_active');

   if (sliderIndex < arrayItm.length - 1) {
      sliderIndex += 1;
   } else {
      sliderIndex = 0;
   }
   return arrayItm[sliderIndex].classList.add("slider__item_active")
}

arrowPrev.addEventListener('click', prev) // стрелка назад
arrowNext.addEventListener('click', next) // стрелка вперед
