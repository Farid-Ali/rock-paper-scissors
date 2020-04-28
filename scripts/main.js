
//Golobal scope

let playerScore = 0;
let computerScore = 0;
let round = 0;

//Selection for display round, score and round winner with a message

const displayPlayerScore = document.querySelector('#playerScore');
const displayComputerScore = document.querySelector('#computerScore');
const displayRound = document.querySelector('#round');
const displayRoundMessage = document.querySelector('#message');
const playerInputButtons = document.querySelector('.buttons');

//Player selection button creation

const rock = document.createElement('button');
rock.setAttribute('id', 'rock');
rock.textContent = 'ROCK';

const paper = document.createElement('button');
paper.setAttribute('id', 'paper');
paper.textContent = 'PAPER';

const scissor = document.createElement('button');
scissor.setAttribute('id', 'scissors');
scissor.textContent = 'SCISSOR';


playerInputButtons.appendChild(rock);
playerInputButtons.appendChild(paper);
playerInputButtons.appendChild(scissor);

// Take the player input and play the game

const playerInput = document.querySelectorAll('button');

playerInput.forEach((button) => {
	button.addEventListener('click', (e) => {
		//player choice
		let playerChoce = e.target.id;
		//computer choice
		let computerChoice = computerPlay();
		//take plaer and computer choice and return round winner
		let roundWinner = playRound(playerChoce,computerChoice);
		//display round message
		displayRoundMessage.textContent = roundWinner;
		//display calculated score
		calculateScore(playerChoce,computerChoice);
		//update display
		updateDisplay();
		//end the game with a message
		endGame();
		//reset the game
		reset();


		//console.log('player choice: ' + playerChoce);
		//console.log('computer choice: ' + computerChoice);
		//console.log(roundWinner);

	})
})

//Function for update score and round

function updateDisplay() {
	displayPlayerScore.textContent = playerScore;
	displayComputerScore.textContent = computerScore;
	displayRound.textContent = round;
}

//Decleare game winner and display end game message

function endGame() {
	let endMessage;
	if (playerScore === 3) {
		endMessage = 'Congratulations! You Won The Match';
		displayRoundMessage.textContent = endMessage;
		displayRoundMessage.style.cssText = 'color: blue; background: #f6f578';
	}
	
	if (computerScore === 3) {
		endMessage = 'Better Luck Next Time';
		displayRoundMessage.textContent = endMessage;
		displayRoundMessage.style.cssText = 'color: yellow; background: #ff5722';
	}

	if (playerScore != 3) {
		displayRoundMessage.style.cssText = 'color: black; background: white';
	}
}

//computer will choose and return rock/paper/scissor.

function computerPlay() {
	let computerChoices = ["rock", "paper", "scissors"]
	let computerSelection = computerChoices[Math.floor(Math.random() * 3)];
	return computerSelection;
}

//Take player and computer choice and return a winner.

function playRound(playerSelection,computerSelection) {
	let result;
	if (playerSelection === computerSelection) {
		result = "It's a draw!";
	} else if (playerSelection === "rock" && computerSelection === "paper") {
		result = "You lose, paper covers rock!";
	} else if (playerSelection === "rock" && computerSelection === "scissors") {
		result = "You win, rock crushes scissors!";
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		result = "You win, paper covers rock!";
	} else if (playerSelection === "paper" && computerSelection === "scissors") {
		result = "You lose, scissors cuts paper!";
	} else if (playerSelection === "scissors" && computerSelection === "rock") {
		result = "You lose, rock crushes scissors!";
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		result = "You win, scissors cuts paper!";
	}
	return result;
}


//Calculate score

function calculateScore(player,computer) {
	round++;

	if (player === computer) {
		playerScore += 0;
	} else if (player === 'rock' && computer === 'paper') {
		computerScore++;
	} else if (player === 'paper' && computer === 'rock') {
		playerScore++;
	} else if (player === 'scissors' && computer === 'paper') {
		playerScore++;
	} else if (player === 'paper' && computer === 'scissors') {
		computerScore++;
	} else if (player === 'scissors' && computer === 'rock') {
		computerScore++;
	} else {
		playerScore++;
	}
	return;
}

//Create the reset button after winner decleared

const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'reset');
resetButton.textContent = 'RESET';

//Reset functon: triger when game winner decleared

function reset() {
	if (playerScore === 3 || computerScore === 3) {
		playerInputButtons.appendChild(resetButton);
		playerInputButtons.removeChild(rock);
		playerInputButtons.removeChild(paper);
		playerInputButtons.removeChild(scissor);

	}
}

//Regenerate player input button

resetButton.addEventListener('click', () => {

	playerScore = 0;
	computerScore = 0;
	round = 0;
	updateDisplay();
	
	playerInputButtons.appendChild(rock);
	playerInputButtons.appendChild(paper);
	playerInputButtons.appendChild(scissor);
	playerInputButtons.removeChild(resetButton);
	
	console.log(playerScore);
	console.log(computerScore);
	console.log(round);

})

