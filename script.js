let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let newCardButton = document.getElementById("newCard"); 


function startGame() {
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards : " + firstCard + " " + secondCard;
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
 
 let additionalCard = 7;
 sum = sum + additionalCard;
 
 renderGame()
}
newCardButton.addEventListener("click", newCard);