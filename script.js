console.log("hello world!")

function getComputerChoice(){
   let randomNumber = Math.floor(Math.random() * 3) + 1
//    if(randomNumber===1){
//     return "rock"
//    }
//    if(randomNumber===2){
//     return "paper"
//    }
//    if(randomNumber===3){
//     return "scissors"
//    }
    return randomNumber
}

// console.log(getComputerChoice())
// console.log(getComputerChoice())
// console.log(getComputerChoice())
// console.log(getComputerChoice())
// console.log(getComputerChoice())
// console.log(getComputerChoice())



function getHumanChoice(){
    let humanChoice = prompt("Type 1 for Rock, 2 for Paper, 3 for Scissors")
    return humanChoice
}

// console.log(getHumanChoice())

function game(comp, player){
    console.log(comp)
    console.log(player)
    if (comp == player){
        console.log("it's a tie")
        return   
    }else if(comp == 1 && player == 3 || comp == 2 && player == 1 || comp == 3 && player == 2){
        return "You lose"
    }else if(player == 1 && comp == 3 || player == 2 && comp == 1 || player == 3 && comp == 2){
        return "You Win"
    }
   
}


let answer = console.log(game(getComputerChoice(), getHumanChoice()))

// if(getComputerChoice() === getHumanChoice()){
//     console.log(answer)
// }


const carsIHad = ["Chrysler", "Ford", "Toyota", "Jeep", "Dodge"]
carsIHad.forEach(car => console.log(`I once had a car by the maker of ${car}`))

