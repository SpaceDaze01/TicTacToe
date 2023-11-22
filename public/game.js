
const tiles = document.querySelectorAll(".tile");
const player_X = "X";
const player_O = "O";
let turn = player_X;
let round = 1;

let pointsPlayerX = 0;
let pointsPlayerO = 0;

let won = "Won";
let lost = "Lost";

const boardState = Array(tiles.length);
boardState.fill(null);

//elements
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");
const savedGamebtn = document.getElementById("savedGame")

savedGamebtn.addEventListener("click", function (event) { savedGame(event) } )

playAgain.addEventListener("click", startNewGame);

tiles.forEach((tile) => tile.addEventListener("click", tileClick));

function savedGame(event) {
  event.preventDefault();
  window.location.pathname = "/leaderBoard.html"

  if (pointsPlayerX > pointsPlayerO) {
    console.log(`X ` + won, `O ` + lost)
    
  } else if (pointsPlayerO > pointsPlayerX) {
    console.log(`O ` + won, `X ` + lost)
  } 

}


function setHoverText() {
  //tar bort hover text
  tiles.forEach(tile => {
    tile.classList.remove("x-hover")
    tile.classList.remove("o-hover")
  });

  const hoverClass = `${turn.toLowerCase()}-hover`;

  tiles.forEach(tile => {
    if (tile.innerText == "") {
      tile.classList.add(hoverClass);
    }
  });
}

setHoverText();

function tileClick(event) {
  if (gameOverArea.classList.contains("visible")) {
    return;
  }

  const tile = event.target;
  const tileNumber = tile.dataset.index;
  if (tile.innerText != "") {
    return;
  }

  if (turn === player_X) {
    tile.innerText = player_X;
    boardState[tileNumber - 1] = player_X;
    turn = player_O;
  }
  else {
    tile.innerText = player_O;
    boardState[tileNumber - 1] = player_O;
    turn = player_X;
  }


  setHoverText();
  checkWinner();
}

function checkWinner() {
  //kolla winner
  for (const winningCombination of winningCombinations) {
    //object destructuring
    const { combo, strikeClass } = winningCombination;
    const tileValue1 = boardState[combo[0] - 1];
    const tileValue2 = boardState[combo[1] - 1];
    const tileValue3 = boardState[combo[2] - 1];

    if (tileValue1 != null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      strike.classList.add(strikeClass);
      gameOverScreen(tileValue1);
      round += 1;
      document.getElementById("round").innerText = round;
      whoWon(tileValue1)
      return;
  
    }
    
    

  }

  //kolla om det blir a draw och ge poäng till båda spelarna
  const allTileFilledIn = boardState.every((tile) => tile !== null);
  if (allTileFilledIn) {
    gameOverScreen(null);
    
    pointsPlayerX += 1;
    pointsPlayerO += 1;
    document.getElementById("pointsPlayerX").innerText = pointsPlayerX;
    document.getElementById("pointsPlayerO").innerText = pointsPlayerO;
    
  }
}

//game over skärm med vem som vann omgången
function gameOverScreen(winnerText) {
  let text = "Draw"
  if (winnerText != null) {
    text = `Winner is ${winnerText} `;
  }
  gameOverArea.className = "visible";
  gameOverText.innerText = text;

}

//starta nytt spel
function startNewGame() {
  strike.className = "strike";
  gameOverArea.className = "hidden";
  boardState.fill(null);
  tiles.forEach((tile => tile.innerText = ""));
  turn = winnerText;
  setHoverText();

  
}

//vinnande kombinationer
const winningCombinations = [
  //rows
  { combo: [1, 2, 3], strikeClass: "strike-row-1" },
  { combo: [4, 5, 6], strikeClass: "strike-row-2" },
  { combo: [7, 8, 9], strikeClass: "strike-row-3" },
  //columns
  { combo: [1, 4, 7], strikeClass: "strike-column-1" },
  { combo: [2, 5, 8], strikeClass: "strike-column-2" },
  { combo: [3, 6, 9], strikeClass: "strike-column-3" },
  //diagonals
  { combo: [1, 5, 9], strikeClass: "strike-diagonal-1" },
  { combo: [3, 5, 7], strikeClass: "strike-diagonal-2" },

  
]



//poäng till players
function whoWon(winner) {
  if (winner === player_X) {
    pointsPlayerX += 1;
    document.getElementById("pointsPlayerX").innerText = pointsPlayerX;
  } else if (winner === player_O) {
    pointsPlayerO += 1;
    document.getElementById("pointsPlayerO").innerText = pointsPlayerO;
  } 
}


