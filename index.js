let playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  let getScoreHtml = () => {
    // Sélectionne le conteneur où le texte sera ajouté
    let ScoreAppend = document.querySelector(".divParant-3");

    // Supprime l'ancienne balise <p> si elle existe
    let oldScore = ScoreAppend.querySelector(".pChildScore");
    if (oldScore) {
      ScoreAppend.removeChild(oldScore);
    }

    // Crée une nouvelle balise <p>
    let addScore1 = document.createElement("p");
    addScore1.textContent = `${computerScore} - ${humanScore}`;
    addScore1.classList.add("pChildScore");

    // Ajoute la nouvelle balise <p> au conteneur
    ScoreAppend.appendChild(addScore1);
  };

  let getComputerChoice = () => {
    let numAl = Math.random();
    if (numAl <= 0.3) {
      return "Pierre";
    } else if (numAl >= 0.6) {
      return "Papier";
    } else {
      return "Ciseaux";
    }
  };

  let getHumanChoice = () => {
    const btnRock = document.querySelector(".btnRock");
    const btnPaper = document.querySelector(".btnPaper");
    const btnScissors = document.querySelector(".btnScissors");

    btnRock.addEventListener("click", () => {
      console.log("Rock");
      playRound("Pierre");
    });

    btnPaper.addEventListener("click", () => {
      console.log("Paper");
      playRound("Papier");
    });

    btnScissors.addEventListener("click", () => {
      console.log("Scissors");
      playRound("Ciseaux");
    });
  };

  let logParts = (text) => {
    if (humanScore >= 5 || computerScore >= 5) {
    } else {
      // Sélectionne le conteneur où le texte sera ajouté
      let logAppend = document.querySelector(".divLogTime");

      // Supprime l'ancienne balise <p> si elle existe
      let oldLog = logAppend.querySelector(".pChildLogTime");
      if (oldLog) {
        logAppend.removeChild(oldLog);
      }

      // Crée une nouvelle balise <p>
      let addLog = document.createElement("p");
      addLog.textContent = text;
      addLog.classList.add("pChildLogTime");

      // Ajoute la nouvelle balise <p> au conteneur
      logAppend.appendChild(addLog);
    }
  };

  let logPartsWin = (text) => {
    // Sélectionne le conteneur où le texte sera ajouté
    let logAppend = document.querySelector(".divLogTime");

    // Supprime l'ancienne balise <p> si elle existe
    let oldLog = logAppend.querySelector(".pChildLogTime");
    if (oldLog) {
      logAppend.removeChild(oldLog);
    }

    // Crée une nouvelle balise <p>
    let addLog = document.createElement("p");
    addLog.textContent = text;
    addLog.classList.add("pChildLogTime");

    // Ajoute la nouvelle balise <p> au conteneur
    logAppend.appendChild(addLog);
  };

  let playRound = (humanChoice) => {
    computerChoice = getComputerChoice();

    if (humanChoice === "Pierre" && computerChoice === "Pierre") {
      logParts(
        `"Execo "Rock" ! Here are the scores : Human : ${humanScore}, Computeur : ${computerScore}"`
      );
      getScoreHtml();
    } else if (humanChoice === "Pierre" && computerChoice === "Papier") {
      computerScore++;
      logParts(
        `"Computer Win ! You did "${humanChoice}" and the computer "${computerChoice}" Here are the scores : Human : ${humanScore}, Computer : ${computerScore}"`
      );
      getScoreHtml();
      return computerScore;
    } else if (humanChoice === "Pierre" && computerChoice === "Ciseaux") {
      humanScore++;
      logParts(
        `"Human Win ! You made "${humanChoice}" and the computer made "${computerChoice}" Here are the scores : Human : ${humanScore}, Computer : ${computerScore}"`
      );
      getScoreHtml();
      return humanScore;
    } else if (humanChoice === "Papier" && computerChoice === "Papier") {
      logParts(
        `"Execo "Paper" ! Here are the scores: Human : ${humanChoice}, Computer : ${computerChoice}"`
      );
      getScoreHtml();
    } else if (humanChoice === "Papier" && computerChoice === "Pierre") {
      humanScore++;
      logParts(
        `"Human Win ! You made "${humanChoice}" and the computer made "${computerChoice}" Here are the scores : Human : ${humanScore}, Computeur : ${computerScore}"`
      );
      getScoreHtml();
      return humanScore;
    } else if (humanChoice === "Papier" && computerChoice === "Ciseaux") {
      computerScore++;
      logParts(
        `"Computer Win ! You made "${humanChoice}" and the computer made "${computerChoice}" Here are the scores : Human : ${humanScore}, Computer : ${computerScore}"`
      );
      getScoreHtml();
      return computerScore;
    } else if (humanChoice === "Ciseaux" && computerChoice === "Ciseaux") {
      logParts(
        `"Execo "Scissors" ! Here are the scores : Human : ${humanScore}, Computer : ${computerScore}"`
      );
      getScoreHtml();
    } else if (humanChoice === "Ciseaux" && computerChoice === "Pierre") {
      computerScore++;
      logParts(
        `"Computer Win ! You did "${humanChoice}" and the computer "${computerChoice}" Here are the scores : Human : ${humanScore}, Computer : ${computerScore}"`
      );
      getScoreHtml();
      return computerScore;
    } else if (humanChoice === "Ciseaux" && computerChoice === "Papier") {
      humanScore++;
      logParts(
        `"Human Win ! You made "${humanChoice}" and the computer made "${computerChoice}" Here are the scores : Human : ${humanScore}, Computer : ${computerScore}"`
      );
      getScoreHtml();
      return humanScore;
    } else {
      logParts(
        `"Here are the scores : Human :${humanScore}, Computer : ${computerScore}"`
      );
      getScoreHtml();
    }

    if (humanScore >= 5 || computerScore >= 5) {
      if (humanScore > computerScore) {
        logPartsWin(
          `"You win the game with a score of ${humanScore} against ${computerScore} !"`
        );
      } else if (humanScore < computerScore) {
        logPartsWin(
          `"The computer wins the game with a score of ${computerScore} against ${humanScore} !"`
        );
      } else {
        logPartsWin(
          `"The game ends in a draw with a score of ${humanScore} to ${computerScore}!"`
        );
      }
    }
  };

  getHumanChoice();
};

playGame();

const replay = document.querySelector(".btnPlay");
replay.addEventListener("click", (e) => {
  playGame();
  humanScore = 0;
  computerScore = 0;
  let ScoreAppend = document.querySelector(".divParant-3");

  // Supprime l'ancienne balise <p> si elle existe
  let oldScore = ScoreAppend.querySelector(".pChildScore");
  if (oldScore) {
    ScoreAppend.removeChild(oldScore);
  }

  // Crée une nouvelle balise <p>
  let addScore1 = document.createElement("p");
  addScore1.textContent = `0 - 0`;
  addScore1.classList.add("pChildScore");

  // Ajoute la nouvelle balise <p> au conteneur
  ScoreAppend.appendChild(addScore1);

  let logAppend = document.querySelector(".divLogTime");

  // Supprime l'ancienne balise <p> si elle existe
  let oldLog = logAppend.querySelector(".pChildLogTime");
  if (oldLog) {
    logAppend.removeChild(oldLog);
  }

  // Crée une nouvelle balise <p>
  let addLog = document.createElement("p");
  addLog.textContent = "Logs";
  addLog.classList.add("pChildLogTime");

  // Ajoute la nouvelle balise <p> au conteneur
  logAppend.appendChild(addLog);
});
