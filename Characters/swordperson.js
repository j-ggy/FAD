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