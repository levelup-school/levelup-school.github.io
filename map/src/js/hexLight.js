'use strict';

export default function hexLight (headSelector, lightSelector){
    const headBlock = document.querySelector(headSelector),
        light = document.querySelector(lightSelector);
    let x = 0,
        y = 0;

    function showThatGrid() {
        light.style.left = x + 'px';
        light.style.top = y + 'px';
        light.style.animationPlayState = 'running';
        setTimeout(function () {
            light.style.animationPlayState = 'paused';
        }, 10);
     
    }
    function setXY(e){
        x = e.pageX;
        y = e.pageY - headBlock.offsetTop;
        showThatGrid();
    }

    headBlock.addEventListener('mouseover', () => {
        light.style.opacity = 0.4;
    
        headBlock.addEventListener('mousemove', setXY);

        headBlock.addEventListener('mouseleave', ()=>{
            light.style.opacity = 0;
            headBlock.removeEventListener('mousemove', setXY);
        });
    });
}