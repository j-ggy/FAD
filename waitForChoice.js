const attackButt = document.getElementById('attack-button')
const spellButt = document.getElementById('spell-button')
const summonButt = document.getElementById('pet-button')
const potButt = document.getElementById('potion-button')

function waitForChoice() {
    return new Promise((resolve) => {
        attackButt.addEventListener("click", () => {
            resolve("attack");
        })
        spellButt.addEventListener("click", () => {
            resolve("spell");
        })
        summonButt.addEventListener("click", () => {
            resolve("summon");
        })
        potButt.addEventListener("click", () => {
            resolve("potion");
        })
    })
}

module.exports = waitForChoice;