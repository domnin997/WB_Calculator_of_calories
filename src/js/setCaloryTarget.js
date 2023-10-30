import {setTarget, getTarget} from './getUserData.js';


function calcTotalEaten () {
    let totalEaten = 0;

    userData.products.forEach((prod) => {
        totalEaten+= +prod.calories;
    });

    return totalEaten;
}

function setEaten () {
    
    const totalEaten = calcTotalEaten();

    document.querySelector('.total__number').innerText = totalEaten;

};

function setTarget2 () {
    document.querySelector('.set-target-btn').addEventListener('click', (event) => {
        event.preventDefault();
        const newTarget = +document.querySelector('.calory-target-input').value;
        setTarget(newTarget);
        document.querySelector('.limit__number').innerText = newTarget;
        document.querySelector('.modal-overlay').classList.add('hidden');
    })
}

function handleClick () {
    document.querySelector('.limit-btn').addEventListener('click', () => {
        document.querySelector('.modal-overlay').classList.remove('hidden');
    })
}

function checkLim () {
    const target = getTarget();
    const totalEaten = calcTotalEaten();
    
    if (target < totalEaten) {
        document.querySelector('.total-limit__warning').classList.remove('hidden');
    } else {
        document.querySelector('.total-limit__warning').classList.add('hidden');
    }
}

export const checkLimit = checkLim;
export const handleSetNewTarget = handleClick;
export const setNewTargetBtn = setTarget2;
export const setEatenNum = setEaten;