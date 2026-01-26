// Practices
// variable practice

let num1 = 8
let num2 = 2
document.getElementById("num-el1").textContent = num1
document.getElementById("num-el2").textContent = num2
const sumEl = document.getElementById("sum-el")
console.log(sumEl)

function add() {
    console.log("add clicked.")
    sumEl.textContent = num1 + num2    
}

function subtract() {
    sumEl.textContent = num1 - num2    
}

function multiply() {
    sumEl.textContent = num1 * num2    
}

function divide() {
    sumEl.textContent = num1 / num2    
}

const reset = () => { sumEl.textContent = "" }

setInterval(reset, 5000)