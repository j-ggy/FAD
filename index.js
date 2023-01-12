const intro = require('./intro.js');
const nameAndClass = require('./nameAndClass');
const battle = require('./battle.js')

let character;
async function init () {
    intro(); //plesantries
    character = await nameAndClass(); //submit name and pick class
}


async function gameLoop() {
    await init();
    battle(character);
}

gameLoop();