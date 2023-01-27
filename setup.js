const displayCharInfo = require('./displayCharInfo.js')
const displayMobInfo = require('./displayMobInfo')
const summonMob = require('./summonMob.js')
const config = require('./config.js');
const vDiv = document.getElementById('main-div')
const classDiv = document.getElementById('class-div')

function setup () {
    summonMob(config.mobLv);
    displayCharInfo(character);
    displayMobInfo(config.activeMob);
    classDiv.style.display = "none";
    vDiv.style.display = "inline";
    console.log('setup')

    // attackButt.addEventListener("click", () => {
    //     config.turn ++;
    //     charDmg = character.getDamage();
    //     mobDmg = Math.max(0, config.activeMob.damage - character.defense);
    //     config.activeMob.health -= charDmg;
    //     character.health -= mobDmg;
    //     displayCharInfo(character);
    //     displayMobInfo(config.activeMob);
    //     responseDiv.innerText = `You did ${character.getDamage()} damage, and took ${mobDmg} damage.`
    // })

    // return new Promise((resolve) => {
    //     console.log('finished setup')
    //     resolve();
    // })
}


module.exports = setup;