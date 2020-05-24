(function popupVisible() {
    let riskList = document.querySelectorAll('.btn-risk'), //список кнопок которые открывают popup
        popup = document.querySelector('.popup'), //popup
        closePopup = document.querySelector('.popup_close'); //кнопка закрывающая popup

    for (let i = 0; i < riskList.length -1; i++) {
        riskList[i].addEventListener('click', ()=>{
            popup.style.visibility = 'visible';
            popup.style.opacity = '1';
            popup.style.top = '180px';
        })
    }

    closePopup.addEventListener('click', ()=>{
        popup.style.visibility = 'hidden';
        popup.style.opacity = '0';
        popup.style.top = '250px';
    })
})(); // работа с popup


(function commentsSlider() {
    let comItem = document.querySelector(".review_item-comment");
    let arrowLeft = document.querySelector(".review_left-arrow");
    let arrowRight = document.querySelector(".review_right-arrow");

    let leftmarg = 0;

    arrowLeft.addEventListener('click', ()=>{
        leftmarg -= comItem.offsetWidth + 100;
        arrowRight.style.opacity = '1';
        comItem.style.marginLeft = leftmarg + 'px';
        if (leftmarg <= -3720){
            arrowLeft.style.opacity = '0';
        }
    });

    arrowRight.addEventListener('click', ()=>{
        leftmarg += comItem.offsetWidth + 100;
        arrowLeft.style.opacity = '1';
        comItem.style.marginLeft = leftmarg + 'px';
        if (leftmarg >= 0){
            arrowRight.style.opacity = '0';
        }
    });
})();

let dada = 1;
let dada = 2;