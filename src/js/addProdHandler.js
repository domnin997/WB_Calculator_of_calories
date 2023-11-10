import { createListItem } from "./itemListCreator.js";
import makeNumFormat from "./makeNumFomat.js";

export default function handleAddNew () {
    const form = document.querySelector('.add-prod-panel__form');
    
    let newProdInfo = new FormData(form);
    let prodInfoArr = [];
    let newProd = {id: latestId + 1};
    
    for (let [key, value] of newProdInfo) {
        if (!value) {
            newProd[key] = 0;
            prodInfoArr.push(0);
        } else {
            newProd[key] = value;
            prodInfoArr.push(value);
        }
    }
    
    userData.products.push(newProd);

    localStorage.setItem('userData', JSON.stringify(userData));

    createListItem(newProd);

    latestId++;

    form.reset();
}

const digitsInputs = document.querySelectorAll('.digits-input');

digitsInputs.forEach((input) => {
    input.addEventListener(('input'), () => {makeNumFormat(input)});
})