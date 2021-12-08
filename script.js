const computerOptions = ["rock", "paper", "scissors"];

function computerPlay() {
  return computerOptions[Math.floor(Math.random() * 3)];
}

function playRound() {
  const playerSelection = prompt("rock, paper, or scissors?");
  const computerSelection = computerPlay();

  if (computerSelection === playerSelection) {
    console.log(
      `It's a draw bc your hand is ${playerSelection} and the computer's hand is also ${computerSelection}!`
    );
    drawScore++;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    console.log(
      `Computer wins bc your hand is ${playerSelection} and the computer's hand ${computerSelection} beats yours!`
    );
    computerScore++;
  } else if (
    (computerSelection === "scissors" && playerSelection === "rock") ||
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "rock" && playerSelection === "paper")
  ) {
    console.log(
      `You WIN bc your hand ${playerSelection} beats the computer's hand ${computerSelection} !!`
    );
    playerScore++;
  }
}

function game() {
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  playRound();
  console.log(
    `Player's Score:${playerScore}, Computer's Score:${computerScore}, Draws:${drawScore}`
  );
  playRound();
  console.log(
    `Player's Score:${playerScore}, Computer's Score:${computerScore}, Draws:${drawScore}`
  );
  playRound();
  console.log(
    `Player's Score:${playerScore}, Computer's Score:${computerScore}, Draws:${drawScore}`
  );
  playRound();
  console.log(
    `Player's Score:${playerScore}, Computer's Score:${computerScore}, Draws:${drawScore}`
  );
  playRound();
  console.log(
    `Player's Score:${playerScore}, Computer's Score:${computerScore}, Draws:${drawScore}`
  );
}

game();

if (playerScore > computerScore) {
  console.log(`Congratulations, you are the BIG winner 😃 🎉 😁 !!!`);
} else if (computerScore > playerScore) {
  console.log(`Sorry, you lost !! 😩 😭`);
} else {
  console.log(`The game resulted in a DRAW.`);
}
