const config = require('./config.js');
const responseDiv = document.getElementById('text-response')
const intro = require('./intro.js');
const setup = require('./setup.js');
const battle = require('./battle.js');
let character;

async function gameLoop() {
    character = await intro();
    console.log(character)
    await setup();
    battle();
    console.log('waited')
}

gameLoop();

