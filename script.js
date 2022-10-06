// Global variables

let player1 = 0
let player2 = 0
let score1 = document.querySelector('.score1')
let score2 = document.querySelector('.score2')
let scoreDisplay = document.querySelector('.score-board')
let currentPlayer = 'Player 1'
let gameBoard = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
]
let gameSpace = document.querySelectorAll('.space')
let spaceInUse = false
let gameOver = false
const gameAlerts = document.querySelector('.gameAlerts')
const winGame = [
  [0, 1, 2, 3],
  [0, 7, 14, 21],
  [0, 8, 16, 24],
  [1, 8, 15, 22],
  [1, 9, 17, 25],
  [1, 2, 3, 4],
  [2, 9, 16, 23],
  [2, 10, 18, 26],
  [3, 10, 17, 24],
  [4, 11, 18, 25],
  [4, 10, 16, 22],
  [5, 12, 19, 26],
  [5, 11, 17, 23],
  [5, 4, 3, 2],
  [6, 13, 20, 27],
  [6, 5, 4, 3],
  [6, 12, 18, 24],
  [7, 8, 9, 10],
  [7, 15, 23, 31],
  [7, 14, 21, 28],
  [8, 16, 24, 32],
  [8, 9, 10, 11],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [9, 17, 25, 33],
  [10, 17, 24, 31],
  [11, 18, 25, 31],
  [11, 17, 23, 29],
  [12, 18, 24, 30],
  [12, 19, 26, 33],
  [12, 11, 10, 9],
  [13, 19, 25, 31],
  [13, 12, 11, 10],
  [13, 20, 27, 34],
  [14, 15, 16, 17],
  [14, 22, 30, 38],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [20, 19, 18, 17],
  [20, 26, 32, 38],
  [21, 15, 9, 3],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [27, 19, 11, 3],
  [27, 26, 25, 24],
  [28, 29, 30, 31],
  [28, 22, 16, 10],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [34, 33, 32, 31],
  [34, 26, 18, 10],
  [35, 28, 21, 14],
  [35, 36, 37, 38],
  [35, 29, 23, 17],
  [36, 29, 22, 15],
  [36, 30, 24, 18],
  [36, 37, 38, 39],
  [37, 30, 23, 16],
  [37, 31, 25, 19],
  [38, 31, 24, 17],
  [39, 32, 25, 18],
  [39, 31, 23, 15],
  [40, 39, 38, 37],
  [40, 32, 24, 16],
  [40, 33, 26, 19],
  [41, 34, 27, 20],
  [41, 33, 25, 17],
  [41, 40, 39, 38]
]
const replay = document.querySelector('.playAgain')
const reset = document.querySelector('.resetGame')

//Functions for game logic

const playGame = () => {
  for (let i = 0; i < gameSpace.length; i++) {
    gameSpace[i].addEventListener('click', function () {
      clickSpace(i)
    })
  }
  gameSpace.forEach((gameSpace) => {
    gameAlerts.innerHTML = `It's ${currentPlayer}'s turn!`
    spaceInUse = true
  })
}

const clickSpace = (index) => {
  if (gameBoard[index] != '' || !spaceInUse || gameOver) {
    return
  }
  updateSpace(index)
  checkForWinner()
  switchPlayer()
}

const updateSpace = (selection) => {
  gameBoard[selection] = currentPlayer
  if (currentPlayer === 'Player 1') {
    gameSpace[selection].classList.add('p1')
  } else if (currentPlayer === 'Player 2') {
    gameSpace[selection].classList.add('p2')
  }
}

const switchPlayer = () => {
  if (currentPlayer === 'Player 1' && !gameOver) {
    currentPlayer = 'Player 2'
    gameAlerts.innerHTML = `${currentPlayer}'s turn!`
  } else if (currentPlayer === 'Player 2' && !gameOver) {
    currentPlayer = 'Player 1'
    gameAlerts.innerHTML = `${currentPlayer}'s turn!`
  }
}

const checkForWinner = () => {
  for (let i = 0; i < winGame.length; i++) {
    const win = winGame[i]
    const space1 = gameBoard[winGame[i][0]]
    const space2 = gameBoard[winGame[i][1]]
    const space3 = gameBoard[winGame[i][2]]
    const space4 = gameBoard[winGame[i][3]]

    // This if statement will check if the grid entirely populated.
    //If it's not, it will stop checking the current win scenario and go to the next scenario.

    if (space1 == '' || space2 == '' || space3 == '' || space4 == '') {
      continue
    }

    //This is checking to see if the there are four game spaces that are equal to each other.
    //If so, that signifies a win.

    if (space1 == space2 && space2 == space3 && space3 == space4) {
      gameOver = true
      gameAlerts.innerHTML = `${currentPlayer} wins!`
      updateScore()
      break
    }
  }

  let notDraw = false
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] == '') {
      notDraw = true
      break
    }
  }
  if (notDraw == false) {
    gameOver = true
    gameAlerts.innerHTML = `It's a draw!`
  }
}

const updateScore = () => {
  if (currentPlayer === 'Player 1') {
    player1 = player1 + 1
    score1.innerHTML = player1
  } else if (currentPlayer === 'Player 2') {
    player2 = player2 + 1
    score2.innerHTML = player2
  } else {
    return
  }
  gameOver = true
}

const playAgain = () => {
  currentPlayer === 'Player 1'
  gameBoard = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]
  gameAlerts.innerHTML = `It's ${currentPlayer}'s turn!`
  gameSpace.forEach((clear) => {
    clear.classList.remove('p1')
    clear.classList.remove('p2')
  })
  spaceInUse = true
  gameOver = false
}

const resetGame = () => {
  if (player1 > 0 || player2 > 0) {
    player1 = 0
    player2 = 0
    score1.innerHTML = player1
    score2.innerHTML = player2
  }

  currentPlayer = 'Player 1'
  gameBoard = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]
  gameAlerts.innerHTML = `It's ${currentPlayer}'s turn!`
  gameSpace.forEach((clear) => {
    clear.classList.remove('p1')
    clear.classList.remove('p2')
  })
  spaceInUse = true
  gameOver = false
}

playGame()

// Event listeners
replay.addEventListener('click', playAgain)
reset.addEventListener('click', resetGame)
