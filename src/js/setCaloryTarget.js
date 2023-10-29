export default function setEaten () {
    
    let totalEaten = 0;

    userData.products.forEach((prod) => {
        totalEaten+= +prod.calories;
    });

    document.querySelector('.total__number').innerText = totalEaten;

};