 // Player selection

 function playerPlay() {
     let playerSelection = prompt(("Choose: Rock/paper/scissors"));
     playerSelection = playerSelection.toLocaleLowerCase();
     console.log("You choose: " + playerSelection);
     return playerSelection;
 }

 //computer will choose and return rock/paper/scissor.

 function computerPlay() {
     let computerChoices = ["rock", "paper", "scissors"]
     let computerSelection = computerChoices[Math.floor(Math.random() * 3)];
     console.log("Computer chose: " + computerSelection);
     return computerSelection;
 }
 
 //Take player and computer choice and return a winner.
 
 function playRound(playerSelection,computerSelection) {
     let result;
     if (playerSelection == computerSelection) {
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
 //Play five round game

 

 function game() {
     let playerScore = 0;
     let computerScore = 0;
     let score = 0;
     let finalScore;
     for (let i = 1; i <= 5; i++) {
         let computerSelection = computerPlay();
         let playerSelection = playerPlay();
         let roundPlay = playRound(playerSelection,computerSelection);
         console.log(roundPlay);

         if (roundPlay === "It's a draw!") {
             score += 0;
         } else if (roundPlay === "You win, rock crushes scissors!" || roundPlay === "You win, paper covers rock!" || roundPlay === "You win, scissors cuts paper!") {
             playerScore += 1;
         } else {
             computerScore += 1;
         }


          //Display round

        const round = document.querySelector('.round');

        const roundContent =document.createElement('span');
        roundContent.classList.add('content');
        roundContent.textContent = i;
        round.appendChild(roundContent);
     }

     if (playerScore === computerScore) {
         finalScore = "Match Draw!..Refresh The Page To Play Again. Your Score: " + playerScore + " Computer Score: " + computerScore;
     } else if (playerScore > computerScore) {
         finalScore = "Congrats! You Won The Match!. Your Score: " + playerScore + " Computer Score: " + computerScore;
     } else {
         finalScore = "You Loose This Match. Your Score: " + playerScore + " Computer Score: " + computerScore;
     }

    //Display computer score

    const computerScoreDisplay = document.querySelector('.computerScore');

    const computerContent = document.createElement('span');
    computerContent.classList.add('content');
    computerContent.textContent = computerScore;
    computerScoreDisplay.appendChild(computerContent);


    //Display player score

    const playerScoreDisplay = document.querySelector('.playerScore');
    
    const playerContent = document.createElement('span');
    playerContent.classList.add('content')
    playerContent.textContent = playerScore;
    playerScoreDisplay.appendChild(playerContent);


   

    return finalScore;

 }
 

 



console.log(game());