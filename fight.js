const displayCharInfo = require("./displayCharInfo")
const displayMobInfo = require('./displayMobInfo.js')
const config = require('./config.js')

const txtDiv = document.getElementById('text-response')
const attackBut = document.getElementById('attack-button')
const spellBut = document.getElementById('spell-button')
const petBut = document.getElementById('pet-button')
const potBut = document.getElementById('potion-button')
const spellActions = document.getElementById('spell-actions')
const useSpell = document.getElementById('use-spell')
const changeSpell = document.getElementById('change-spell')
let spellIndex = 1;

function fight (character) {
    return new Promise((resolve) => {

        spellBut.addEventListener("click", () => {
            if (character.className != 'Sorcerer') {
                txtDiv.innerText = "Only Sorcerer can use spells"
            } else {
                spellActions.style.display = "flex";                
            }
        })
        useSpell.addEventListener("click", () => {
            if (!character.activeSpell) {
                txtDiv.innerText = "No active Spell"
            } else if (character.activeSpell) {
                if (character.health > 0 && config.activeMob.health > 0) {
                    txtDiv.innerText = `Turn ${config.turn}: ${character.getSpellDamage(character)}`
                    displayMobInfo(config.activeMob);
                    displayCharInfo(character);
                    config.turn ++;
                }
                if (config.activeMob.health <= 0) {
                    console.log(config.activeMob.health + "health ")
                    txtDiv.innerText = `You beat ${config.activeMob.name}`
                    console.log(config.mobLv)
                    spellActions.style.display = "none";
                    resolve()
                } else if(character.health <= 0) {
                    txtDiv.innerText = `You lost to ${config.activeMob.name}!`
                    spellActions.style.display = "none";
                    resolve()
                }

            spellActions.style.display = "none";
            }
        })
        changeSpell.addEventListener("click", () => {
            spellIndex = (spellIndex +1) % character.spells.length;
            character.activeSpell = character.spells[spellIndex];
            txtDiv.innerText = `${character.spells[spellIndex].name} equipped`;
            displayCharInfo(character);
            spellActions.style.display = "none";
        })
        petBut.addEventListener("click", () => {
            txtDiv.innerText = character.summonPet();
            displayCharInfo(character)
        })
        potBut.addEventListener("click", () => {
            if (character.potions > 0) {
                character.health += 20;
                character.potions -= 1;
                txtDiv.innerText = "Used a potion!"
                displayCharInfo(character);
            }
        })      
    })    
}

module.exports = fight;