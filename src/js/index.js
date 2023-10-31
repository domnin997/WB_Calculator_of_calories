import { createListItem } from './itemListCreator.js';
import { getUserData, displayTarget } from './getUserData.js';
import {setEatenNum, setNewTargetBtn, handleSetNewTarget, checkLimit} from './setCaloryTarget.js';
import handleAddNew from './addProdHandler.js';
import handleSearchInput from './sortAndFilter.js';

let {userData, latestId} = getUserData();

window.userData = userData;
window.latestId = latestId;

userData.products.forEach((product) => {
    createListItem(product);
    setEatenNum();
});

document.querySelector('.add-new').addEventListener('click', (e) => {
    e.preventDefault();
        handleAddNew();
        checkLimit();
        setEatenNum();
});

document.querySelector('.prod-search_input').addEventListener('keyup', handleSearchInput);
checkLimit();
displayTarget();
handleSetNewTarget();
setNewTargetBtn();