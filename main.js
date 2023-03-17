setBoardGridSize(50,50)
appendSquares(50,50);
addEventHoverTrail()

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
  const squares = document.querySelectorAll(".square")
  squares.forEach(square => {

    square.addEventListener('mouseover', (e)=> {
    if(e.buttons === 1){
      square.classList.add("painted")
    }
    });

    square.addEventListener('click', ()=>{
      square.classList.add("painted")
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