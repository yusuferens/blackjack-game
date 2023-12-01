let player = {
    name : "Yusuf",
    chips : 145
}
let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let newCardButton = document.getElementById("newCard"); 
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    if (randomNumber === 1 ){
        return 11
    
    }else if ( randomNumber > 10){
        return 10
    
    }else{
        return randomNumber
    }
}
    

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard] 
    sum = firstCard + secondCard;
    
    renderGame()

}
function renderGame() {
    cardsEl.textContent = "Cards : "
    for(i = 0; i<cards.length; i++){
    cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "Bust!";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
 if (isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    let additionalCard = getRandomCard();
    sum = sum + additionalCard;
    cards.push(additionalCard);
    renderGame()
}
}
newCardButton.addEventListener("click", newCard);