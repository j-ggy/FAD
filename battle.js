const config = require('./config');
const displayCharInfo = require('./displayCharInfo.js')
const displayMobInfo = require('./displayMobInfo')
const waitForSpell = require('./waitForSpell.js')
const summonMob = require('./summonMob.js')
const responseDiv = document.getElementById('text-response')
const spellActions = document.getElementById('spell-actions')
let spellIndex = 1;

async function battle(choice) {
    if (choice == "attack") {
        responseDiv.innerText = character.getDamage();
    }
    if (choice == "spell") {
        if (character.className != 'Sorcerer') {
            responseDiv.innerText = "Only Sorcerer can use spells"
        } else {
            spellActions.style.display = "flex";
            const spellChoice = await waitForSpell();
            if (spellChoice == 'use') {
                if (character.activeSpell) {
                    if (character.mana >= character.activeSpell.manaCost) {
                        responseDiv.innerText = character.getSpellDamage();
                        character.mana -= character.activeSpell.manaCost;
                    } else {
                        responseDiv.innerText("Not enough mana!")
                    }
                } else {
                    responseDiv.innerText = 'no active spell!'
                }

            }
            else if (spellChoice == 'change') {
                spellIndex = (spellIndex +1) % character.spells.length;
                character.activeSpell = character.spells[spellIndex];
                responseDiv.innerText = `${character.spells[spellIndex].name} equipped`;
                displayCharInfo(character);
            }
            spellActions.style.display = "none";                
        }
    }
    if (choice == "summon") {
        responseDiv.innerText = character.summonPet();
    }
    if (choice == "potion") {
        responseDiv.innerText = character.usePotion();
    }
    if (config.activeMob.health <= 0) {
        config.mobLv ++;
        if (config.mobLv != 4) {
            responseDiv.innerText = `Defeated ${config.activeMob.name} \n & Leveled up!`
            character.levelUp();
            summonMob(config.mobLv);
            displayCharInfo(character);
            displayMobInfo(config.activeMob);
        }
    }
    displayCharInfo(character);
    displayMobInfo(config.activeMob)
}

module.exports = battle;