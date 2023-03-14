//переменные
const MenuItem = document.querySelectorAll('.menu__item')
//console.log(MenuItem)

const MenuSub = document.querySelectorAll('.menu_sub')
//console.log(MenuSub)

const MenuMain = document.querySelectorAll('.menu_main')
//console.log(MenuMain)

const MenuLink = document.querySelectorAll('.menu__link')
//console.log(MenuLink)

//добавляем
/*
for (let item of MenuSub) {
   item.classList.add('menu_active')
}
*/
//MenuSub.classList.add('menu_active') // так не добавляется ко всем элементам?

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

