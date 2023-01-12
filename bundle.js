(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const config = require("../config");

//main functions for character creation, damage, pets, weapons and spells.

class Character {
    constructor(name, className, attack, magic, defense, health, mana) {
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.health = health;
        this.mana = mana;
        this.maxHealth = health;
        this.weapons = [];
        this.pets = [];
        this.spells = [];
        this.activePet = null;
        this.activeSpell = null;
        this.activeWeapon = null;
        this.potions = 3;
    }
    levelUp() {
        this.level += 1;
        if (this.className === "Swordperson") { //fix the values 
            this.attack += 2;
            this.magic += 1;
            this.defense += 4;
            this.health += 20;
            this.maxHealth += 20;
            this.mana += 5;
            

        } else if (this.className === "Hunter") {
            this.attack += 1;
            this.magic += 2;
            this.defense += 2;
            this.health += 10;
            this.maxHealth += 10;
            this.mana += 20;

        } else if (this.className === "Sorcerer") {
            this.attack += 2;
            this.magic += 2;
            this.defense += 2;
            this.health += 15;
            this.maxHealth += 15;
            this.mana += 15;
        }
    }
    getStats() {
        let str = "";
        str += `Attack: ${this.attack} <br/>`;
        str += `Magic: ${this.magic}<br/>`;
        str += `Defense: ${this.defense}<br/>`;
        str += `Health: ${this.health}<br/>`;
        str += `Mana: ${this.mana}<br/>`;
        str += `Potions: ${this.potions}<br/>`
        if (this.activeWeapon) {
            str += `Active Weapon: ${this.activeWeapon.name}<br/>`
        }
        if (this.activeSpell) {
            str += `Active Spell: ${this.activeSpell.name}<br/>`
        }
        if (this.activePet) {
            str += `Active Pet: ${this.activePet.name}<br/>`
        }
        return str;
    }

    getDamage(character, mob) {
        let damage = Math.max(0, character.activeWeapon.damage + character.attack - config.activeMob.defense);
        let dTaken = Math.max(0, config.activeMob.damage - character.defense)
            if (character.activePet) {
                damage += character.activePet.damage;
            }
            console.log(`You do ${damage} damage and recieved ${dTaken} damage.`);

            character.health -= dTaken;
            config.activeMob.health -=damage;
            return `You do ${damage} damage and recieved ${dTaken} damage.`
    }
    getSpellDamage(character) { 
        let damage =0;
        let heal =0;
        if (character.activePet) {
            damage += character.activePet.damage;
        } 
        let spellPower = Math.sign(character.activeSpell.power);
            if (spellPower == 1) {
                damage += (character.activeSpell.power - config.activeMob.defense);
                console.log(`You do ${damage} damage`)
                
                let dTaken = Math.max(0, config.activeMob.damage - character.defense)

                character.health -= dTaken;
                config.activeMob.health -=damage;
                return `You do ${damage} damage and recieved ${dTaken} damage.`

            } else if (spellPower == -1) {
                heal -= character.activeSpell.power;
                console.log(`Healed for ${heal} HP`)
                let dTaken = Math.max(0, config.activeMob.damage - character.defense)
                character.health -= dTaken;
                return `You heal ${heal} and recieved ${dTaken} damage.`
            }
    }

    summonPet() {
        this.activePet = this.pets[0];
        return `Summoned ${this.activePet.name}`
    }  
}

module.exports = Character;

},{"../config":23}],2:[function(require,module,exports){
const Pet = require("../Pets/pet");
const Character = require("./character");
const bow = require("../Weapons/bows/bow");
const cat = require("../Pets/cat");

class Hunter extends Character {
    constructor(name) {
        super(name, "Hunter", 4, 2, 3, 150, 100);
        this.weapons.push(bow);
        this.activeWeapon = bow;
        this.pets.push(cat);
    }
    
}

module.exports = Hunter; 
},{"../Pets/cat":11,"../Pets/pet":14,"../Weapons/bows/bow":18,"./character":1}],3:[function(require,module,exports){
const Pet = require("../Pets/pet");
const Character = require("./character");
const lightning = require("../Spells/lightning");
const heal = require("../Spells/heal");
const staff = require("../Weapons/staffs/staff");
const miniMage = require("../Pets/miniMage");

class Sorcerer extends Character {
    constructor(name) {
        super(name, "Sorcerer", 2, 8, 1, 100, 200);
        this.weapons.push(staff);
        this.activeWeapon = staff;
        this.spells.push(lightning, heal);
        this.pets.push(miniMage);
    }
}

module.exports = Sorcerer;
},{"../Pets/miniMage":13,"../Pets/pet":14,"../Spells/heal":15,"../Spells/lightning":16,"../Weapons/staffs/staff":19,"./character":1}],4:[function(require,module,exports){
const Character = require("./character");
const woodSword = require("../Weapons/swords/woodSword");
const flSword = require("../Pets/floatingSword");

class Swordperson extends Character {
    constructor(name) {
        super(name, "Swordperson", 15, 1, 2, 125, 40);
        this.weapons.push(woodSword);
        this.activeWeapon = woodSword;
        this.pets.push(flSword);
    }
}

module.exports = Swordperson;
},{"../Pets/floatingSword":12,"../Weapons/swords/woodSword":20,"./character":1}],5:[function(require,module,exports){
const Mob = require("./mobs");

const justSomeDude = new Mob("Just some Dude", 4, 2, 50);

module.exports = justSomeDude;
},{"./mobs":6}],6:[function(require,module,exports){
class Mob {
    constructor (name, damage, defense, health) {
        this.name = name;
        this.damage = damage;
        this.defense = defense;
        this.health = health;
    }
    getMobStats() {
        let str = "";
        str += `Name: ${this.name} <br/>`;
        str += `Attack: ${this.damage} <br/>`;
        str += `Defense: ${this.defense}<br/>`;
        str += `Health: ${this.health}<br/>`;
        return str;
    }
}

module.exports = Mob;
},{}],7:[function(require,module,exports){
const Mob = require("./mobs");

const rabbit = new Mob("cute lil rabbit", 3, 0, 10);

module.exports = rabbit;
},{"./mobs":6}],8:[function(require,module,exports){
const Mob = require("./mobs");

const panda = new Mob("Rabid Panda", 9, 5, 75);

module.exports = panda;
},{"./mobs":6}],9:[function(require,module,exports){
const Mob = require("./mobs");

const boulder = new Mob("A Suspicious Boulder", 8, 6, 70);

module.exports = boulder;
},{"./mobs":6}],10:[function(require,module,exports){
const Mob = require("./mobs");

const spider = new Mob("Tarantulatar", 12, 8, 150);

module.exports = spider;
},{"./mobs":6}],11:[function(require,module,exports){
const Pet = require("./pet");

const cat = new Pet("Cat with a Bat", 6);

module.exports = cat;
},{"./pet":14}],12:[function(require,module,exports){
const Pet = require("./pet");

const flSword = new Pet("Floating Sword", 4);

module.exports = flSword;
},{"./pet":14}],13:[function(require,module,exports){
const Pet = require("./pet");

const miniMage = new Pet("Smaller Sorcerer", 4);

module.exports = miniMage;
},{"./pet":14}],14:[function(require,module,exports){
class Pet {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }
}

module.exports = Pet;
},{}],15:[function(require,module,exports){
const Spells = require("./spells");

const heal = new Spells("heal", -4, 8);

module.exports = heal;
},{"./spells":17}],16:[function(require,module,exports){
const Spells = require("./spells");

const lightning = new Spells("lightning", 8, 15);

module.exports = lightning;
},{"./spells":17}],17:[function(require,module,exports){
//if power is negative, spell heals. if power is positive it damages.

class Spells {
    constructor(name, power, manaCost) {
    this.name = name;
    this.power = power;
    this.manaCost = manaCost;
    }
}

module.exports = Spells;
},{}],18:[function(require,module,exports){
const Weapon = require("../weapons");

const Bow = new Weapon("Bow", 2, "regular arrows");

module.exports = Bow;
},{"../weapons":21}],19:[function(require,module,exports){
const Weapon = require("../weapons");

const Staff = new Weapon("Wood Staff", 1, null);

module.exports = Staff;
},{"../weapons":21}],20:[function(require,module,exports){
const Weapon = require("../weapons");

const WoodSword = new Weapon("Wood Sword", 4, null);

module.exports = WoodSword;
},{"../weapons":21}],21:[function(require,module,exports){
class Weapon {
    constructor(name, damage, accessory) {
        this.name = name;
        this.damage = damage;
        this.accessory = accessory;
    }
}

module.exports = Weapon;
},{}],22:[function(require,module,exports){
const vDiv = document.getElementById('main-div')
const txtDiv = document.getElementById('text-response')
const config = require('./config.js')
const displayCharInfo = require('./displayCharInfo.js')
const summonMob = require('./summonMob.js')
const displayMobInfo = require('./displayMobInfo')
const fight = require('./fight.js')

async function battleSetup (character) {
    vDiv.style.display = "inline";
    displayCharInfo(character);
    config.activeMob = summonMob(config.mobLv);
    displayMobInfo(config.activeMob);
    await fight(character);
    config.mobLv += 1;
    console.log(`mob lv: ${config.mobLv}`)
    if (character.health > 0 && config.mobLv === 2) {
        character.levelUp();
        displayCharInfo(character);
        config.activeMob = summonMob(config.mobLv)
        displayMobInfo(config.activeMob);
        await fight(character);
        config.mobLv += 1;
        console.log(`mob lv: ${config.mobLv}`)        
    }
    if (character.health > 0 && config.mobLv === 3) {
        character.levelUp();
        displayCharInfo(character);
        mob = summonMob(config.mobLv)
        displayMobInfo(config.activeMob);
        await fight(character);
    }

    if (character.health <= 0) {
        txtDiv.innerText = "You lost!"
    } else if (config.activeMob.health <= 0) {
        txtDiv.innerText = "You won"
    }
}

module.exports = battleSetup;
},{"./config.js":23,"./displayCharInfo.js":24,"./displayMobInfo":25,"./fight.js":26,"./summonMob.js":30}],23:[function(require,module,exports){
const config =  {
    hunterClassName: "Hunter",
    sorcererClassName: "Sorcerer",
    swordpersonClassName: "Swordperson",
    classChoice: null,
    gameName: "GAMENAME",
    invalidEntry: "I'm sorry, that was not a valid entry.",
    charName: "",
    mobs: [],
    activeMob: null,
    mobLv: 1,
    action: null,
    rng: null,
    turn: 1
}

module.exports = config;
},{}],24:[function(require,module,exports){
function displayCharInfo (character) {
    const charInfoDiv = document.getElementById('char-info')
    let charInfoString = `<h3>Player:</h3>`
    charInfoString += `Name: ${character.name} <br/>`
    charInfoString += `Level: ${character.level} ${character.className} <br/>`
    charInfoString += `${character.getStats()} <br/>`
    charInfoDiv.innerHTML = charInfoString;
}

module.exports = displayCharInfo;
},{}],25:[function(require,module,exports){
function displayMobInfo (mob) {
    const mobInfoDiv = document.getElementById('mob-info')
    let mobInfoString = `<h3>Monster:</h3>`;
    mobInfoString += `${mob.getMobStats()} <br/>`
    mobInfoDiv.innerHTML = mobInfoString;
}

module.exports = displayMobInfo;
},{}],26:[function(require,module,exports){
const displayCharInfo = require("./displayCharInfo")
const displayMobInfo = require('./displayMobInfo.js')
const config = require('./config.js')

const txtDiv = document.getElementById('text-response')
const attackBut = document.getElementById('attack-button')
const spellBut = document.getElementById('spell-button')
const petBut = document.getElementById('pet-button')
const potBut = document.getElementById('potion-button')
const spellActions = document.getElementById('spell-actions')
const useSpell = document.getElementById('use-spell')
const changeSpell = document.getElementById('change-spell')
let spellIndex = 1;

function fight (character) {
    return new Promise((resolve) => {
        attackBut.addEventListener("click", () => {
            if (character.health > 0 && config.activeMob.health > 0) {
                txtDiv.innerText = `Turn ${config.turn}: ${character.getDamage(character)}`
                displayMobInfo(config.activeMob);
                displayCharInfo(character);
                config.turn ++;
            }
            if (config.activeMob.health <= 0) {
                console.log(config.activeMob.health + "health ")
                txtDiv.innerText = `You beat ${config.activeMob.name}`
                console.log(config.mobLv)
                resolve()
            } else if(character.health <= 0) {
                txtDiv.innerText = `You lost to ${config.activeMob.name}!`
                resolve()
            }
        })
        spellBut.addEventListener("click", () => {
            if (character.className != 'Sorcerer') {
                txtDiv.innerText = "Only Sorcerer can use spells"
            } else {
                spellActions.style.display = "flex";                
            }
        })
        useSpell.addEventListener("click", () => {
            if (!character.activeSpell) {
                txtDiv.innerText = "No active Spell"
            } else if (character.activeSpell) {
                if (character.health > 0 && config.activeMob.health > 0) {
                    txtDiv.innerText = `Turn ${config.turn}: ${character.getSpellDamage(character)}`
                    displayMobInfo(config.activeMob);
                    displayCharInfo(character);
                    config.turn ++;
                }
                if (config.activeMob.health <= 0) {
                    console.log(config.activeMob.health + "health ")
                    txtDiv.innerText = `You beat ${config.activeMob.name}`
                    console.log(config.mobLv)
                    spellActions.style.display = "none";
                    resolve()
                } else if(character.health <= 0) {
                    txtDiv.innerText = `You lost to ${config.activeMob.name}!`
                    spellActions.style.display = "none";
                    resolve()
                }

            spellActions.style.display = "none";
            }
        })
        changeSpell.addEventListener("click", () => {
            spellIndex = (spellIndex +1) % character.spells.length;
            character.activeSpell = character.spells[spellIndex];
            txtDiv.innerText = `${character.spells[spellIndex].name} equipped`;
            displayCharInfo(character);
            spellActions.style.display = "none";
        })
        petBut.addEventListener("click", () => {
            txtDiv.innerText = character.summonPet();
            displayCharInfo(character)
        })
        potBut.addEventListener("click", () => {
            if (character.potions > 0) {
                character.health += 20;
                character.potions -= 1;
                txtDiv.innerText = "Used a potion!"
                displayCharInfo(character);
            }
        })      
    })    
}

module.exports = fight;
},{"./config.js":23,"./displayCharInfo":24,"./displayMobInfo.js":25}],27:[function(require,module,exports){
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
},{"./battleSetup.js":22,"./intro.js":28,"./nameAndClass":29}],28:[function(require,module,exports){
const intText1 = document.getElementById('inttext-1')
const intText2 = document.getElementById('inttext-2')
const intText3 = document.getElementById('inttext-3')
const intText35 = document.getElementById('inttext-35')
const intText4 = document.getElementById('inttext-4')
const intText5 = document.getElementById('inttext-5')
const name = document.getElementById('name-input')
const intNextBut = document.getElementById('intro-next-button')
const submit = document.getElementById('name-submit')

function intro () {
    const texts = [intText1, intText2, intText3, intText35, intText4, intText5] //add text lines to array
    let current=1;
    intNextBut.addEventListener("click",() => {        
        texts.forEach(txt => txt.style.display = 'none'); //cycle through and show as button is pressed ending on name submission
        texts[current].style.display = "block";
        if ((current + 1) % texts.length == 0) {
            name.style.display = "inline";
            submit.style.display = "inline";
            intNextBut.style.display = "none";

        } else if ((current + 1) % texts.length != 0) {
            current = (current + 1) % texts.length;
        }
    })
}

module.exports = intro;
},{}],29:[function(require,module,exports){
const input = document.getElementById('name-input')
const submitBut = document.getElementById('name-submit')
const introDiv = document.getElementById('intro-div')
const classDiv = document.getElementById('class-div')
const config = require('./config.js')
const buttonDiv = document.getElementById('cbutton-div')
const huntBut = document.getElementById('hunter-button')
const sorcBut = document.getElementById('sorcerer-button')
const swrdBut = document.getElementById('swordperson-button')
const Hunter = require("./Characters/hunter");
const Swordperson = require("./Characters/swordperson");
const Sorcerer = require("./Characters/sorcerer");

function nameAndClass () {
    submitBut.addEventListener("click", () => {
        if (input.value.length > 0) {
            config.charName  = input.value;
            introDiv.style.display = "none";
            classDiv.style.display = "block";
            buttonDiv.style.display = "flex";
        }
    })
    return new Promise((resolve) => {
        huntBut.addEventListener("click", () => {
            config.classChoice = config.hunterClassName;
            classDiv.style.display = "none";
            resolve(new Hunter(config.charName))
        })
        sorcBut.addEventListener("click", () => {
            config.classChoice = config.sorcererClassName;
            classDiv.style.display = "none";
            resolve(new Sorcerer(config.charName))
        })
        swrdBut.addEventListener("click", () => {
            config.classChoice = config.swordpersonClassName;
            classDiv.style.display = "none";
            resolve(new Swordperson(config.charName))
        })
    })
};

module.exports = nameAndClass;
},{"./Characters/hunter":2,"./Characters/sorcerer":3,"./Characters/swordperson":4,"./config.js":23}],30:[function(require,module,exports){
const justSomeDude = require('./Mobs/justSomeDude.js')
const rabbit = require('./Mobs/rabbit.js')
const boulder = require('./Mobs/suspiciousBoulder.js')
const panda = require('./Mobs/rabidPanda.js')
const spider = require('./Mobs/tarantula.js')
const config = require('./config.js')

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
},{"./Mobs/justSomeDude.js":5,"./Mobs/rabbit.js":7,"./Mobs/rabidPanda.js":8,"./Mobs/suspiciousBoulder.js":9,"./Mobs/tarantula.js":10,"./config.js":23}]},{},[27]);
