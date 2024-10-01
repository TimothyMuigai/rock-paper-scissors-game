const txtDisplay = document.querySelector(".txt");
const resetGame = document.querySelector(".reset-btn");
const player1Choice = document.getElementsByClassName("pl-one-select");
const player2Choice = document.getElementsByClassName("pl-two-select");
const pL1score = document.getElementById("pl-score1");
const pL2score = document.getElementById("pl-score2");
const player1Display = document.querySelector(".player1");
const player2Display = document.querySelector(".player2");

let player1Score = 0;
let player2Score = 0;

let player1Selection = "";
let player2Selection = "";


const player1Rock = player1Choice[0];
const player1Paper = player1Choice[1];
const player1Scissors = player1Choice[2];

player1Rock.addEventListener("click", () => {
    player1Selection = "rock";
    playGame();
});

player1Paper.addEventListener("click", () => {
    player1Selection = "paper";
    playGame();
});

player1Scissors.addEventListener("click", () => {
    player1Selection = "scissors";
    playGame();
});


const player2Rock = player2Choice[0];
const player2Paper = player2Choice[1];
const player2Scissors = player2Choice[2];

player2Rock.addEventListener("click", () => {
    player2Selection = "rock";
    playGame();
});

player2Paper.addEventListener("click", () => {
    player2Selection = "paper";
    playGame();
});

player2Scissors.addEventListener("click", () => {
    player2Selection = "scissors";
    playGame();
});


function playGame() {
    if (player1Selection === "" || player2Selection === "") {
        return;
    }

    let result = "";

    if (player1Selection === player2Selection) {
        result = "It's a Tie!";
        txtDisplay.value = `Tie! Player 1: ${player1Selection}, Player 2: ${player2Selection}`; 

    } else if(player1Selection === "rock" && player2Selection === "scissors") {
            result = "Player-1 wins!";
            player1Score++;
            pL1score.value = player1Score;
            txtDisplay.value = `${result} Player 1: ${player1Selection}, Player 2: ${player2Selection}`;

    }else if(player1Selection === "paper" && player2Selection === "rock"){
            result = "Player-1 wins!";
            player1Score++;
            pL1score.value = player1Score;
            txtDisplay.value = `${result} Player 1: ${player1Selection}, Player 2: ${player2Selection}`;

    }else if(player1Selection === "scissors" && player2Selection === "paper"){
            result = "Player-1 wins!";
            player1Score++;
            pL1score.value = player1Score;
            txtDisplay.value = `${result} Player 1: ${player1Selection}, Player 2: ${player2Selection}`;
               
    }else{
        result = "Player-2 wins!";
        player2Score++;
        pL2score.value = player2Score;
        txtDisplay.value = `${result} Player 1: ${player1Selection}, Player 2: ${player2Selection}`;
    }
    player1Selection = "";
    player2Selection = "";

    if (player1Score > player2Score) {
        player1Display.style.backgroundColor = "green"; 
        player2Display.style.backgroundColor = "red"; 

    }else if(player2Score > player1Score){
        player2Display.style.backgroundColor = "green";
        player1Display.style.backgroundColor = "red";

    } else if(player1Score === player2Score){
        player1Display.style.backgroundColor = "grey";
        player2Display.style.backgroundColor = "grey";

    }   

}

let originaltxt = txtDisplay.value;

function restartGame() {
    player1Score = 0;
    player2Score = 0;
    player1Selection = "";
    player2Selection = "";
    pL1score.value = player1Score;
    pL2score.value = player2Score;
    txtDisplay.value = originaltxt;
    player1Display.style.backgroundColor = "white";
    player2Display.style.backgroundColor = "white";
}