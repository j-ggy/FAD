const Pet = require("../Pets/pet");
const Character = require("./character");
const bow = require("../Weapons/bows/bow");
const cat = require("../Pets/cat");

class Hunter extends Character {
    constructor(name) {
        super(name, "Hunter", 4, 2, 3, 150, 100);
        this.weapons.push(bow);
        this.pets.push(cat);
    }
    
}

module.exports = Hunter; 