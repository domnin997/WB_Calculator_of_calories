import { createListItem } from "./createListItem.js";
import { getUserData, setUserData } from "./localStorage.js";
import updDiagramField from "./diagram.js";

export default function handleAddNew () {
    
    const form = document.querySelector('.add-prod-panel__form');
    
    let newProdInfo = new FormData(form);
    let prodInfoArr = [];
    let newProd = {id: crypto.randomUUID()};
    
    for (let [key, value] of newProdInfo) {
        if (!value) {
            newProd[key] = 0;
            prodInfoArr.push(0);
        } else {
            newProd[key] = value;
            prodInfoArr.push(value);
        }
    }
    
    const userData = getUserData();
          userData.products.push(newProd);
    
          setUserData(userData);
          updDiagramField(userData);
          createListItem(newProd);
    
          form.reset();
}