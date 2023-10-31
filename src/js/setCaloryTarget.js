import {setTargetValue, getTargetValue} from './getUserData.js';

const modalOverlay = document.querySelector('.modal-overlay'),
      limitWarning = document.querySelector('.limit__warning'),
      limitBlock = document.querySelector('.limit-block');

function calcTotalEaten () {
    let totalEaten = 0;

    userData.products.forEach((prod) => {
        totalEaten+= +prod.calories;
    });

    return totalEaten;
}

function setEaten () {
    
    const totalEaten = calcTotalEaten();

    document.querySelector('.total__calories-num').innerText = totalEaten;

};

function setTarget2 () {
    document.querySelector('.set-target-btn').addEventListener('click', (event) => {
        event.preventDefault();
        const newTarget = +document.querySelector('.calory-target-input').value;
        setTargetValue(newTarget);
        document.querySelector('.limit__number').innerText = newTarget;
        modalOverlay.classList.add('hidden');
        checkLim();
    })
}

function handleClick () {
    document.querySelector('.limit-btn').addEventListener('click', () => {
        modalOverlay.classList.remove('hidden');
    })
}

function checkLim () {
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

export const checkLimit = checkLim;
export const handleSetNewTarget = handleClick;
export const setNewTargetBtn = setTarget2;
export const setEatenNum = setEaten;