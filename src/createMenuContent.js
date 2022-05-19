
import {createAnElement} from './functions';

// Create content for menu page and return it.
const createMenuContent = () => {

    let textContainer = createAnElement('div' ,'');
    textContainer.classList.add('textContainer');
    let h1 = createAnElement('h1', 'Come and taste one'); 
    let size = createAnElement('h2', 'Price is incl. icing & topping');  
    let sizeUl = createAnElement('ul', '');  

    let sizeUlItems = ['Small: 1.5$','Medium: 2$'];

    sizeUlItems.forEach( item  => {
        let li =  createAnElement('li', item);  
        li.setAttribute('class','menuPageLi')
        sizeUl.appendChild(li);
    });
   
    let icingText= document.createElement('p');
    icingText.innerHTML = "<span>Icing:</span> Chocolate, Strawberry, Lemon, Blueberry";
                                    
    let toppingText= document.createElement('p');
    toppingText.innerHTML = "<span>Topping:</span> We have a lot of different toppings so we now that you will find something you like.";
    
    let button = createAnElement('button', 'Contact us'); 
    button.classList.add('pink', 'link');


    textContainer.append(h1,size, sizeUl, icingText, toppingText, button);

    
    return textContainer;
};


export {createMenuContent};