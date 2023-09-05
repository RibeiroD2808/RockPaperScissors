const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorButton = document.querySelector('#scissorButton');

const resultP = document.querySelector('#result');
const playerScoreP = document.querySelector('#playerScore');
const computerScoreP = document.querySelector('#computerScore');

const scissor = "scissor";
const rock = "rock";
const paper = "paper";

var playerScore = 0;
var computerScore = 0;

paperButton.addEventListener('click', () => {
    //alert("Hello World");
    roud(paper);
});

rockButton.addEventListener('click', () => {
    //alert("Hello World");
    roud(rock);
});

scissorButton.addEventListener('click', () => {
    //alert("Hello World");
    roud(scissor);
});

function updateScore()
{
    computerScoreP.textContent = computerScore;
    playerScoreP.textContent = playerScore;
}

function getComputerChoice(){
    let a = Math.floor(Math.random() * 3)
    
    if(a == 0)
        return rock
    else if(a == 1)
        return paper
    else if(a == 2)
        return scissor
}

function roud(playerChoice){

    
    
    const computerChoice  = getComputerChoice();

    //let playerChoice = prompt();

    playerChoice = playerChoice.toLowerCase();
    
    console.log("Player: " + playerChoice);
    console.log("Computer: " + computerChoice);

    if(computerChoice == playerChoice){
        console.log("Its a draw");
        resultP.textContent = "Its a draw";
    }
    else if(playerChoice == scissor && computerChoice == paper){
        console.log("You Won! \nCPU played " + computerChoice);
        resultP.textContent = "You Won! \nCPU played " + computerChoice;
        playerScore ++;
    }
    else if(playerChoice == rock && computerChoice == scissor){
        console.log("You Won! \nCPU played " + computerChoice);
        resultP.textContent = "You Won! \nCPU played " + computerChoice;
        playerScore ++;
    }   
    else if(playerChoice == paper && computerChoice == rock){
        console.log("You Won! \nCPU played " + computerChoice);
        resultP.textContent = "You Won! \nCPU played " + computerChoice;
        playerScore ++;
    }   
    else
    {
        console.log("You Lost! \nCPU played " + computerChoice);
        resultP.textContent = "You Lost! \nCPU played " + computerChoice
        computerScore ++;
    }

    updateScore();   
    
    if(playerScore >= 5 || computerScore >= 5)
    {
        
        document.body.innerHTML = ' ';
        const finalText = document.createElement('p');
        if(playerScore >= 5)
            finalText.textContent = "YOU WON";
        if(computerScore >= 5)
            finalText.textContent = "YOU LOST";
        document.body.appendChild(finalText);
    }
}