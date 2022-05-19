import logoDonut from './img/logoDonut.svg'

// Create the nav and return it.
const createNav = () => {

    const nav = document.createElement('nav');
    nav.className = 'nav'
    const logoContainer = document.createElement('img');
    //logoContainer.textContent = 'DounatFactory';
    logoContainer.src = logoDonut;
    const menu = document.createElement('ul')
    menu.classList.add('mainMenu')
    let ulItems = ['Home','Menu', 'Contact']

    ulItems.forEach( item  => {
        let li = document.createElement('li');
        li.setAttribute('class','link')
        li.textContent = item;
        menu.appendChild(li);

    });

    nav.appendChild(logoContainer);
    nav.appendChild(menu);
    
    return nav;
};


export {createNav};