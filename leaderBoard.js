
const headLine = document.createElement("h1");
headLine.innerText = "Leaderboard";


const users = [
  {
    name: "",
    score: 0,
    rounds: 0,
    WorL: ""
  },
  {
    name: "",
    score: 0,
    rounds: 0,
    WorL: ""
  }
];


const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
const trHead = document.createElement("tr");
const thName = document.createElement("th");
const thScore = document.createElement("th");
const thRounds = document.createElement("th");
const thWorL = document.createElement("th");





thName.innerText = "Player Name";
thScore.innerText = "Player Score";
thRounds.innerText = "Rounds";
thWorL.innerText = "Win or lost";


trHead.appendChild(thName);
trHead.appendChild(thScore);
trHead.appendChild(thRounds);
trHead.appendChild(thWorL);
thead.appendChild(trHead);
table.appendChild(thead);
table.appendChild(tbody);

let index = 1;

for (let user of users) {
  
  const playerRow = document.createElement("tr");
  const playerName = document.createElement("td");
  const playerScore = document.createElement("td");
  const Rounds = document.createElement("td");
  const WorL = document.createElement("td");


  playerName.innerText = user.name;
  playerScore.innerText = user.score;
  Rounds.innerText = user.rounds;
  WorL.innerText = user.WorL;

  playerRow.id = index;
  playerScore.classList.add("playerScore");
  Rounds.classList.add("Rounds");


 
  playerRow.appendChild(playerName);
  playerRow.appendChild(playerScore);
  playerRow.appendChild(Rounds);
  playerRow.appendChild(WorL);


  tbody.appendChild(playerRow);
  index++;
}


tbody.addEventListener("click", function (event) {

  const target = event.target;


  const playerRow = event.target.closest('tr');


  const playerIndex = playerRow.id;


  if (target.matches(".savedGame")) {
    users[playerIndex].score++;
  } else {
    return
  }

  
  const playerScore = playerRow.querySelector('.playerScore');

  
  playerScore.innerText = users[playerIndex].score;

})

document.body.appendChild(headLine);
document.body.appendChild(table);




