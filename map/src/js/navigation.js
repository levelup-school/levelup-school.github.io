'use strict';

export default function navigation(toTopSelector, duration) {
    const toTop = document.querySelector(toTopSelector);

    // smooth scroll ==============================================
    function scrollToDiv(e) {
        function getPosition() {
            let div = document.querySelector(clickTargetID);
            let i = div.offsetTop + div.offsetParent.offsetTop;
            return i;
        }
        const clickTargetID = e.target.getAttribute('href');
        const targetPosition = getPosition();
        let startPosition = window.pageYOffset;
        let difference = targetPosition - startPosition;
        let start = null;

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

    //the Top button appearance
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            toTop.style.display = 'block';
        } else {
            toTop.style.display = 'none';
        }
    });

    //scroll on click listener and HIDE onclick toTopBtn and scroll to top
    toTop.addEventListener('click', (e) => {
        scrollToDiv(e);
        toTop.style.opacity = '0';
        setTimeout(function () {
            toTop.style.opacity = '1';
        }, 800);
    });
    //easing function
    function easeInOutSine(t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }

    //nav underline slide on mouseover
    let navField = document.querySelector('.nav');
    let navActive = document.querySelector('.nav-active');
    let xActive = navActive.offsetLeft + navActive.offsetWidth/2;

    navField.style.setProperty('--underlinePos', xActive + 'px');
    navField.addEventListener('mousemove', (e)=>{
        let x = e.offsetX;
        navField.style.setProperty('--underlinePos', x + 'px');
    });
    navField.onmouseout = function () {
        this.style.setProperty('--underlinePos', xActive + 'px');
    };
}