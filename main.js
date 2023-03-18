const newBoardButton = document.querySelector(".new-board-button"); 
const deleteButton = document.querySelector(".delete-button");
const colorPicker = document.getElementById('color-picker');
let currentPencilColor = "rgba(0, 0, 0, 1)";


deleteButton.addEventListener('click', deleteBoard)
newBoardButton.addEventListener('click', replaceBoard)
colorPicker.addEventListener('change', e => changePencilColor(e.detail.rgba))

placeDefaultBoard()

function appendSquares(width, height){
  const board = document.querySelector(".board")
  const size = width * height;

  for(let i = 0; i < size; i++){
    const square = document.createElement("div");
    square.classList.add("square")
    board.appendChild(square);
  }
}

function addEventHoverTrail(){
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {

    square.addEventListener('mouseover', (e)=> {
    if(e.buttons === 1){
      square.style.backgroundColor = currentPencilColor;
    }
    });

    square.addEventListener('click', ()=>{
      square.style.backgroundColor = currentPencilColor;
    });
  
  })
}

function setBoardGridSize(width, height){
  const board = document.querySelector(".board");
  console.log(board)
  board.style.cssText = `
  grid-template-columns: repeat(${width}, 1fr);
  grid-template-rows: repeat(${height}, 1fr);
  `
}

function deleteBoard(){
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => square.style.backgroundColor = "");
}

function replaceBoard(){
  const width = prompt("Width");
  const height = prompt("Height");

  if(!Number.isFinite(+width) || !Number.isFinite(+height)){
    return;
  }

  const board = document.querySelector(".board");
  board.innerHTML=""
  setBoardGridSize(width, height)
  appendSquares(width, height);
  addEventHoverTrail()
}

function placeDefaultBoard(){
  const board = document.querySelector(".board");
  setBoardGridSize(20, 20)
  appendSquares(20, 20);
  addEventHoverTrail()
}

function changePencilColor(){
  currentPencilColor = colorPicker.rgba;
}