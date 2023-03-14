//переменные
const MenuItem = document.querySelectorAll('.menu__item')
//console.log(MenuItem)

const MenuSub = document.querySelectorAll('.menu_sub')
//console.log(MenuSub)

//функция меню

MenuItem.forEach((item) => {
   let subMenu = item.querySelector('.menu_sub')
   if (subMenu) {
      let link = item.querySelector('.menu__link')

      link.onclick = (e) => {
         e.preventDefault()
         MenuSub.forEach((sub) => {
            if (sub !== subMenu) {
               sub.classList.remove('menu_active')
            }
         })
         subMenu.classList.add('menu_active')
      }

   }

})

