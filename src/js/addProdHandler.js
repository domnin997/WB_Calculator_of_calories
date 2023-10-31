import { createListItem } from "./itemListCreator.js";

export default function handleAddNew () {
    const form = document.querySelector('.add-prod-panel__form');
    
    let newProdInfo = new FormData(form);
    let prodInfoArr = [];
    let newProd = {id: latestId + 1};
    
    for (let [key, value] of newProdInfo) {
        newProd[key] = value;
        prodInfoArr.push(value);
    }
    
    userData.products.push(newProd);

    localStorage.setItem('userData', JSON.stringify(userData));

    createListItem(newProd);

    latestId++;

    form.reset();
}