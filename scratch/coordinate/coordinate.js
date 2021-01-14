document.addEventListener('DOMContentLoaded', ()=>{

    const field = document.querySelector('.field'),
        axisX = document.getElementById('axisX'),
        axisY = document.getElementById('axisY'),
        inputX = document.getElementById('toX'),
        inputY = document.getElementById('toY'),
        cat = document.getElementById('cat');


    function setX (inputCase, x){
        
        if (inputCase == 1){
            x = +axisX.value + 240;
            inputX.value = axisX.value;
        } else {
            x = +inputX.value + 240;
            axisX.value = inputX.value;    
        }

        cat.style.left = x + "px";
    }

    function setY (inputCase, y){
        
        if (inputCase == 1){
            y = +axisY.value + 180;
            inputY.value = axisY.value;
        } else if (inputCase == 2) {
            y = +inputY.value + 180;
            axisY.value = inputY.value;
        } else {
            axisY.value = inputY.value = y -180;
        }

        cat.style.bottom = y + "px";
    }
    
    
    axisX.onmousemove = () => setX(1);
    axisY.onmousemove = () => setY(1);
    
    inputX.oninput = () => setX(2);
    inputY.oninput = () => setY(2);

    
    cat.ondragstart = function() {
        return false;
    };
    field.ondragstart = function() {
        return false;
    };

    // field.addEventListener('mousemove', (e) =>{
    //     console.log(e.offsetX);
    //     console.log(e.offsetY);
    // });
    // cat.onmousedown = function(e) {
        
    //     let shiftX = e.offsetX,
    //         shiftY = e.offsetY;

    //     field.addEventListener('mousemove', (e) =>{
    //         let x = e.offsetX + shiftX,
    //             y = e.offsetY + shiftY;

    //         console.log(x);
    //     });

      
    // };
});