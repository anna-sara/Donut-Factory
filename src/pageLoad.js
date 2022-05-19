
import {createMain} from './createMain';
import {createIndexContent} from './createIndexContent';
import {createMenuContent} from './createMenuContent';
import {createContactContent} from './createContactContent';


// Loades the page. Index page is default and then the page is selected by which button/link that is clicked
const pageLoad = () => {
    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('bodyContainer')

    let main = createMain();
    bodyContainer.appendChild(main);

    let leftMain = main.querySelector('.leftMain');
    let rightMain = main.querySelector('.rightMain');

    //Load content to index page as default
    leftMain.append(createIndexContent());
    
    // Call function addEventLinks when DOMContent is fully loaded. 
    document.addEventListener('DOMContentLoaded', function() {
        addEventLinks();
    });

    // Function that sets eventlistener on every element with the classname link. 
    function addEventLinks() {
        let menuLinks = document.querySelectorAll('.link');

        menuLinks.forEach(link => {
        link.addEventListener('click', chooseContent);
        });
    }

    /* Function that based on the target elements text content chooses which page content that should 
    be loaded after current page content is removed.
    The function addEventLinks is called after content is loaded to set new eventlistners on .link elements.*/
    function chooseContent(e) {
        let link =  e.target.textContent;
        let textContainer = document.querySelector('.textContainer');

        if(link === 'Menu' || link === "View our menu") {
            textContainer.remove();
            rightMain.className = 'rightMain menuPage';
            leftMain.appendChild(createMenuContent());
            addEventLinks();
        } else if (link === 'Contact' || link === "Contact us") {
            textContainer.remove();
            rightMain.className = 'rightMain contactPage';
           leftMain.appendChild(createContactContent());
           addEventLinks();
        } else {
            textContainer.remove();
            rightMain.className = 'rightMain indexPage';
            leftMain.appendChild(createIndexContent());
            addEventLinks();
        }
        

    }

    return bodyContainer;

};






export default pageLoad;
