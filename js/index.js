// Game Constants & Variables

let direction = { x: 0, y: 0 };
const foodSound = new Audio("./music/food.mp3");
const gameOverSound = new Audio("./music/gameover.mp3");
const moveSound = new Audio("./music/move.mp3");
const musicSound = new Audio("./music/music.mp3");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
const board=document.getElementById("board");

/* ---------------------------------------------------------------- */

//game Functions
function main(cmain) {
  window.requestAnimationFrame(main);
  if ((cmain - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  gameEngine();
}

/* --------------------------------------------------------------- */

function gameEngine() {
  //part1: Updating the snake array
  //part 2: dispay the snake food
  board.innerHTML = "";
  snakeArr.forEach((e, index)=>{
      snakeElement = document.createElement('div');
      snakeElement.style.gridRowStart = e.y;
      snakeElement.style.gridColumnStart = e.x;

      if(index === 0){
          snakeElement.classList.add('head');
      }
      else{
          snakeElement.classList.add('snake');
      }
      board.appendChild(snakeElement);
  });  
  
  // Display the food


  
}

//Main Logic Starts Here
window.requestAnimationFrame(main);
