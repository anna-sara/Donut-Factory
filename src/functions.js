
// Functions that are used in the app

//Fuction that take parameters and creates a element and returns it.
const createAnElement = (elm, string) => {
    let element = document.createElement(`${elm}`);
    element.textContent = `${string}`;
    return element;
};

export {createAnElement};