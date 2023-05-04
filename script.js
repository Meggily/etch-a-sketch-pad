const form= document.querySelector('form');
const gridInputSize= document.querySelector('.grid-input-size');
const gridDiv= document.querySelector('.grid-div'); 
const gridSquare = document.querySelectorAll('.grid-square');
const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOR = '#8fbc8f';
let gridSize = DEFAULT_GRID_SIZE;
let newColor = DEFAULT_COLOR;

//default grid

for (let i = 0; i< gridSize*gridSize; i++){
    let grid= document.createElement('div');
    grid.className='grid-square';
    grid.style.height = 480/gridSize + 'px';
    grid.style.width = 480/gridSize + 'px';
    grid.style.backgroundColor = DEFAULT_COLOR;
    gridDiv.appendChild(grid);

  }


let newGridSize = function(event) {
    event.preventDefault();
    gridSize= document.querySelector('#grid-size').value
    gridInputSize.innerText = `Grid size chosen: ${gridSize} x ${gridSize}`;
    newGridSize=gridSize;
    console.log(newGridSize)


    createGrid();

     function createGrid(){

        function clearGrid(){
            while (gridDiv.lastElementChild){
                gridDiv.removeChild(gridDiv.lastElementChild);
            }
        }

        clearGrid();
        
        for (let i = 0; i< gridSize*gridSize; i++){
        let grid= document.createElement('div');
        grid.className='grid-square';
        grid.style.height = 480/gridSize + 'px';
        grid.style.width = 480/gridSize + 'px';
        grid.style.backgroundColor = DEFAULT_COLOR;
        gridDiv.appendChild(grid);

        
        }
    }
}

form.addEventListener('submit', newGridSize);




