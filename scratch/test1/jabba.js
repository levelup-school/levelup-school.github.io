const listItems = document.querySelectorAll('[type="checkbox"]'),
    readyBtn = document.getElementById('ready-btn'),
    modal = document.querySelector('.modal');

let numCheckedCheckers = 0;
let fireworksScript = document.createElement("script");
fireworksScript.setAttribute("src", "JQjabba.js");

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
        if (numCheckedCheckers == 6){
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
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.appendChild(fireworksScript);
}
function hideModal (){
    fireworksScript.remove();
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
