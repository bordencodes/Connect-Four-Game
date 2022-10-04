//Global variables
let player1 = 0
let player2 = 0
let score1 = document.querySelector('#score1')
let score2 = document.querySelector('#score2')
let scoreDisplay = document.querySelector('.score-board')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')
let currentPlayer = 1
let gameBoard = [
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '']
]
let gameSpace = document.querySelectorAll('.space')
let spaceInUse = false
let gameOver = false
const gameAlerts = document.querySelector('.gameAlerts')
// const winGame = [[x, x, x, x]]
const replay = document.querySelector('.playAgain')
const reset = document.querySelector('.resetGame')

//Functions for game logic

// playGame()

for (let i = 0; i < gameSpace.length; i++) {
  gameSpace[i].addEventListener('click', function () {
    clickSpace(i)
  })
}
gameSpace.forEach(function (gameSpace) {
  gameAlerts.innerHTML = `It's ${currentPlayer}'s turn!`
  spaceInUse = true
})

function clickSpace(index) {
  if (gameBoard[index] != '' || !spaceInUse || gameOver) {
    return
  }
  updateSpace(index)
  checkForWinner()
  switchPlayer()
}

function updateSpace(gameGrid) {
  gameBoard[gameGrid] = currentPlayer
  gameSpace[gameGrid].innerHTML = currentPlayer
}

function switchPlayer() {
  if (currentPlayer === 1 && !gameOver) {
    gameSpace[i].classList.add('space')
    currentPlayer = 2
    p1.innerHTML = currentPlayer
    gameAlerts.innerHTML = `${currentPlayer}'s turn!`
  } else if (currentPlayer === 2 && !gameOver) {
    gameSpace[i].classList.add('space')
    currentPlayer = 1
    p2.innerHTML = currentPlayer
    gameAlerts.innerHTML = `${currentPlayer}'s turn!`
  }
}

function checkForWinner() {}

function updateScore() {}

function playAgain() {}

function resetGame() {}

//Evemt listeners
// replay.addEventListener('click', playAgain)
// reset.addEventListener('click', resetGame)
