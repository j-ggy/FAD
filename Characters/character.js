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
