const coorX = document.getElementById('coorX'),
    coorY = document.getElementById('coorY'),
    toX = document.getElementById('toX'),
    toY = document.getElementById('toY'),
    cat = document.getElementById('cat');

function setY (){
    let y = +coorY.value + 180;
    cat.style.bottom = y + "px";
    toY.textContent = coorY.value;
}
function setX (){
    let x = +coorX.value + 240;
    cat.style.left = x + "px";
    toX.textContent = coorX.value;
}