import {createListItem} from './createListItem.js';
import {getUserData, displayTarget} from './localStorage.js';
import {setEatenNum, setNewTargetBtn, handleSetNewTarget, checkLimit} from './setCaloryTarget.js';
import handleAddNew from './addProdHandler.js';
import {handleSearchInput, handleTableSort} from './sortAndFilter.js';
import updDiagramField  from './diagram.js';
import handleDeleteAllBtn from './deleteAllBtn.js';
import makeNumFormat from './makeNumFomat.js';

const inputField = document.querySelector('.calory-target-input');
const addProdForm = document.querySelector('.add-prod-panel__form');
const prodSearchInput = document.querySelector('.prod-search_input');
const digitsInputs = document.querySelectorAll('.digits-input');

let userData = getUserData();

userData.products.forEach((product) => {
    createListItem(product);
});

prodSearchInput.addEventListener('keyup', handleSearchInput);

inputField.addEventListener('input', () => {makeNumFormat(inputField)});

digitsInputs.forEach((input) => {
    input.addEventListener('input', () => {makeNumFormat(input)});
})

addProdForm.addEventListener('submit', (e) => {
    e.preventDefault();
        handleAddNew();
        checkLimit();
        setEatenNum();
})

    handleSetNewTarget();
    handleDeleteAllBtn();
    handleTableSort();   
    setEatenNum();
    checkLimit();
    displayTarget();
    setNewTargetBtn();
    updDiagramField(userData);