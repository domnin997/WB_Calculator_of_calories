function getData () {
    
    if (localStorage.userData) {

        const userData = JSON.parse(localStorage.userData);

        if (userData.products.length === 0) {
            
            return {
                userData,
                latestId: 0
            }

        } else if (userData.products.length > 0) {

            const arrToSort = userData.products;
                  arrToSort.sort((a, b) => {
                    return  b.id - a.id;
                  })
  
            const latestId = arrToSort[0].id
            
            return {userData, latestId};
            
            }

    } else {
        
        const userData = {
            products: [],
        };

        return {userData, latestId: 0}
    }
}

function getTarget () {
    if (localStorage.caloryTarget) {
        return JSON.parse(localStorage.caloryTarget);
    } else {
        return 0;
    }
}

function displTarget () {
    const target = getTarget();
    document.querySelector('.limit__number').innerText = target;
}

function setTarget (target) {
    localStorage.setItem('caloryTarget', target);
}

export const getTargetValue = getTarget;
export const setTargetValue = setTarget;
export const getUserData = getData;
export const displayTarget = displTarget;