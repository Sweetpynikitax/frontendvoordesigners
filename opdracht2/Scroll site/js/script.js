/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('Laat het plantje groeien');

var backgroundEl = document.querySelector('#Background');
var potEl = document.querySelector('#Pot');
var atribuutEl = document.querySelector('#Atribuut');
var addTekstEl = document.querySelector('#addTekst');

function veranderPotEl(event) {
    console.log(event);
    potEl.src = 'Images/Pot Begin.png';
    atribuutEl.src = 'Images/Gieter.png';

}

function veranderPotEle(event) {
    console.log(event);
    potEl.src = 'Images/Pot halverwege.png';
    atribuutEl.src = 'Images/Pocon.png';

}

function veranderPotElem(event) {
    console.log(event);
    potEl.src = 'Images/Pot eind.png';

}

atribuutEl.addEventListener('click', veranderPotEl);
//atribuutEl.addEventListener('click', veranderPotEle);
//atribuutEl.addEventListener('click', veranderPotElem);
