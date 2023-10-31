import { createListItem } from './itemListCreator.js';
import { getUserData, displayTarget } from './getUserData.js';
import {setEatenNum, setNewTargetBtn, handleSetNewTarget, checkLimit} from './setCaloryTarget.js';
import handleAddNew from './addProdHandler.js';
import handleSearchInput from './sortAndFilter.js';
import { updDetails } from './diagram.js';

let {userData, latestId} = getUserData();

window.userData = userData;
window.latestId = latestId;

userData.products.forEach((product) => {
    createListItem(product);
    setEatenNum();
    updDetails();
});

document.querySelector('.add-new').addEventListener('click', (e) => {
    e.preventDefault();
        handleAddNew();
        checkLimit();
        setEatenNum();
        updDetails();
});

document.querySelector('.prod-search_input').addEventListener('keyup', handleSearchInput);
checkLimit();
displayTarget();
handleSetNewTarget();
setNewTargetBtn();
updDetails();