const config = require('./config.js');
const responseDiv = document.getElementById('text-response')
const intro = require('./intro.js');
const setup = require('./setup.js');
const waitForChoice = require('./waitForChoice.js')
const battle = require('./battle.js')
let character;

async function gameLoop() {
    character = await intro();
    setup();
    while(character.health > 0 && config.activeMob.health > 0) {
        const choice = await waitForChoice();
        battle(choice);
        if (config.mobLv === 4) {
            break;
        } 
    }
    if (character.health <= 0) {
        responseDiv.innerText = 'You Lose!!'
    } else if (character.health > 0) {
        responseDiv.innerText = 'You Won!!'
    }
}

gameLoop();

