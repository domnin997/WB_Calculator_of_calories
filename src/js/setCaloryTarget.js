import {setTargetValue, getTargetValue, getUserData} from './getUserData.js';
import makeNumFormat from './makeNumFomat.js';

const modalOverlay = document.querySelector('.modal-overlay'),
      limitWarning = document.querySelector('.limit__warning'),
      limitBlock = document.querySelector('.limit-block');

function calcTotalEaten () {
    let totalEaten = 0;

    const userData = getUserData();
          userData.products.forEach((prod) => {
              totalEaten+= +prod.calories;
          });

    return totalEaten;
}


export const setEatenNum = function () {
    
    const totalEaten = calcTotalEaten();
    document.querySelector('.total__calories-num').innerText = totalEaten;

};

const inputField = document.querySelector('.calory-target-input');
      inputField.addEventListener('input', () => {makeNumFormat(inputField)});

export const setNewTargetBtn = function () {
    
    document.querySelector('.set-target-btn').addEventListener('click', (event) => {
        event.preventDefault();
        const newTarget = +document.querySelector('.calory-target-input').value;
            
        setTargetValue(newTarget);
            
            document.querySelector('.limit__number').innerText = newTarget;
            modalOverlay.classList.add('hidden');
            
            checkLimit();
    })
}

export const handleSetNewTarget = function () {
    document.querySelector('.limit-btn').addEventListener('click', () => {
        modalOverlay.classList.remove('hidden');
    })
}

export const checkLimit = function  () {
    const target = getTargetValue();
    const totalEaten = calcTotalEaten();
    
    if (target < totalEaten) {
        limitWarning.classList.remove('hidden');
        limitBlock.classList.add('limit-exceeded');
    } else {
        limitWarning.classList.add('hidden');
        limitBlock.classList.remove('limit-exceeded');
    }
}

modalOverlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-window__close') || e.target.classList.contains('modal-overlay')) {
        modalOverlay.classList.add('hidden');
    }
})