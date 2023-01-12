function displayMobInfo (mob) {
    const mobInfoDiv = document.getElementById('mob-info')
    let mobInfoString = "";
    mobInfoString += `${config.activeMob.getStats()} <br/>`
    mobInfoDiv.innerHTML += mobInfoString;
}

module.exports = displayMobInfo;