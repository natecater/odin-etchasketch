const container = document.querySelector(".container");
const clearBtn = document.querySelector("#clear");
const updateBtn = document.querySelector("#change");

function paintItBlack(e) {
    e.target.style.setProperty('background-color', 'black');
};

function createGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "cell";
        cell.addEventListener('mouseover', paintItBlack);
    };
};

createGrid(16, 16);

let sketchCells = document.getElementsByClassName('cell');

function clearGrid() {
    for (let i = 0; i < sketchCells.length; i++) {
        sketchCells[i].style.setProperty('background-color', 'white');
    };
};

function updateGrid() {
    let input = 16;

    do {
        input = parseInt(prompt("Please enter the number of rows/columns you want (no more than 100): "));

        if (!Number.isInteger(input) || input < 1 || input > 100) {
            alert("Invalid input! Enter a number between 1 and 100");
        }
    } while (!Number.isInteger(input) || input < 1 || input > 100);

    deleteCells();

    createGrid(input, input);

}

function deleteCells() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.remove();
    });
}

updateBtn.addEventListener('click', updateGrid);
clearBtn.addEventListener('click', clearGrid);


/*
for (let i = 0; i < sketchCells.length; i++) {
    sketchCells[i].addEventListener('mouseover', paintItBlack);
};
*/



// this helped point me in the right direction of CSS Grid and how to set it dynamically:
// https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript