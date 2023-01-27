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

    getDamage() {
        let damage = Math.max(0, this.activeWeapon.damage + this.attack - config.activeMob.defense);
        let dTaken = Math.max(0, config.activeMob.damage - this.defense)
            if (this.activePet) {
                damage += this.activePet.damage;
            }
            config.activeMob.health = Math.max(0, config.activeMob.health - damage);
            this.health = Math.max(0, this.health - dTaken);
            return `You do ${damage} damage and recieved ${dTaken} damage.`
    }

    getSpellDamage() { 
        let damage =0;
        let heal =0;
        if (this.activePet) {
            damage += this.activePet.damage;
        } 
        let spellPower = Math.sign(this.activeSpell.power);
            if (spellPower == 1) {
                damage += (this.activeSpell.power - config.activeMob.defense);
                let dTaken = Math.max(0, config.activeMob.damage - this.defense)

                this.health -= dTaken;
                config.activeMob.health -=damage;
                return `You do ${damage} damage and recieved ${dTaken} damage.`

            } else if (spellPower == -1) {
                heal -= this.activeSpell.power;
                console.log(this.activeSpell.power)
                let dTaken = Math.max(0, config.activeMob.damage - this.defense)
                this.health -= dTaken-heal;
                return `You heal ${heal} and recieved ${dTaken} damage.`
            }
    }

    summonPet() {
        this.activePet = this.pets[0];
        return `Summoned ${this.activePet.name}`
    }  
    usePotion() {
        if (this.potions > 0) {
            this.health += 20;
            this.mana += 10;
            this.potions -= 1;
            return `Used a potion to heal 20 hp and 10 mana`
        } else if (this.potions <= 0) {
            return `Out of Potions.`
        }
    }
}

module.exports = Character;
