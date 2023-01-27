const useSpell = document.getElementById('use-spell')
const changeSpell = document.getElementById('change-spell')

function waitForSpell() {
    return new Promise((resolve) => {
        useSpell.addEventListener("click", () => {
            resolve('use')
        })
        changeSpell.addEventListener("click", () => {
            resolve('change')
        })
    })
}

module.exports = waitForSpell;