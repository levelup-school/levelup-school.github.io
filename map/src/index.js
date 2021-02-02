import createMap from './js/createMap';
import navigation from './js/navigation';
import hexLight from './js/hexLight';

window.addEventListener('DOMContentLoaded', () => {
    const scratch = require('./js/scratch'),
        moreWindow = document.querySelector('.more'),
        openWindowBtn = document.querySelector('.openMore'),
        closeMoreBtn = document.querySelector('#closeMore');

    hexLight('main.aboutme', '.aboutme__light');
    createMap(scratch, '.levels');
    navigation('#toTop', 600);

    openWindowBtn.addEventListener('click', ()=>{
        moreWindow.style.right = '0px';
    });
    closeMoreBtn.addEventListener('click', ()=>{
        moreWindow.style.right = '-600px';
    });
    
});

