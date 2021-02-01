'use strict';

export default function btnFunctions(map){
    const copyBtnList = document.querySelectorAll('.copy-btn'),
        moreBtnList = document.querySelectorAll('.more-btn');

    copyBtnList.forEach(item => {
        item.addEventListener('click', () =>{
            let dataId = item.getAttribute('data-id');
            
            map[dataId].url.select();
            document.execCommand("copy");
            console.log('asd');
        });
    });
    
}