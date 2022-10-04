//Global variables
let player1 = 0
let player2 = 0
let score1 = document.querySelector('#score1')
let score2 = document.querySelector('#score2')
let scoreDisplay = document.querySelector('.score-board')
let currentPlayer = 1
let gameGrid = [
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '']
]
let gameSpace = document.querySelector('.space')
let spaceInUse = false
let gameOver = false
const gameAlerts = document.querySelector('.gameAlerts')
// const winGame = [[x, x, x, x]]
const replay = document.querySelector('.playAgain')
const reset = document.querySelector('.resetGame')

//Functions for game logic

function playGame() {
  for (let i = 0; i < gameSpace.length; i++) {
    gameSpace[i].addEventListener('click', function () {
      clickSpace(i)
    })
  }
  gameSpace.forEach(function (gameSpace) {
    gameAlerts.innerHTML = `It's ${currentPlayer}'s turn!`
    spaceInUse = true
  })
}

function clickSpace() {}

function updateSpace() {}

function switchPlayer() {}

function checkForWinner() {}

function updateScore() {}

function playAgain() {}

function resetGame() {}

//Evemt listeners
// replay.addEventListener('click', playAgain)
// reset.addEventListener('click', resetGame)
