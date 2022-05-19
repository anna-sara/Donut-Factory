
import {createAnElement} from './functions';

// Create content for contact page and return it.
const createContactContent = () => {

    let textContainer = createAnElement('div' ,'');
    textContainer.classList.add('textContainer');
    let h1 = createAnElement('h1', 'Contact us'); 
    let adress = createAnElement('h2', 'Visit us or Call us');  
    let adressText = createAnElement('p','10 Donutland Road, Fairhaven, 06342'); 
    let numberText= createAnElement('p', '744-425-5634'); 
    let open = createAnElement('h2',  'Open'); 
    let openText= createAnElement('p', 'Mon-Sun: 10am - 5pm'); 
    let button = createAnElement('button', 'View our menu'); 
    button.classList.add('blue', 'link');
    

    textContainer.append(h1,adress, adressText, numberText,open, openText, button);


    return textContainer;
};



export {createContactContent};