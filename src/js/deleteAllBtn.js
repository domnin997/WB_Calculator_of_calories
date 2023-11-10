import {setEatenNum, checkLimit} from "./setCaloryTarget.js";
import updDiagramField from "./diagram.js";

export default function handleDeleteAllBtn () {
    document.querySelector('.delete-all-btn').addEventListener('click', () => {
        
        userData.products = [];
        latestId = 0;
        
        document.querySelectorAll('.table-body__row').forEach((row) => {
            row.remove();
        })
        
        localStorage.setItem('userData', JSON.stringify(userData));
            checkLimit();
            setEatenNum();
            updDiagramField();
    })

}