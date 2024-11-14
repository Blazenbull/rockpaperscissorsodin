console.log("Hello player, want to play rock-paper-scissors?");
let humanScore=0;
let computerScore=0;

let r="rock";
let s="scissors";
let p="paper";

function getComputerChoice(min, max){
    
    let com = Math.floor(Math.random() * (max - min + 1)) + min;
    
    switch (com){
        case 1:
            com=r;
            break;
        case 2:
            com=s;
            break;
        case 3:
            com=p;
            break;
    }
   
    return com
}


function getHumanChoice(){
    let choice=prompt('choose either "rock","paper" or "scissors"')
    choice=choice.toLowerCase();
    return choice
}

function playRound(humanChoice, computerChoice){
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice(1,3);
   
   
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice ==="scissors" && computerChoice==="paper"||  humanChoice ==="paper" && computerChoice==="rock"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore+=1
    }
    else if (humanChoice === "paper" && computerChoice === "scissors" || humanChoice ==="rock" && computerChoice==="paper"|| 
         humanChoice ==="scissors" && computerChoice==="rock")
    {
        console.log(`You lose! ${humanChoice} beats ${computerChoice}`)
        computerScore+=1
    }
    else if (humanChoice === computerChoice){
        console.log("It's a draw!")
        
    }
    else{
        console.log("player gave an invalid input")
        playRound()
    }

}

function playGame(){


   for (i=0; i <5; i++){
    playRound()

    console.log(`player score is ${humanScore} and computer score is ${computerScore}`)

   }
   if(humanScore>computerScore)
    {console.log("Player is the winner!")}
   else if(computerScore>humanScore)
   {console.log("Computer is the winner")}
   else{
    console.log("It is a draw nobody wins")
   }

}
playGame()