const grid = document.querySelector('#grid')
const resetBtn = document.querySelector('#reset')

// Create a function to generate all the cells needed within the grid.
function createCells (grid, rows, columns) {
    // Determine how many cells are supposed to be within the grid by multiplying its dimensions.
    const totalCells = rows * columns;
    // Loop over the total amount of cells and create a cell element each iteration.
    for(i = 0; i < totalCells; i++) {
        let cell = document.createElement('div');
        // Add the .cell class to each div element so they all have the same styles applied
        cell.classList.add('cell');
        // Add an event listener that changes the background color of the cell when it's hovered over
        cell.addEventListener('mouseenter', function(){
            cell.style.backgroundColor = 'black'
            return;
        })
        // Append the div element to the .grid div 
        grid.append(cell);
    }
    return;
}

createCells(grid, 16, 16);

// When the reset button is clicked, change all of the cells back to their original color.
resetBtn.addEventListener('click', function(){
   const cellList = document.querySelectorAll('.cell');
   cellList.forEach(cell => cell.style.backgroundColor = 'white');
   return;
})