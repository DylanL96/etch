//set constant global variable
const container = document.querySelector('.container')

//function that creates the grid size
function createGrid(size){
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    size *= size;
    while (size--){
        const div = document.createElement('div');
        div.addEventListener('mouseover', mouseIn);  //mouseover event that causes the divs to change colors
        container.appendChild(div)
    }
}


//removes the grid
function clearGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

//asking user for grid size
function gridSize(){
    grid = prompt('What would you like the dimensions of the grid to be?')
    clearGrid()
    createGrid(grid)
}


//Creates the colours after each time the mouse enters a cell
tag = document.querySelectorAll('.box');
tag.forEach(element=>{
    element.addEventListener('mouseover',mouseIn);
})


//generate random colors using RGB value
//Math.random selects a random number between 0 and 1. But it does not include 0 or 1. For example, 0.324. We multiply it by 256 because then it will give a number between 0 and 256. 256 is the number we use because the red green and blue have 8 bits each which each have an integer value ranging from 0 to
//Math.floor will then rounds down to the nearest integer. For example, 104.912 -> 104
function randomColor(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    // let clr = console.log(`rgb${r},${g},${b}`)
    // console.log(clr)
    return `rgb(${r},${g},${b})`
};

//Gives the cell a colour
function mouseIn(){
    this.style.background =randomColor();

}

//default grid size of 16x16
createGrid(16)




