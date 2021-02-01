'use strict';

export default function createMap (map, parentSelector){
    const parent = document.querySelector(parentSelector);

    function addLevel (levelNum){
        const level = document.createElement ('div');
        level.className = `lvl${levelNum}`;
        level.innerHTML = `<h2 class="levels__header">Уровень ${levelNum}</h2>
                        <div class="levels__items"></div>`;

        parent.appendChild(level);
    }

    function addLevelItem ({name, type, sub, bold}, levelNum){
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
                                <span class="levels__btn bg-c">Copy link</span>
                                <span class="levels__btn bg-m">More</span>
                            </div>
                        </div>`;
        levelParent.appendChild(item);
    }
    function getas (){
        let lvlsNum = [0];
        map.forEach(item => {
            if (item.lvl > lvlsNum[lvlsNum.length-1]){
                lvlsNum.push(item.lvl);
                addLevel(item.lvl);
                console.log(lvlsNum);
            }
            addLevelItem(item, item.lvl);
        });
    }
    addLevel(0);
    getas();

}
