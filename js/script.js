const playerName = document.getElementById("name_field");
const playerNameLabel = document.getElementById("name_field_label");
const nameSubmitBtn = document.getElementById("nes-submit");

let playerPoints = 0;
let computerPoints = 0;

let playerScoreBoard = document.getElementById("player-scoreboard");
let computerScoreBoard = document.getElementById("computer-scoreboard");

let playerScore = document.createElement("span");
playerScore.textContent = `${playerName.value}: ${playerPoints}`;
computerScoreBoard.appendChild(playerScore);

let computerScore = document.createElement("span");
computerScore.textContent = `Computer: ${computerPoints}`;
computerScoreBoard.appendChild(computerScore);

const computerSpeechSection = document.getElementById("computer-text");
let computerSpeech = document.createElement("span");
computerSpeech.textContent = "Who facing me today? You gonna lose haha.";
computerSpeechSection.appendChild(computerSpeech);

//Have the bot type animate all text in game

const rpsStartGame = (event) => {
  // https://stackoverflow.com/questions/45882638/event-target-value-is-undefined-for-buttons-that-wrap-an-image-instead-of-text
  let playerSelect = event.currentTarget.value;
  playerScore.textContent = `${playerName.value}: ${playerPoints}`;

  let computer = (min, max) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    let randNumber = Math.floor(
      Math.random() * (maxFloored - minCeiled) + minCeiled
    );

    if (randNumber == 1) {
      return (computer = "rock");
    } else if (randNumber == 2) {
      return (computer = "paper");
    } else {
      return (computer = "scissors");
    }
  };

  computer(1, 4);

  if (playerSelect === "paper" && computer === "rock") {
    computerSpeech.textContent = `Paper wraps rock. You won this one ${playerName.value}`;
    playerPoints++;
    playerScore.textContent = `${playerName.value}: ${playerPoints} (Last Chose: ${playerSelect})`;
    computerScore.textContent = `Computer: ${computerPoints} (Last Chose: ${computer})`;

    console.log(computer);
  } else if (playerSelect === "rock" && computer === "scissors") {
    computerSpeech.textContent = `Rock blunts scissors. You won this one ${playerName.value}`;
    playerPoints++;
    playerScore.textContent = `${playerName.value}: ${playerPoints} (Last Chose: ${playerSelect})`;
    computerScore.textContent = `Computer: ${computerPoints} (Last Chose: ${computer})`;

    console.log(computer);
  } else if (playerSelect === "scissors" && computer === "paper") {
    computerSpeech.textContent = `Scissors cuts paper. You won this one ${playerName.value}`;
    playerPoints++;
    playerScore.textContent = `${playerName.value}: ${playerPoints} (Last Chose: ${playerSelect})`;
    computerScore.textContent = `Computer: ${computerPoints} (Last Chose: ${computer})`;

    console.log(computer);
  } else if (computer === "rock" && playerSelect === "scissors") {
    computerSpeech.textContent = `Rock blunts scissors. I win`;
    computerPoints++;
    playerScore.textContent = `${playerName.value}: ${playerPoints} (Last Chose: ${playerSelect})`;
    computerScore.textContent = `Computer: ${computerPoints} (Last Chose: ${computer})`;

    console.log(computer);
  } else if (computer === "scissors" && playerSelect === "paper") {
    computerSpeech.textContent = `Scissors cuts paper. I win`;
    computerPoints++;
    playerScore.textContent = `${playerName.value}: ${playerPoints} (Last Chose: ${playerSelect})`;
    computerScore.textContent = `Computer: ${computerPoints} (Last Chose: ${computer})`;

    console.log(computer);
  } else if (computer === "paper" && playerSelect === "rock") {
    computerSpeech.textContent = `Paper wraps rock. I win.`;
    computerPoints++;
    playerScore.textContent = `${playerName.value}: ${playerPoints} (Last Chose: ${playerSelect})`;
    computerScore.textContent = `Computer: ${computerPoints} (Last Chose: ${computer})`;

    console.log(computer);
  } else {
    computerSpeech.textContent = `Hmm, tie round. We picked the same one.`;
    playerScore.textContent = `${playerName.value}: ${playerPoints} (Last Chose: ${playerSelect})`;
    computerScore.textContent = `Computer: ${computerPoints} (Last Chose: ${computer})`;

    console.log(computer);
  }
};

const nameSubmit = () => {
  playerName.remove();
  playerNameLabel.remove();
  nameSubmitBtn.remove();

  computerSpeech.textContent = `Know your name is ${playerName.value}, but I'm the champ baby whooo! Kidding. Alright now, We can start playing when
  you're ready by clicking one of the options below.`;
};

const startOver = () => {
  playerPoints = 0;
  computerPoints = 0;
  playerScore.textContent = `${playerName.value}: ${playerPoints}`;
  computerScore.textContent = `Computer: ${computerPoints}`;
  computerSpeech.textContent = `Alright ${playerName.value}, let's start over then.`;
};

var imgs = document.getElementsByClassName("choice-btn");
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", rpsStartGame);
}
