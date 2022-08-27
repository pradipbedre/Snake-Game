let direction = { x: 0, y: 0 };
const foodSound = new Audio("./music/food.mp3");
const gameOverSound = new Audio("./music/gameover.mp3");
const moveSound = new Audio("./music/move.mp3");
const musicSound = new Audio("./music/music.mp3");
let board = document.getElementById("board");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
food = { x: 1, y: 15 };

//Game functions used in game
const main = (ctime) => {
  window.requestAnimationFrame(main);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
};

function gameEngine() {
  //part1: updatateing the snake array & food
  //part2: display the snake and food
  board.innerHTML = " ";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridRowStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });

  //Displaying food

  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridRowStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

//main logic of game
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 }; //start the game if press any button on keyboard
  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
      //console.log("ArrowUp");
      inputDir.x= 0;
      inputDir.y= -1; // if we want to move snake up then we need to - y from input direction
      break;
    case "ArrowDown":
      // console.log("ArrowDown");
      inputDir.x= ;
      inputDir.y= ;
      break;
    case "ArrowLeft":
      // console.log("ArrowLeft");
      inputDir.x= ;
      inputDir.y= ;
      break;
    case "ArrowRight":
      // console.log("ArrowRight");
      inputDir.x= ;
      inputDir.y= ;
      break;
    default:
      break;
  }
});
