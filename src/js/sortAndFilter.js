export default function handleSearchInput (event) {
    
    const rows = document.querySelector('.prod-table__body').querySelectorAll('tr');
    const searchValue = event.target.value.trim();
    const regValue = new RegExp(searchValue, 'gi');
    
    if (searchValue === '') {
        rows.forEach((row) => {
            row.classList.remove('hidden');
        });
    
    } else {
        rows.forEach((row) => {
           
            if (row.querySelector('tb').innerText.match(regValue)) {
                row.classList.remove('hidden');
            } else {
                row.classList.add('hidden');
            }
        })
    }
}

const tableHeaders = document.querySelectorAll('.prod-table__th'),
      headerArrows = document.querySelectorAll('.prod-table__arrow'),
      tableBody = document.querySelector('.prod-table__body');

tableHeaders.forEach((header, index) => {  
    
    if (index !== 0 && index !== 5) {
        let ascendSort = true;
        
        const arrow = header.querySelector('.prod-table__arrow');
        header.addEventListener('click', () => {
            headerArrows.forEach((arrow) => {
                arrow.classList.remove('active');
            });
            arrow.classList.add('active');
            arrow.classList.toggle('ascend', ascendSort);
            ascendSort = arrow.classList.contains('ascend') ? false : true;
            sortTable(index, ascendSort);
        });
    }
})

function sortTable (column, ascendSort) {
    Array.from(document.querySelectorAll('.table-body__row')).sort((a, b) => {
        
        let firstRow = a.querySelectorAll('tb')[column].textContent.toLowerCase(),
            secondRow = b.querySelectorAll('tb')[column].textContent.toLowerCase();
       
        return ascendSort ? (firstRow - secondRow) : (secondRow - firstRow);
       
    }).map(sortedRow => tableBody.append(sortedRow));
}