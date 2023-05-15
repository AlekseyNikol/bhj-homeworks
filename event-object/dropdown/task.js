let dropdownValue = document.querySelector('.dropdown__value');
//console.log(dropdownValue);
let dropdownList = document.querySelector('.dropdown__list');
//console.log(dropdownList);

function activeClick() {
   dropdownList.classList.add('dropdown__list_active');
   console.log(dropdownList);
   return
}

function removeClick() {
   dropdownList.classList.remove('dropdown__list_active');
   console.log(dropdownList);
   return
}

let dropdownItem = document.querySelectorAll('.dropdown__item')
let arrayItem = Array.from(dropdownItem);

dropdownValue.addEventListener('click', activeClick);

//dropdownValye.addEventListener('click', dropdownClick);
console.log(dropdownItem)
console.log(arrayItem)


for (let i = 0; i < arrayItem.length; i++) {
   arrayItem[i].onclick = function () {
      dropdownValue.textContent = this.textContent;
      removeClick();
      return false // почему без false не срабатывает выбор
   }
}

// question

/*
function dropdownClick() {
   //console.log(88)
   if (dropdownList.classList == "dropdown__list_active") {
      //console.log(77)
      return removeClick();
   }
   if (dropdownList.classList != "dropdown__list_active") {
      //console.log(66)
      return activeClick();
   }
}
*/