/* let randomNumber = Math.floor(Math.random() * 6) + 1

console.log(randomNumber) */

// Math.random() returns random number
// after adding * 6, it returns number from 0 to 6, except 6
// Math.floor() make all decimal capped

// let randomNumber = Math.floor(Math.random() * 6)
// possible values of randomNumber: 1, 2, 4, 5, 3, 0

// let randomNumber = Math.floor(Math.random() * 6) + 1
// possible values of randomNumber: 5, 2, 6, 4, 3, 1

function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

let randomDice = rollDice()
console.log(randomDice)