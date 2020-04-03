function f() {
    let riskList = document.querySelectorAll('.btn-risk');
    let popup = document.querySelector('.popup');

    for (let i = 0; i < riskList.length -1; i++) {
        riskList[i].addEventListener('click', ()=>{
            popup.style.visibility = 'visible';
        })
    }
}
f();
