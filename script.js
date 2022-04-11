const grid = document.querySelector('#grid')
const resetBtn = document.querySelector('#reset')

// Create a function that changes every cell's background color
function fillCell () {
    let cellList = document.querySelectorAll('.cell');
    cellList.forEach(cell => {
        cell.addEventListener('mouseenter', function(){
            cell.style.backgroundColor = 'black'
            return;
        })
    })
    return;
}


// Create a function to generate all the cells needed within the grid.
function createCells (grid, dimensions) {
    // Determine how many cells are supposed to be within the grid by multiplying its dimensions.
    const totalCells = dimensions * dimensions;
    // Loop over the total amount of cells and create a cell element each iteration.
    for(i = 0; i < totalCells; i++) {
        let cell = document.createElement('div');
        // Add the .cell class to each div element so they all have the same styles applied
        cell.classList.add('cell');
        // Add an event listener that changes the background color of the cell when it's hovered over
        cell.addEventListener('mouseenter', fillCell)
        // Append the div element to the .grid div 
        grid.append(cell);
    }
    return;
}

createCells(grid, 16);

// When the reset button is clicked, change all of the cells back to their original color.
resetBtn.addEventListener('click', function(){
    const cellList = document.querySelectorAll('.cell');
    cellList.forEach(cell => cell.remove());
    // Prompt the user to enter the new dimensions for the new grid with the max being 100px
    let newDimensions = prompt('Please enter the dimensions you want for the new grid! (e.g. 20) 100 IS THE MAX');
    newDimensions = Number(newDimensions);
    // If the user entered something that isn't a number, alert the user!
    if(newDimensions == NaN) {
        alert(`Invalid input! Please enter a number next time!`)
        return;
    } else if(newDimensions > 100) {
        alert(`Please enter a number less than 100!`)
        return;
    } else {
        console.log(newDimensions);
        grid.style.gridTemplateColumns = `repeat(${newDimensions}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${newDimensions}, 1fr)`;
        createCells(grid, newDimensions);
        return;
    }
})