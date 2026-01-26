// Rendering an error message

let errorMessage = "Something went wrong, please try again"
const errorEl = document.getElementById("error-el")
console.log(errorEl)

function purchase() {
    console.log("Purchase button clicked.")
    errorEl.textContent = errorMessage

    setInterval(() => errorEl.textContent = "", 5000)
}