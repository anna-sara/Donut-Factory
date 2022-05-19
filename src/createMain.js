
import {createNav} from './createNav';

// Create main and return it.
const createMain = () => {
    const main = document.createElement('main');
    main.className = 'indexMain'
    let leftMain = document.createElement('div');
    leftMain.className = 'leftMain';
    let rightMain = document.createElement('div');
    rightMain.className = 'rightMain indexPage';
    
    leftMain.appendChild(createNav());
    
    main.appendChild(leftMain);
    main.appendChild(rightMain);
    
    return main;
    
};



export {createMain};



