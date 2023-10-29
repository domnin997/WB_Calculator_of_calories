const addProdBtn = document.querySelector('.add-btn'),
      addProdPanel = document.querySelector('.add-prod-panel');

let isFormOpen = false;

export default function manageAdd () {
    
    function handleAddClick () {
        if (isFormOpen) {
            
        } else {
            addProdPanel.classList.remove('hidden');
            isFormOpen = true;
        }
    }
    
    addProdBtn.addEventListener('click', handleAddClick);

}