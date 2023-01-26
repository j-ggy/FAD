const vDiv = document.getElementById('main-div')
const intDiv = document.getElementById('intro-div')
const classDiv = document.getElementById('class-div')
const config = require('./config.js')
const setupListeners = require('./setupListeners.js')
const displayCharInfo = require('./displayCharInfo.js')
const summonMob = require('./summonMob.js')
const displayMobInfo = require('./displayMobInfo')

function battleSetup (character) {
    classDiv.style.display = "none";
    intDiv.style.display = 'none';
    vDiv.style.display = "inline";
    displayCharInfo(character);
    console.log("made it 1")
    config.activeMob = summonMob(config.mobLv);

    console.log("made it 2")
    displayMobInfo(config.activeMob);

    console.log("made it 3")
    setupListeners();

    console.log("made it 4")
}

module.exports = battleSetup;