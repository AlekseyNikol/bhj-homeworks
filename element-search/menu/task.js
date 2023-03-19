//переменные
const menuItem = document.querySelectorAll('.menu__item')
//console.log(MenuItem)

const menuSub = document.querySelectorAll('.menu_sub')
//console.log(MenuSub)

//функция меню

MenuItem.forEach((item) => {
   let subMenu = item.querySelector('.menu_sub')
   console.log(subMenu)
   if (subMenu) {
      let link = item.querySelector('.menu__link')
      console.log(link)

      link.onclick = (e) => {
         e.preventDefault()
         MenuSub.forEach((sub) => {
            console.log(sub)
            if (sub !== subMenu) { // почему? ведь пер subMenu("ul.menu.menu_sub") и элемент объекта MenuSub - это (ul.menu.menu_sub)
               sub.classList.remove('menu_active')
            }
         })

         // console.log(item.querySelector('.menu_active'))
         if (subMenu == item.querySelector('.menu_active')) {
            subMenu.classList.remove('menu_active')
         } else {
            subMenu.classList.add('menu_active')
         }
      }



   }
})



