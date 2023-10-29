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
                      b.id - a.id;
                  })

            const latestId = arrToSort[0].id
        
            return {userData, latestId};
            
            }

    } else {
        
        const userData = {
            target: 0,
            products: [],
        };

        return {userData, latestId: 0}
    }
}

export const getUserData = getData;