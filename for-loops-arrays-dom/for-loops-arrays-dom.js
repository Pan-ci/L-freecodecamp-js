let sentence = ["Hello", "my", "name", "is", "Asad"]
let greetingEl = document.getElementById("greeting-el")



for (let i = 0; i < sentence.length - 1; i++) {
    greetingEl.textContent += sentence[i] + " "
}

greetingEl.textContent += sentence[sentence.length - 1]