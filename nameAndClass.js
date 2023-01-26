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

async function nameAndClass () {
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