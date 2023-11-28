
let firstCard = 4
let secondCard = 3
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true 
let message = ""
let messageEl = document.getElementById("message-el")
console.log(messageEl)
function startGame(){
if (sum <= 20 ) {
    console.log("Do you want to draw a new car?")

}else if ( sum === 21){
    console.log("You've got Blackjack!")
    hasBlackJack = true
    
} else {
    console.log ("Bust!")
    isAlive = false
}

    
}

messageEl.textContent = message



