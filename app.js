const gridContainer = document.querySelector('.container')
let gridSize = 16

makeGrid()

function makeGrid() {
    const squareWidth = 100.0/gridSize+'%';
    for(let i=0; i<gridSize; ++i){
        for(let j=0; j<gridSize; ++j){
            const gridSquare = document.createElement('div')
            gridSquare.classList.add('grid-square')
            gridSquare.style.width = squareWidth
            gridSquare.style.paddingTop = squareWidth
            gridSquare.addEventListener('mouseover', e => {
                e.currentTarget.classList.add('grid-square-hovered')
            })
            gridContainer.appendChild(gridSquare)
        }
    }

}