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
        } else if (inputCase == 2){
            x = +inputX.value + 240;
            axisX.value = inputX.value;    
        } else {
            axisX.value = +axisX.value + x;
            inputX.value = x = axisX.value;
            x = parseInt(x) + 240;
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
            axisY.value = +axisY.value - y;
            inputY.value = y = axisY.value;
            y = parseInt(y) + 180;
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

    cat.onmousedown = function(e) {
    
        field.addEventListener('mousemove', setCoor);

        function setCoor (e){
            console.log(e.movementX);
            setY(3, e.movementY);
            setX(3, e.movementX);
        }
        
        document.addEventListener('mouseup', function(){
            field.removeEventListener ('mousemove', setCoor);
        });
    };
});