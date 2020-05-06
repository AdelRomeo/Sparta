(function f() {
    let riskList = document.querySelectorAll('.btn-risk'); //список кнопок которые открывают popup
    let popup = document.querySelector('.popup'); //popup
    let closePopup = document.querySelector('.popup_close'); //кнопка закрывающая popup

    for (let i = 0; i < riskList.length -1; i++) {
        riskList[i].addEventListener('click', ()=>{
            popup.style.visibility = 'visible';
            popup.style.opacity = '1';
        })
    }

    closePopup.addEventListener('click', ()=>{
        popup.style.visibility = 'hidden';
        popup.style.opacity = '0';
    })
})();

let test = 1;
let test = 1;
let test = 1;