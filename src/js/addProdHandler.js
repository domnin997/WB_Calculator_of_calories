import { createListItem } from "./itemListCreator.js";

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
    input.addEventListener(('input'), () => {
        if (!input.value) {
            return;
        
        } else {
            input.value = input.value.replace(/[^\d,.]/g,'');
            input.value = input.value.replace(/,/g, ".");
            if (input.value.match(/\./g).length > 1) {
                input.value = input.value.substr(0, input.value.lastIndexOf("."));
            }
        } 
    })
})