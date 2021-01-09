const coorX = document.getElementById('coorX'),
    coorY = document.getElementById('coorY'),
    cat = document.getElementById('cat');

function setY (){
    let y = +coorY.value + 180;
    cat.style.bottom = y + "px";
}
function setX (){
    let x = +coorX.value + 240;
    cat.style.left = x + "px";
}