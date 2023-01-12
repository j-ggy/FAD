const intro = require('./intro.js');
const nameAndClass = require('./nameAndClass');
const battleSetup = require('./battleSetup.js')

let character;
async function init () {
    intro(); //plesantries
    character = await nameAndClass(); //submit name and pick class
}


async function gameLoop() {
    await init();
    battleSetup(character);
}

gameLoop();