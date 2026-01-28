let message = ""
let player = {
    name: "Anonymous",
    chips: 0
}
let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
// practice, for now, I think, const is better
let messageEl = document.getElementById("message-el")
const sumEl = document.getElementById("sum-el")
const cardsEl = document.querySelector(".cards-el") // dot for CSS class, #cards-el for id
const playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $ " + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1

    if (randomCard > 10) {
        randomCard = 10
    } else if (randomCard === 1) {
        randomCard = 11
    }

    return randomCard
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    hasBlackJack = false
     
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "

    for (let i = 0; i < cards.length; i++) cardsEl.textContent += cards[i] + " "
    // cardsEl.textContent += cards[cards.length - 1]

    if (sum <= 20) {
        message = "Want to draw a new card?"
    } else if (sum === 21) {
        message = "Congratulations, you've got the Blackjack"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }

    sumEl.textContent += sum
    messageEl.textContent = message
}

/* "\u{1F60D}"
String.fromCodePoint(0x1F60E) */

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } else if (isAlive === true && hasBlackJack === true) {
        message = "You've won the game. Start another if you want to"
    } else if (isAlive === false) {
        message = "You've lost. Start a new game if you want to try again"
    }

    messageEl.textContent = message
}