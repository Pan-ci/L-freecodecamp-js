let firstCard = 1
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// practice, for now, I think, const is better
let messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.querySelector(".cards-el") // dot for CSS class, #cards-el for id

function startGame() {
    if (sum <= 20) {
        message = "Want to draw a new card?"
    } else if (sum === 21) {
        message = "Congratulations, you've got the Blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = sum
    cardsEl.textContent = firstCard + " | " + secondCard
}

/* "\u{1F60D}"
String.fromCodePoint(0x1F60E) */