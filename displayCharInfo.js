function displayCharInfo (character) {
    const charInfoDiv = document.getElementById('char-info')
    let charInfoString = `<h3>Player:</h3>`
    charInfoString += `Name: ${character.name} <br/>`
    charInfoString += `Level: ${character.level} ${character.className} <br/>`
    charInfoString += `${character.getStats()} <br/>`
    charInfoDiv.innerHTML = charInfoString;
}

module.exports = displayCharInfo;