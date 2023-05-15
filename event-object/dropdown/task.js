let dropdownValye = document.querySelector('.dropdown__value');
console.log(dropdownValye);
let dropdownList = document.querySelector('.dropdown__list');
console.log(dropdownList);

//dropdownValye.addEventListener()

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


let dropdownItem = document.querySelector('.dropdown__item')
let arreyItem = Array.from(dropdownItem);

dropdownValye.addEventListener('click', dropdownClick);
//dropdownValye.addEventListener('click', removeClick);
