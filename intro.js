const intText1 = document.getElementById('inttext-1')
const intText2 = document.getElementById('inttext-2')
const intText3 = document.getElementById('inttext-3')
const intText35 = document.getElementById('inttext-35')
const intText4 = document.getElementById('inttext-4')
const intText5 = document.getElementById('inttext-5')
const name = document.getElementById('name-input')
const intNextBut = document.getElementById('intro-next-button')
const submit = document.getElementById('name-submit')

function intro () {
    const texts = [intText1, intText2, intText3, intText35, intText4, intText5] //add text lines to array
    let current=1;
    intNextBut.addEventListener("click",() => {        
        texts.forEach(txt => txt.style.display = 'none'); //cycle through and show as button is pressed ending on name submission
        texts[current].style.display = "block";
        if ((current + 1) % texts.length == 0) {
            name.style.display = "inline";
            submit.style.display = "inline";
            intNextBut.style.display = "none";

        } else if ((current + 1) % texts.length != 0) {
            current = (current + 1) % texts.length;
        }
    })
}

module.exports = intro;