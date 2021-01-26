const listItems = document.querySelectorAll('[type="checkbox"]'),
    readyBtn = document.getElementById('ready-btn');

let numCheckedCheckers = 0;


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
        console.log(numCheckedCheckers);
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
})

function showModal (){
    alert('hi');
}
