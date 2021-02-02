'use strict';

export default function btnFunctions(map) {
    const copyBtnList = document.querySelectorAll('.copy-btn'),
        moreBtnList = document.querySelectorAll('.more-btn'),
        moreWindow = document.querySelector('.more'),
        moreContentWrapper = document.querySelector('.more__inner');
// id - свойство объкета, dataId -порядковый номер объекта в массиве
    function addListenerToCopyBtn (copyBtn){
        copyBtn.addEventListener('click', () => {
            let dataId = copyBtn.getAttribute('data-id');
            navigator.clipboard.writeText(map[dataId].url).then(function () {
                copyBtn.classList.add('bg-green');
                copyBtn.innerHTML = 'Copied &#10003;';
                setTimeout(()=>{
                    copyBtn.classList.remove('bg-green');
                    copyBtn.innerHTML = 'Copy link';
                }, 1000);
            });
        });
    }

    copyBtnList.forEach(item => {
        addListenerToCopyBtn(item);
    });

    function buildMoreBlock ({name, type, lvl, sub, duration, id, bold, url, project, engUrl, descr, descr2}, dataId){
        let bgColorClass = type == 'video' ? 'bg-r' : type == 'word' ? 'bg-y' : 'bg-b';
        const moreContent = document.createElement('div');
        moreContent.className = `more__item ${bgColorClass} moreItem${id}`;
        moreContent.innerHTML = `
            <span class="close close-item btnId${id}"></span>
            <h3 class="more__title">${name}</h3>
            <p class="more__hard">Уровень ${lvl} Сложность ${sub}</p>
            <p id="descr" class="more__text"><ins>${bold}</ins> ${descr}</p>
            ${descr2 ? '<p id="descr" class="more__text">' + descr2 + '</p>' : ''}
            ${duration ? '<p class="more__duration">' + duration + '</p>' : ''}
            <div class="more__btns">
                <span id="copy-btn" class="btn copy-btn copyBtn${id}" data-id="${dataId}">Copy link</span>
                <a id="go-btn" class="btn copy-btn" href="${url}" target="_blank">Go</a>
                ${project ? '<a id="project-btn" class="btn more-btn" href="' + project + '"target="_blank">Project</a>' : ''}
            </div>`;
        moreContentWrapper.prepend(moreContent);

        document.querySelector(`.btnId${id}`).addEventListener('click', ()=>{
            moreContent.remove();
        });

        addListenerToCopyBtn(document.querySelector(`.copyBtn${id}`));
    }
    moreBtnList.forEach(item => {
        item.addEventListener('click', ()=>{
            let dataId = item.getAttribute('data-id');
            moreWindow.style.right = '0px';
            buildMoreBlock(map[dataId], dataId);
        });
    });
}