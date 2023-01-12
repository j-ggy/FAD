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
            str += `Active Weapon: ${this.activeWeapon}<br/>`
        }
        if (this.activeSpell) {
            str += `Active Spell: ${this.activeSpell}<br/>`
        }
        if (this.activePet) {
            str += `Active Pet: ${this.activePet}<br/>`
        }
        return str;
    }

    // getDamage() {
    //     let damage = player.activeWeapon.damage + player.attack - config.activeMob.defense;
    //     let dTaken = Math.max(0, config.activeMob.damage - player.defense)
    //         if (player.activePet) {
    //             damage += player.activePet.damage;
    //         }
    //         console.log(`You do ${damage} damage and recieved ${dTaken} damage.`);

    //         player.health -= dTaken;
    //         config.activeMob.health -=damage;
    //         return damage;
    // }
    // getSpellDamage() { 
    //     let damage =0;
    //     let heal =0;
    //     if (player.activePet) {
    //         damage += player.activePet.damage;
    //     } 
    //     let spellPower = Math.sign(player.activeSpell.power);
    //         if (spellPower == 1) {
    //             damage += (player.activeSpell.power - config.activeMob.defense);
    //             console.log(`You do ${damage} damage`)
                
    //             return damage;
    //         } else if (spellPower == -1) {
    //             heal -= player.activeSpell.power;
    //             console.log(`Healed for ${heal} HP`)
    //             return damage;
    //         }
    // }

    // usePotion() {
    //     if (player.potions > 0) {
    //         player.health += 25;
    //         player.potions -= 1;
    //     } else {
    //         console.log("You got no potions.")
    //     }
    // }
    // async equipWeapon() {
    //     for (let i=0; i < player.weapons.length; i++) {
    //         console.log(`[${[i]}]:${player.weapons[i].name}`)
    //     }
    //     while(true) {
    //         config.action = Number(await prompt(`Choose a weapon`));
    //         if (config.action <= player.weapons.length) {
    //             player.activeWeapon = player.weapons[config.action];
    //             break;
    //         } else {
    //             console.log(config.invalidEntry);
    //         }
    //     }
    //     console.log(player.activeWeapon.name);
    // }
    // async equipSpell() {
    //     if (player.className == config.sorcererClassName) {
    //         for (let i=0; i < player.spells.length; i++) {
    //             console.log(`[${[i]}]:${player.spells[i].name}`)
    //         }
    //         while(true) {
    //             config.action = Number(await prompt(`Type the number of the spell:`));
    //             if (config.action <= player.spells.length) {
    //                 player.activeSpell = player.spells[config.action];
    //                 break;
    //             } else {
    //                 console.log(config.invalidEntry);
    //             }
    //         }
    //         console.log(player.activeSpell);
    //     } else {
    //         console.log(`A ${player.className} can't use spells!`);
    //     }

    // }

    // async summonPet() {
    //     for (let i=0; i < player.pets.length; i++) {
    //         console.log(`[${[i]}]:${player.pets[i].name}`)
    //     }
    //     while(true) {
    //         config.action = Number(await prompt(`Choose a Summon`));
    //         if (config.action <= player.pets.length) {
    //             player.activePet = player.pets[config.action];
    //             break;
    //         } else {
    //             console.log(config.invalidEntry);
    //         }
    //     }
    //     console.log(player.activePet.name);
    // }  
}

module.exports = Character;
