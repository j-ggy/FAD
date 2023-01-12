const vDiv = document.getElementById('main-div')
const txtDiv = document.getElementById('text-response')
const config = require('./config.js')
const displayCharInfo = require('./displayCharInfo.js')
const summonMob = require('./summonMob.js')
const displayMobInfo = require('./displayMobInfo')

function battle (character) {
    vDiv.style.display = "inline";
    txtDiv.innerHTML += `<div id="vil-text-1">I'm ${config.charName} the ${config.classChoice} </div>`;
    let level=1;
    // let mob = summonMob(level);
    displayCharInfo(character);
    // displayMobInfo(config.activeMob);
}

module.exports = battle;