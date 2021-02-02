'use strict';
import btnFunctions from './btnFunctions';

export default function createMap(map, parentSelector) {
    const parent = document.querySelector(parentSelector);

    function addLevel(levelNum) {
        const level = document.createElement('div');
        level.className = `lvl${levelNum}`;
        level.innerHTML = `<h2 class="levels__header">Уровень ${levelNum}</h2>
                        <div class="levels__items"></div>`;
        parent.appendChild(level);
    }
    // id - свойство объекта, dataId -порядковый номер объекта в массиве
    function addLevelItem({
        name,
        type,
        sub,
        bold
    }, dataId, levelNum) {
        const levelParent = document.querySelector(`.lvl${levelNum} .levels__items`);
        const item = document.createElement('div');
        let bgColorClass = (type === 'video') ? 'bg-r' :
            (type === 'word') ? 'bg-y' :
            (type === 'task') ? 'bg-b' : 'bg-g';
        item.className = `levels__item ${bgColorClass}`;
        item.innerHTML = `<h4 class="levels__lvl">${sub}</h4>
                        <h3 class="levels__name-item">${name}</h3>
                        <div class="levels__btn-item">
                            <div class="levels__btn-wrapper">
                                <p class="levels__descr-item">${bold}</p>
                                <span class="btn copy-btn" data-id="${dataId}">Copy link</span>
                                <span class="btn more-btn" data-id="${dataId}">More</span>
                            </div>
                        </div>`;
        levelParent.appendChild(item);
    }
    function buildMap() {
        let lvlsNum = [0];
        map.forEach((item, dataId) => {
            if (item.lvl > lvlsNum[lvlsNum.length - 1]) {
                lvlsNum.push(item.lvl);
                addLevel(item.lvl);
            }
            addLevelItem(item, dataId, item.lvl);
        });
    }
    addLevel(0);
    buildMap();
    btnFunctions(map);
}