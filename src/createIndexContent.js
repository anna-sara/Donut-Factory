
import {createAnElement} from './functions';


// Create content for index page and return it.
const createIndexContent = () => {

    let textContainer = createAnElement('div' ,'');
    textContainer.classList.add('textContainer');
    let h1 = createAnElement('h1', 'Donut worry, be happy!'); 
    h1.classList.add('indexPageh1');
    let p = createAnElement('p', 
    'The sweetest place you’ll find locally in the city with the best selection around!' 
    + 'Our donuts are handcrafted and then dipped into your choice of icing, then finished'
    + 'with your choice of topping and drizzle.');  
    let button = createAnElement('button', 'View our menu'); 
    button.classList.add('yellow', 'link');

  

    textContainer.append(h1,p,button);

    
    
    return textContainer;
};


export {createIndexContent};