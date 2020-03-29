function f() {
    let riskList = document.querySelectorAll('.btn-risk');

    for (let i = 0; i < riskList.length -1; i++) {
        riskList[i].addEventListener('click', ()=>{
            console.log('!!!')
        })
    }
}
f();
