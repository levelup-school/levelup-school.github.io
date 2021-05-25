'use strict';

(function(){
    const listItems = document.querySelectorAll('[type="checkbox"]'),
        showNextBtns = document.querySelectorAll('.show-next-btn'),
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

    // Show next block button
    if ( showNextBtns.length != 0){
        showNextBtns.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                const showBlock = document.querySelectorAll(btn.getAttribute('data-display'));

                showBlock.forEach(showItem =>{
                    showItem.style.display = "block";
                    // btn.classList.remove('ready-btn');
                    btn.classList.add('btn-checked');
                    if (btn.getAttribute('data-scroll') != null){
                        scrollToDiv(showItem);
                    }
                });
                
            });
        });
    }
    

    // smooth scroll ==============================================
    function scrollToDiv(target) {
        function getPosition() {
            let i = target.offsetTop + target.offsetParent.offsetTop;
            return i;
        }
        const targetPosition = getPosition();
        let startPosition = window.pageYOffset;
        let difference = targetPosition - startPosition;
        let start = null;
        let duration = 600;

        window.requestAnimationFrame(step);

        function step(timestamp) {
            if (!start) {
                start = timestamp;
            }
            let progress = timestamp - start;
            window.scrollTo(0, easeInOutSine(progress, startPosition, difference, duration));
            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }
    }
    //easing function
    function easeInOutSine(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
}());