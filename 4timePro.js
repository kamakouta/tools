let table = document.getElementById('remote_treetable');
let mngArray   = ['ore'];
let infraArray = ['in01', 'in02'];
let qcArray    = ['qc01', 'qc02'];
let appArray   = ['ap01', 'ap02'];
let gisuiArray = ['gi01', 'gi02'];
let delRow     = [];

for (let row of table.rows) {
  if (mngArray.indexOf(row.cells[0].innerText)>=0) {
    for (let cell of row.cells) {
      cell.style.backgroundColor = '#fcc601';
    }
  } else if (infraArray.indexOf(row.cells[0].innerText)>=0) {
    for (let cell of row.cells) {
      cell.style.backgroundColor = '#e5ffe5';
    }
  } else if (qcArray.indexOf(row.cells[0].innerText)>=0) {
    for (let cell of row.cells) {
      cell.style.backgroundColor = '#ffe5e5';
    }
  } else if (appArray.indexOf(row.cells[0].innerText)>=0) {
    for (let cell of row.cells) {
      cell.style.backgroundColor = '#e5ffff';
    }
  } else if (gisuiArray.indexOf(row.cells[0].innerText)>=0) {
    for (let cell of row.cells) {
      cell.style.backgroundColor = '#ffe5ff';
    }
  } else {
    if (row.rowIndex > 3) {
      delRow.unshift(row.rowIndex);
    }
  }
}

for (const delindex of delRow) {
  table.deleteRow(delindex);
}
