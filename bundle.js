(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const intro = require('./intro.js')


function gameLoop () {
    intro();
}

gameLoop();
},{"./intro.js":2}],2:[function(require,module,exports){
const intText1 = document.getElementById('inttext-1')
const intText2 = document.getElementById('inttext-2')
const intText3 = document.getElementById('inttext-3')
const intText4 = document.getElementById('inttext-4')
const intText5 = document.getElementById('inttext-5')
const name = document.getElementById('name-input')
const intNextBut = document.getElementById('intro-next-button')


function intro () {
    const texts = [intText1, intText2, intText3, intText4, intText5]
    let current=0;
    intNextBut.addEventListener("click",() => {        
        texts.forEach(txt => txt.style.display = 'none');
        texts[current].style.display = "block";
        if ((current + 1) % texts.length == 0) {
            name.style.display = "inline";
        } else if ((current + 1) % texts.length != 0) {
            current = (current + 1) % texts.length;
        }
    })
}




module.exports = intro;

},{}]},{},[1]);
