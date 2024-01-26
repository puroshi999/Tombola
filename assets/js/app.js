let righe = 10;
let colonne = 10;
let numeriEstratti = [];

function DisegnaTabella() {
    let div1 = document.getElementById('div1');
    let tabella = document.createElement("table");

    var i = 1;
    for (var r = 0; r < righe; r++) {
        let row = document.createElement("tr");
        for (var c = 0; c < colonne; c++, i++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(i);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tabella.appendChild(row);
    }

    div1.appendChild(tabella);
}

function Estrai() {
    let div1 = document.getElementById('div1');
    let table = div1.querySelector('table'); 

    if (table) {
        let rows = table.getElementsByTagName('tr');

        
        let randomRow, randomCol;

        
        do {
            randomRow = Math.floor(Math.random() * rows.length);
            randomCol = Math.floor(Math.random() * rows[0].getElementsByTagName('td').length);
        } while (numeriEstratti.includes(rows[randomRow].getElementsByTagName('td')[randomCol].innerText));

        numeriEstratti.push(rows[randomRow].getElementsByTagName('td')[randomCol].innerText);

        for (let r = 0; r < rows.length; r++) {
            let cells = rows[r].getElementsByTagName('td');

            for (let c = 0; c < cells.length; c++) {
                let cellText = cells[c].innerText || cells[c].textContent;

                if (r === randomRow && c === randomCol) {
                    
                    cells[c].style.backgroundColor = 'red';
                    console.log('Random number extracted from cell ' + (r + 1) + '-' + (c + 1) + ': ' + cellText);
                }
            }
        }
    }
}

DisegnaTabella();

