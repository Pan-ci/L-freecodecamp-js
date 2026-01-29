let hands = ["rock", "paper", "scissor"]

function randomHand() {
    let index = Math.floor(Math.random() * 3)
    let hand = hands[index]
    return hand
}

let firstPersonHand = randomHand()
let secondPersonHand = randomHand()

console.log("First person: " + firstPersonHand)
console.log("Second person: " + secondPersonHand)