const minSize = 2
const maxSize = 100

const gridContainer = document.querySelector('.container')
const resetButton = document.querySelector('button')

resetButton.addEventListener('click', resetGrid)

makeGrid(16)

function makeGrid(gridSize) {
    gridContainer.replaceChildren()
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

function resetGrid() {
    let gridSize = prompt('Enter grid size:','16')
    if(gridSize === null || isNaN(gridSize)) return
    gridSize = Math.min(Math.max(minSize, Math.round(gridSize)), maxSize)
    makeGrid(gridSize)
}