const container = document.querySelector(".container");

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "cell";
    };
};

createGrid(16, 16);

let sketchCells = document.getElementsByClassName('cell');

function paintItBlack(e) {
    e.target.style.setProperty('background-color', 'black');
};

for (let i = 0; i < sketchCells.length; i++) {
    sketchCells[i].addEventListener('mouseover', paintItBlack);
};




// this helped point me in the right direction of CSS Grid and how to set it dynamically:
// https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript