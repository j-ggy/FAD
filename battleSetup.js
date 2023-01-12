const vDiv = document.getElementById('main-div')
const txtDiv = document.getElementById('text-response')
const config = require('./config.js')
const displayCharInfo = require('./displayCharInfo.js')
const summonMob = require('./summonMob.js')
const displayMobInfo = require('./displayMobInfo')
const fight = require('./fight.js')

async function battleSetup (character) {
    vDiv.style.display = "inline";
    displayCharInfo(character);
    config.activeMob = summonMob(config.mobLv);
    displayMobInfo(config.activeMob);
    await fight(character);
    config.mobLv += 1;
    console.log(`mob lv: ${config.mobLv}`)
    if (character.health > 0 && config.mobLv === 2) {
        console.log(config.mobLv)
        config.activeMob = summonMob(config.mobLv)
        console.log(config.activeMob)
        displayMobInfo(config.activeMob);
        console.log(config.activeMob);
        await fight(character);
        config.mobLv += 1;
        console.log(`mob lv: ${config.mobLv}`)        
    }
    if (character.health > 0 && config.mobLv === 3) {
        mob = summonMob(config.mobLv)
        displayMobInfo(config.activeMob);
        await fight(character);
    }

    if (character.health <= 0) {
        txtDiv.innerText = "You lost!"
    } else if (config.activeMob.health <= 0) {
        txtDiv.innerText = "You won"
    }
}

module.exports = battleSetup;