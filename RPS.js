console.log("Hello player, want to play rock-paper-scissors?");
let humanScore=0;
let computerScore=0;
let humanChoice=0
let r="rock";
let s="scissors";
let p="paper";
const para=document.getElementById("winner");

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

rock.addEventListener("click", ()=>{
    playRound("rock")
    
}
);
scissors.addEventListener("click", ()=>{
    playRound("scissors")

});
paper.addEventListener("click", ()=>{
    playRound("paper")
});

function playRound(humanChoice, computerChoice){

    computerChoice=getComputerChoice(1,3);
   
   
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice ==="scissors" && computerChoice==="paper"||  humanChoice ==="paper" && computerChoice==="rock"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore+=1
        console.log(`player score is ${humanScore} and computer score is ${computerScore}`)
    }
    else if (humanChoice === "paper" && computerChoice === "scissors" || humanChoice ==="rock" && computerChoice==="paper"|| 
         humanChoice ==="scissors" && computerChoice==="rock")
    {
        console.log(`You lose! ${humanChoice} beats ${computerChoice}`)
        computerScore+=1
        console.log(`player score is ${humanScore} and computer score is ${computerScore}`)
    }
    else if (humanChoice === computerChoice){
        console.log("It's a draw!")
        console.log(`player score is ${humanScore} and computer score is ${computerScore}`)
        
    }
    else{
        console.log("player gave an invalid input")
        playRound()
    }
    document.getElementById("playerScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
    if(humanScore>4){
       const text = document.createTextNode("Player won by getting to 5 points first! ");
       console.log("human won!")
       console.log(text)
       para.appendChild(text);
       }
       else if( computerScore>4){
        const text = document.createTextNode("Computer won by getting to 5 points first!");
        console.log("human won!")
        console.log(text)
        para.appendChild(text);
    }
}

