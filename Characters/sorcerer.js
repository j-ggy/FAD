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
        this.spells.push(lightning, heal);
        this.pets.push(miniMage);
    }
}

module.exports = Sorcerer;