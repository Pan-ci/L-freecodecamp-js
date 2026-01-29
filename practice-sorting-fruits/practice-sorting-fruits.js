let fruits = ["\u{1F34E}", "\u{1F34A}", "\u{1F34E}", "\u{1F34E}", "\u{1F34A}"]
const appleShelf = document.getElementById("apple-shelf")
const orangeShelf = document.querySelector(".orange-shelf")

function sort() {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === "\u{1F34E}") {
            appleShelf.textContent += "\u{1F34E} "
        } else { // advice: specifiy orange explicitly, in case an ex banana added to the fruits array
            orangeShelf.textContent += "\u{1F34A} "
        }
    }
}

sort()
