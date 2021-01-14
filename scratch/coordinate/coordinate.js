document.addEventListener('DOMContentLoaded', ()=>{
    
    
    const field = document.querySelector('.field'),
        axisX = document.getElementById('axisX'),
        axisY = document.getElementById('axisY'),
        inputX = document.getElementById('toX'),
        inputY = document.getElementById('toY'),
        cat = document.getElementById('cat');

    let zoomRatio = 1 / window.devicePixelRatio,
        techX = 240,
        techY = 180;


    window.addEventListener('resize', (e)=>{
        zoomRatio = 1 / window.devicePixelRatio;
    });

    function setX (inputCase, x){
        
        if (inputCase == 1){
            techX = +axisX.value + 240;
            inputX.value = axisX.value;
        } else if (inputCase == 2){
            techX = +inputX.value + 240;
            axisX.value = inputX.value;    
        } else {
            techX = techX + x * zoomRatio;
            axisX.value = inputX.value = Math.round(techX) - 240;
        }
        cat.style.left = techX + "px";
        console.log (cat.style.left);
    }

    function setY (inputCase, y){
        if (inputCase == 1){
            techY = +axisY.value + 180;
            inputY.value = axisY.value;
        } else if (inputCase == 2) {
            techY = +inputY.value + 180;
            axisY.value = inputY.value;
        } else {
            techY = techY - y * zoomRatio;
            axisY.value = inputY.value = Math.round(techY) - 180;
        }
        cat.style.bottom = techY + "px";
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
            setY(3, e.movementY);
            setX(3, e.movementX);
        }
        
        document.addEventListener('mouseup', function(){
            field.removeEventListener ('mousemove', setCoor);
        });
    };
});