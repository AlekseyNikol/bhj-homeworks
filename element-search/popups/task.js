let main = document.getElementById('modal_main');
//onsole.log(main)

let mainSuccess = document.getElementById('modal_success');
//console.log(mainSuccess)

let modalClose = document.querySelectorAll('.modal__close_times')
//console.log(modalClose)

let btnDanger = document.querySelector('.btn_danger')
//console.log(btnDanger)

main.classList.add('modal_active') //добавляем

modalClose.forEach(
    function (item) {
        item.onclick = () => {
            main.classList.remove('modal_active')
            mainSuccess.classList.remove('modal_active')
        }
    }
) // крестик


btnDanger.onclick = () => {
    main.classList.remove('modal_active');
    mainSuccess.classList.add('modal_active');
} // кнопка



