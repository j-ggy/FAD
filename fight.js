const displayCharInfo = require("./displayCharInfo")
const displayMobInfo = require('./displayMobInfo.js')
const config = require('./config.js')

const txtDiv = document.getElementById('text-response')
const attackBut = document.getElementById('attack-button')
const spellBut = document.getElementById('spell-button')
const petBut = document.getElementById('pet-button')
const potBut = document.getElementById('potion-button')

function fight (character) {
    return new Promise((resolve) => {
        attackBut.addEventListener("click", () => {
            if (character.health > 0 && config.activeMob.health > 0) {
                txtDiv.innerText = `Turn ${config.turn}: ${character.getDamage(character)}`
                displayMobInfo(config.activeMob);
                displayCharInfo(character);
                config.turn ++;
            }
            if (config.activeMob.health <= 0) {
                console.log(config.activeMob.health + "health ")
                txtDiv.innerText = `You beat ${config.activeMob.name}`
                console.log(config.mobLv)
                resolve()
            } else if(character.health <= 0) {
                txtDiv.innerText = `You lost to ${config.activeMob.name}!`
                resolve()
            }
        })
        spellBut.addEventListener("click", () => {
            if (character.className != 'Sorcerer') {
                txtDiv.innerText = "Only Sorcerer can use spells"
            } else {
                txtDiv.innerText = "spell used?"
            }
        })
        petBut.addEventListener("click", () => {
            txtDiv.innerText = character.summonPet();
        })
    
    
        
    })

    
}

module.exports = fight;