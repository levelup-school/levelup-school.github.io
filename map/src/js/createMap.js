'use strict';
import btnFunctions from './btnFunctions';

export default function createMap (map, parentSelector){
    const parent = document.querySelector(parentSelector);

    function addLevel (levelNum){
        const level = document.createElement ('div');
        level.className = `lvl${levelNum}`;
        level.innerHTML = `<h2 class="levels__header">Уровень ${levelNum}</h2>
                        <div class="levels__items"></div>`;

        parent.appendChild(level);
    }

    function addLevelItem ({name, type, sub, bold}, id, levelNum){
        const levelParent = document.querySelector(`.lvl${levelNum} .levels__items`);
        const item = document.createElement ('div');
        let bgColorClass = (type === 'video') ? 'bg-r' :
                    (type === 'word') ? 'bg-y' :
                    (type === 'task') ? 'bg-b' : 'bg-g';
        item.className = `levels__item ${bgColorClass}`;
        item.innerHTML = `<p class="levels__lvl">${sub}</p>
                        <h3 class="levels__name-item">${name}</h3>
                        <div class="levels__btn-item">
                            <div class="levels__btn-wrapper">
                                <p class="levels__descr-item">${bold}</p>
                                <span class="levels__btn copy-btn" data-id="${id}">Copy link</span>
                                <span class="levels__btn more-btn" data-id="${id}">More</span>
                            </div>
                        </div>`;
        levelParent.appendChild(item);
    }

    function buildMap (){
        let lvlsNum = [0];
        map.forEach((item, id) => {
            if (item.lvl > lvlsNum[lvlsNum.length-1]){
                lvlsNum.push(item.lvl);
                addLevel(item.lvl);
            }
            addLevelItem(item, id, item.lvl);
        });
    }
    addLevel(0);
    buildMap();
    btnFunctions(map);
}
