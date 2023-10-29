import manageAdd from './add-prod.js';
import { createListItem } from './itemListCreator.js';
import { getUserData } from './getUserData.js';
import setEaten from './setCaloryTarget.js';
import handleAddNew from './addProdHandler.js';

let {userData, latestId} = getUserData();

window.userData = userData;
window.latestId = latestId;

userData.products.forEach((product) => {
    createListItem(product);
    setEaten();
});

document.querySelector('.add-new').addEventListener('click', (e) => {
    e.preventDefault();
        handleAddNew();
        setEaten();
});

manageAdd();