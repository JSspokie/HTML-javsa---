function convert(){
    var inputStr = document.getElementById('input').value;
    var inputNum = Number(inputStr);
    const array2D = [
        ['Currency', 'Todays exchange rate', 'Amount you will receive in ZAR'],
        ['USD', 18.24, 'num'],
        ['EUR', 19.89, 'num'],
        ['GBP', 23.6, 'num']
    ];
    const container = document.getElementById('tableContainer');
    const table = document.createElement('table');


    const tmpTable = document.getElementById('tmpTable');

    tmpTable.classList.add('hidden');

    const exists = document.getElementById('calcTable');
    if(exists){
       exists.remove()
    }

    table.id = "calcTable";
    
    array2D.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        row.forEach((cell, cellIndex) => {
            const td = document.createElement(rowIndex==0?'th':'td');
            if (cell == 'num'){
                answ = inputNum * array2D[rowIndex][1]
                answ = answ.toFixed(2)
                cell = answ
            };
            td.textContent = cell;
            tr.appendChild(td); 
        });
        table.appendChild(tr);
    });

    container.appendChild(table);
}