export const getUserData = function () {
    
    if (localStorage.userData) {
        
        const userData = JSON.parse(localStorage.userData);
        return userData;  

    } else {
        
        const userData = {
            products: [],
        };

        return userData;
    }
}

export const setUserData = function (userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
}

export const getTargetValue = function () {
    if (localStorage.caloryTarget) {
        return JSON.parse(localStorage.caloryTarget);
    } else {
        return 0;
    }
}

export const displayTarget = function () {
    const target = getTargetValue();
    document.querySelector('.limit__number').innerText = target;
}

export const setTargetValue = function (target) {
    localStorage.setItem('caloryTarget', target);
}