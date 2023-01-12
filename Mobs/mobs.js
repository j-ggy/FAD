class Mob {
    constructor (name, damage, defense, health) {
        this.name = name;
        this.damage = damage;
        this.defense = defense;
        this.health = health;
    }
    getMobStats() {
        let str = "";
        str += `Name: ${this.name}`;
        str += `Attack: ${this.attack} <br/>`;
        str += `Defense: ${this.defense}<br/>`;
        str += `Health: ${this.health}<br/>`;
    }
}

module.exports = Mob;