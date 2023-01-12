function displayMobInfo (mob) {
    const mobInfoDiv = document.getElementById('mob-info')
    let mobInfoString = `<h3>Monster:</h3>`;
    mobInfoString += `${mob.getMobStats()} <br/>`
    mobInfoDiv.innerHTML = mobInfoString;
}

module.exports = displayMobInfo;