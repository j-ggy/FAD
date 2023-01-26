
const displayCharInfo = require('./displayCharInfo.js')
const displayMobInfo = require('./displayMobInfo')
const summonMob = require('./summonMob.js')
const config = require('./config.js');
const attackButt = document.getElementById('attack-button')
const spellButt = document.getElementById('spell-button')
const summonButt = document.getElementById('pet-button')
const potbutt = document.getElementById('potion-button')
const vDiv = document.getElementById('main-div')
const classDiv = document.getElementById('class-div')
const responseDiv = document.getElementById('text-response')
let charDmg, mobDmg;

async function setup () {
    summonMob(config.mobLv);
    displayCharInfo(character);
    displayMobInfo(config.activeMob);


    classDiv.style.display = "none";
    vDiv.style.display = "inline";

    attackButt.addEventListener("click", () => {
        config.turn ++;
        charDmg = character.getDamage();
        mobDmg = Math.max(0, config.activeMob.damage - character.defense);
        config.activeMob.health -= charDmg;
        character.health -= mobDmg;
        displayCharInfo(character);
        displayMobInfo(config.activeMob);
        responseDiv.innerText = `You did ${character.getDamage()} damage, and took ${mobDmg} damage.`
    })

    return new Promise((resolve) => {
        console.log('finished setup')
        resolve();
    })
}


module.exports = setup;