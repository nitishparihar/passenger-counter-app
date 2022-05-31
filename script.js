let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function add() {
    count += 1
    countEl.textContent = count
}

function subtract() {
    countEl.textContent = count -= 1
}

function save() {
    let countStr = count + " : "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}
