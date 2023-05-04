const form= document.querySelector('form');
const gridInputSize= document.querySelector('.grid-input-size');
const gridDiv= document.querySelector('.grid-div'); 
const gridSquare = document.querySelectorAll('.grid-square');
const colorPicked = document.querySelector('.color-picker').value;
const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOR = '#8fbc8f';
let gridSize = DEFAULT_GRID_SIZE;
let newColor = DEFAULT_COLOR;

// default grid

for (let i = 0; i< gridSize*gridSize; i++){
    let grid= document.createElement('div');
    grid.className='grid-square';
    grid.style.height = 650/gridSize + 'px';
    grid.style.width = 650/gridSize + 'px';
    grid.style.backgroundColor = DEFAULT_COLOR;
    gridDiv.appendChild(grid);

  }


let newGridSize = function(event) {
    event.preventDefault();
    gridSize= document.querySelector('#grid-size').value
    if (gridSize == "")
    return;
    else if (gridSize > 64){
        gridSize = 64;
    }else if (gridSize < 0){
        gridSize = 2;
    }

    gridInputSize.innerText = `Grid size chosen: ${gridSize} x ${gridSize}`;
    newGridSize=gridSize;


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
        grid.style.height = 650/gridSize + 'px';
        grid.style.width = 650/gridSize + 'px';
        grid.style.backgroundColor = DEFAULT_COLOR;
        gridDiv.appendChild(grid);

        }
    }
}

form.addEventListener('submit', newGridSize);


document.addEventListener('mousedown', function(event){

  
    if (event.target.matches('.grid-square')){
        event.target.style.backgroundColor = 'black';
    }
        
})

function changeColor(){

    document.querySelector(".color-picker").addEventListener('input', (e) => {
        newColor = e.target.value;

        document.addEventListener('mousedown', function(event){

  
        if (event.target.matches('.grid-square')){
            event.target.style.backgroundColor = newColor;
        }

})

    });
};
changeColor();


document.querySelector('.erase').addEventListener('click', function(event){
    if (event.target.matches('.erase')){
        newColor = DEFAULT_COLOR;
    }
    document.addEventListener('mousedown', function(event){

  
        if (event.target.matches('.grid-square')){
            event.target.style.backgroundColor = newColor;
        }

})
    
})