const justSomeDude = require('./Mobs/justSomeDude.js')
const rabbit = require('./Mobs/rabbit.js')
const boulder = require('./Mobs/suspiciousBoulder.js')
const panda = require('./Mobs/rabidPanda.js')
const spider = require('./Mobs/tarantula.js')

function summonMob(level) {
    config.rng = Math.random();
    if (level == 1) {        
        if (config.rng >= 0.5) {
            config.activeMob = rabbit;
            return rabbit;

        } else if (config.rng < 0.5) {
            config.activeMob = justSomeDude;
            return justSomeDude;
        }
    } else if (level == 2) {
        if (config.rng >= 0.5) {
            config.activeMob = panda;
            return panda;
        } else if (config.rng < 0.5) {
            config.activeMob = boulder;
            return boulder;
        }
    } else if (level == 3) {
        config.activeMob = spider;
        return spider;
    }
}

module.exports = summonMob;