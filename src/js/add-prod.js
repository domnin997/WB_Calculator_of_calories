const addProdBtn = document.querySelector('.add-btn'),
      addProdPanel = document.querySelector('.add-prod-panel'),
      addNewBtn = document.querySelector('.add-new'),
      tableBody = document.querySelector('.prod-table__body');

let isFormOpen = false;

export default function manageAdd () {
    
    function createElement (arr) {
        
        const newElement = document.createElement('tr');
        
        arr.forEach((el) => {
            let newTb = document.createElement('tb');
                newTb.innerText = el;
                    newElement.append(newTb);
        })

        tableBody.append(newElement);
    }

    function handleAddClick () {
        if (isFormOpen) {
            
        } else {
            addProdPanel.classList.remove('hidden');
            isFormOpen = true;
        }
    }
    
    function handleAddNew () {
        let newProdInfo = new FormData(document.querySelector('.add-prod-panel__form'));
        let prodInfoArr = [];
        for (let [key, value] of newProdInfo) {
            prodInfoArr.push(value);
        }
        
        createElement(prodInfoArr);
    }

    addNewBtn.addEventListener('click', (e) => {
        e.preventDefault();
            handleAddNew();
    });
    
    addProdBtn.addEventListener('click', handleAddClick);
}