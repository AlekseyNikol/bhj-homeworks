const arrayTab = Array.from(document.querySelectorAll('.tab'))
const cont = document.querySelectorAll('.tab__content')
arrayTab.forEach(item => {
   item.onclick = () => {
      if (document.querySelector('.tab_active'))
         document.querySelector('.tab_active').classList.remove('tab_active')
      document.querySelector('.tab__content_active').classList.remove('tab__content_active')
      item.classList.add('tab_active')
      cont[arrayTab.findIndex(item => item.className == 'tab tab_active')].classList.add('tab__content_active')
   }
})