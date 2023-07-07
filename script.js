
const scissor = "scissor";
const rock = "rock";
const paper = "paper";

function getComputerChoice(){
    let a = Math.floor(Math.random() * 3)
    
    if(a == 0)
        return rock
    else if(a == 1)
        return paper
    else if(a == 2)
        return scissor
}

function game(){

    const computerChoice  = getComputerChoice();

    let playerChoice = prompt();

    playerChoice = playerChoice.toLowerCase();
    
    console.log("Player: " + playerChoice);
    console.log("Computer: " + computerChoice);

    if(computerChoice == playerChoice)
        console.log("its a draw");
    else if(playerChoice == scissor && computerChoice == paper){
        console.log("You Won! \nCPU played " + computerChoice);
    }
    else if(playerChoice == rock && computerChoice == scissor){
        console.log("You Won! \nCPU played " + computerChoice);
    }   
    else if(playerChoice == paper && computerChoice == rock){
        console.log("You Won! \nCPU played " + computerChoice);
    }   
    else
    {
        console.log("You Lost! \nCPU played " + computerChoice);
    }
}

game()