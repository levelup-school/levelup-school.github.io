'use strict';

(function(){
    const listItems = document.querySelectorAll('[type="checkbox"]'),
        readyBtn = document.getElementById('ready-btn'),
        link = readyBtn.getAttribute('data-link'),
        modal = document.querySelector('.modal'),
        okBtn = document.querySelector('.ok-btn');

    // fireworks script to turn on it only on readyBtn click (because animation)
    let fireworksScript = document.createElement("script");
    fireworksScript.setAttribute("src", "../js/JQjabba.js");

    let numCheckedCheckers = 0,
        numCheckers = listItems.length;

    listItems.forEach(item =>{
        item.value = 'off';
        item.addEventListener('click', () =>{
            if (item.value == 'off'){
                item.value = 'on';
                numCheckedCheckers += 1;
            } else {
                item.value = 'off';
                numCheckedCheckers -= 1;
            }
            if (numCheckedCheckers == numCheckers){
                readyBtn.classList.remove ('unready-btn');
                readyBtn.classList.add ('ready-btn');
                readyBtn.addEventListener('click', showModal);
            } else {
                readyBtn.classList.remove ('ready-btn');
                readyBtn.classList.add ('unready-btn');
                readyBtn.removeEventListener('click', showModal);
            }
        });
    });

    function showModal (){
        if (link){
            window.location.replace(link);
        } else{
            modal.style.display = 'block';
            okBtn.addEventListener('click', hideModal, {once: true});
            document.body.style.overflow = 'hidden';
            // add fireworks JQuery script to start animation
            document.body.appendChild(fireworksScript);
        }
    }

    function hideModal (){
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}());