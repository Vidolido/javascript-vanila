const insertRow = () => {
    let mainTable = document.getElementById('sampleTable').firstElementChild;
    const createTableRow = document.createElement('tr');
    const createTableData1 = document.createElement('td');
    const createTableData2 = document.createElement('td');

    createTableData1.innerText = `Row${mainTable.children.length+1} cell1`;
    createTableRow.appendChild(createTableData1);

    createTableData2.innerText = `Row${mainTable.children.length+1} cell2`;
    createTableRow.appendChild(createTableData2);

    mainTable.appendChild(createTableRow)
}