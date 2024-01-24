
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
            return `Its a tie!`
            
        }
      
        
    }  


    for (let i = 0; i <=4; i++){
        console.log(oneRound(getComputerChoice(), playerChoice()))
    }

    // for(let i = 0; i <=4; i++){
    //     // if((oneRound(getComputerChoice(), playerChoice())) == `Its a tie!`){
    //     //     i--
    //     // }else{
    //     //     console.log(oneRound(getComputerChoice(), playerChoice()))
    //     // }
    //     console.log(oneRound(getComputerChoice(), playerChoice()))
    // } 



    // let count = 1
    // while(count<=5){
    //     if(oneRound(getComputerChoice(), playerChoice())== "Its a tie!"){
    //         console.log(oneRound(getComputerChoice(), playerChoice()))
    //         console.log('no')

    //     }else{
    //         console.log(oneRound(getComputerChoice(), playerChoice()))
    //         console.log(`round ${count}`)
    //         console.log('yes')
    //         count++
    //     }
    // }
}



game()


// console.log(game(getComputerChoice(),playerChoice() ))