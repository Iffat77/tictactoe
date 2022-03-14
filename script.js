let cells = document.querySelectorAll(".cell")

let currentPlayer = "X"
let gameOn = true

let gameState = ["", "", "", "", "", "", "", "", ""]

let jackPot = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let rounds = 0

function updateUI(element, index){
  gameState[index] = currentPlayer;
  element.innerHTML = currentPlayer;
}

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X"
}

function playGame() {
  // Game Logic
  // if current player equals jackpt array they win
  // else check for tie
  //else switch player
  let roundWon = false
 
  jackPot.forEach((winCombo) => {
    let pos1 = gameState[winCombo[0]]
    let pos2 = gameState[winCombo[1]]
    let pos3 = gameState[winCombo[2]]
    
    // check to make sure none of the strings are empty
    if (pos1 === "" || pos2 === "" || pos3 === "") {
      return;
    }
    // check to see if they won
    if (pos1 === pos2 && pos2 === pos3) {
      roundWon = true
    }
  })

  // If won
  if (roundWon) {
    alert(currentPlayer + " Wins")
  }

  // Check for tie
  // let tie = !gameState.includes("")
  // if (tie) {
  //   alert("Its a gosh darn DRAW")
  // }
  if (rounds === 8 && roundWon === false) {
    alert("Its a gosh darn DRAW")
  }
  
  changePlayer()
  return rounds ++
}


function handleClick(e) {
  let currentElement = e.target
  let currentIndex = parseInt(currentElement.dataset.index)

  if (gameState[currentIndex] !== "") {
    return
  }

  updateUI(currentElement, currentIndex)
  playGame()  
}


cells.forEach(item => item.addEventListener("click", handleClick))


// item.style.backgroundColor = "red"