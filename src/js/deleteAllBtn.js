import {setEatenNum, checkLimit} from "./setCaloryTarget.js";
import {setUserData} from "./localStorage.js";
import updDiagramField from "./diagram.js";

export default function handleDeleteAllBtn () {
    document.querySelector('.delete-all-btn').addEventListener('click', () => {
        
        let userData = {};
            userData.products = [];

        setUserData(userData);
        
        document.querySelectorAll('.table-body__row').forEach((row) => {
            row.remove();
        })
        
        localStorage.setItem('userData', JSON.stringify(userData));
            checkLimit();
            setEatenNum();
            updDiagramField(userData);
    })

}