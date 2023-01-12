//if power is negative, spell heals. if power is positive it damages.

class Spells {
    constructor(name, power, manaCost) {
    this.name = name;
    this.power = power;
    this.manaCost = manaCost;
    }
}

module.exports = Spells;