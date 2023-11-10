import { createListItem } from './itemListCreator.js';
import { getUserData, displayTarget } from './getUserData.js';
import {setEatenNum, setNewTargetBtn, handleSetNewTarget, checkLimit} from './setCaloryTarget.js';
import handleAddNew from './addProdHandler.js';
import handleSearchInput from './sortAndFilter.js';
import  updDiagramField  from './diagram.js';
import handleDeleteAllBtn from './deleteAllBtn.js';

let {userData, latestId} = getUserData();

window.userData = userData;
window.latestId = latestId;

userData.products.forEach((product) => {
    createListItem(product);
    setEatenNum();
    updDiagramField();
});

document.querySelector('.add-prod-panel__form').addEventListener('submit', (e) => {
    e.preventDefault();
        handleAddNew();
        checkLimit();
        setEatenNum();
        updDiagramField();
})

document.querySelector('.prod-search_input').addEventListener('keyup', handleSearchInput);
handleDeleteAllBtn();
checkLimit();
displayTarget();
handleSetNewTarget();
setNewTargetBtn();
updDiagramField();