'use strict';

export default function btnFunctions(map){
    const copyBtnList = document.querySelectorAll('.copy-btn'),
        moreBtnList = document.querySelectorAll('.more-btn');

    copyBtnList.forEach(item => {
        item.addEventListener('click', () =>{
            let dataId = item.getAttribute('data-id');
            navigator.clipboard.writeText(map[dataId].url).then(function() {
                console.log('Async: Copying to clipboard was successful!');
              }, function(err) {
                console.error('Async: Could not copy text: ', err);
              });
        });
    });
    
}