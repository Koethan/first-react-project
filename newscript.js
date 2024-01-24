


// function game(computer,human){
//     // let scoreHuman = 0
//     // let scoreComputer = 0
//     // for(let i = 0; i <= 4; i++){
//     //     console.log(oneRound(computer, human))
//     //     console.log(i)
//     //     // if(oneRound(computer,human).includes('win')){
//     //     //     scoreHuman++
//     //     // }else if(oneRound(computer, human).includes('lose')){
//     //     //     scoreComputer++
//     //     // }
//     // }
//     (oneRound(computer,human))

//     // return `The final score was computer: ${scoreComputer} to player: ${scoreHuman}!`
// } 

function game(){

    function getComputerChoice(){
        let random = Math.floor(Math.random() * 3)
        if(random == 0){
            return "rock"
        }else if(random == 1){
            return "paper"
        }else if(random == 2){
            return "scissors"
        }
    
    }

    function playerChoice(){
        let choice = prompt("please enter rock, paper, scissors").toLowerCase()
        return choice
    
    }

    function oneRound(comp, player){
    
        if (comp == "rock" && player == "scissors" || comp == "paper" && player == "rock" || comp == "scissors" && player == "paper" ){
            
            return `You lose! ${comp} beats ${player}`
    
        } else if (player == "rock" && comp == "scissors" || player == "paper" && comp == "rock" || player == "scissors" && comp == "paper"){
            return `You win! ${player} beats ${comp}`
        } else if( comp == player){
            return `Its a tie! ${player} matches with ${comp}`
            
        }
      
        
    }  

    for(let i = 0; i <=4; i++){
        console.log(oneRound(getComputerChoice(), playerChoice()))
    } 
}



game()


// console.log(game(getComputerChoice(),playerChoice() ))