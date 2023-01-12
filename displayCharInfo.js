function displayCharInfo (character) {
    const charInfoDiv = document.getElementById('char-info')
    let charInfoString = `Name: ${character.name} <br/>`
    charInfoString += `Level: ${character.level} ${character.className} <br/>`
    charInfoString += `${character.getStats()} <br/>`
    charInfoDiv.innerHTML += charInfoString;
}

module.exports = displayCharInfo;