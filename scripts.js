function rolar() {

    let obj = event.target.dataset.id;
    document.getElementById(obj).scrollIntoView();
}


function iniBtn(btn) {
    document.getElementById(btn).addEventListener("click", rolar);
}


iniBtn('btn1');
iniBtn('btn2');
iniBtn('btn3');