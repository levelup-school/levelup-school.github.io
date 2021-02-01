import createMap from './js/createMap';
import navigation from './js/navigation';
import hexLight from './js/hexLight';

window.addEventListener('DOMContentLoaded', () => {
    const scratch = require('./js/scratch');

    hexLight('main.aboutme', '.aboutme__light');
    createMap(scratch, '.levels');
    navigation('#toTop', 600);
});

