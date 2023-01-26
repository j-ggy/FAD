const config = require('./config.js')

function battle() {
    console.log('made it to battle func')
    while (character.health > 0 && config.activeMob.health > 0) {
        if (config.activeMob.health <= 0 && config.mobLv <= 2) {
            console.log('OKAY IT WORKED')
            config.mobLv++;
            console.log(config)
            summonMob(config.mobLv);
            displayCharInfo(character);
            displayMobInfo(config.activeMob);
        } else if (config.activeMob.health <= 0 && config.mobLv == 3) {
            console.log('you won')
        }
    }
    }


module.exports = battle;