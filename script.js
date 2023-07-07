
const scissor = "scissor";
const rock = "rock";
const paper = "paper";

var playerScore = 0;
var computerScore = 0;

function getComputerChoice(){
    let a = Math.floor(Math.random() * 3)
    
    if(a == 0)
        return rock
    else if(a == 1)
        return paper
    else if(a == 2)
        return scissor
}

function roud(){

    const computerChoice  = getComputerChoice();

    let playerChoice = prompt();

    playerChoice = playerChoice.toLowerCase();
    
    console.log("Player: " + playerChoice);
    console.log("Computer: " + computerChoice);

    if(computerChoice == playerChoice)
        console.log("its a draw");
    else if(playerChoice == scissor && computerChoice == paper){
        console.log("You Won! \nCPU played " + computerChoice);
        playerScore ++;
    }
    else if(playerChoice == rock && computerChoice == scissor){
        console.log("You Won! \nCPU played " + computerChoice);
        playerScore ++;
    }   
    else if(playerChoice == paper && computerChoice == rock){
        console.log("You Won! \nCPU played " + computerChoice);
        playerScore ++;
    }   
    else
    {
        console.log("You Lost! \nCPU played " + computerChoice);
        computerScore ++;
    }

}

function game(){
    
    for (let i = 1; i <= 5; i++)
    {
        console.log("-------------- Round " + i + " --------------");
        roud();
        console.log("Player: " + playerScore + "\nComputer: " + computerScore);
    }
}

game();