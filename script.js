//Global variables
let player1 = 0
let player2 = 0
let score1 = document.querySelector('#score1')
let score2 = document.querySelector('#score2')
let scoreDisplay = document.querySelector('.score-board')
let currentPlayer = 'Player 1'
let gameGrid = document.querySelector('#gameGrid')
let gameSpace = document.querySelector('.space')
let gameOver = false
const gameAlerts = document.querySelector('.gameAlerts')
const play = document.querySelector('.playGame')
const replay = document.querySelector('.playAgain')
const reset = document.querySelector('.resetGame')

//Functions for game logic

playGame()

function clickSpace() {}

function updateSpace() {}

function switchPlayer() {}

function checkForWinner() {}

function updateScore() {}

function playAgain() {}

function resetGame() {}

//Evemt listeners
play.addEventListener('click', playGame)
replay.addEventListener('click', playAgain)
reset.addEventListener('click', resetGame)
