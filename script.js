let firstCard = 4
let secondCard = 3
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true 

if (sum <= 20 ) {
    console.log("Do you want to draw a new car?")

}else if ( sum === 21){
    console.log("You've got Blackjack!")
    hasBlackJack = true
    
} else {
    console.log ("Bust!")
    isAlive = false
}

console.log(isAlive)