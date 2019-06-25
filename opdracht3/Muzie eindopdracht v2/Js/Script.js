/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//gebruik gemaakt van https://www.youtube.com/watch?v=C22hQKE_32c&t=344s

// Drag and Drop code

console.log('test');

var fillElement = document.querySelectorAll('.fill');
var emptyElement = document.querySelectorAll('.empty');



function dragstart() {
    console.log('start');
    setTimeout(() => this.className = 'invisible', 0);

}

function dragend() {
    console.log('end');
    this.className = 'fill';
}

for (var fillElement of fillElement) {

    fillElement.addEventListener('dragstart', dragstart);
    fillElement.addEventListener('dragend', dragend);


}

for (var empty of emptyElement) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', ondragleave);
    empty.addEventListener('drop', dragDrop);
}

function dragOver(e) {
    console.log('over');
    e.preventDefault();
}

function dragEnter() {
    console.log('enter');

}

function ondragLeave() {
    console.log('leave');
    this.className = 'empty';
}

function dragDrop() {
    console.log('drop');
    this.className = 'empty';
    this.append(fillElement)
}

// Code voor Json

var playRight = document.querySelector('#playRight');
var play = document.querySelector('.play');
var playLeft = document.querySelector('#playLeft');
var background = document.querySelector('.Drake');
var songName = document.querySelector('.songname');
var songArtist = document.querySelector('.songartist');


function bladerHeen(event) {
    background.src = '/Images/Ciara.png';
    songName.textContent = 'Freak me';
    songArtist.textContent = 'Ciara, Wizkid';
}

function bladerWeer(event) {
    background.src = '/Images/Drake.png';
    songName.textContent = 'Going Bad';
    songArtist.textContent = 'Meek Mill, Drake';
}

playRight.addEventListener('click', bladerHeen);
playLeft.addEventListener('click', bladerWeer);

var requestURL = '/Json/Muzie.json';
var request = new XMLHttpRequest();


request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var Muzie = request.response;
    populatesection(Muzie);
    showMuzie(Muzie);
}

function populateHeader(jsonObj) {
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['NameSong'];
    section.appendChild(myH1);

    var myPara = document.querySelector('.songartist');
    myH1.textContent = jsonObj['NameArtist'];
    header.appendChild(myPara);

    var myBackground = document.querySelector('.Drake');
    myBackground.textContent = jsonObj['Image'];
    header.appendChild(myBackground);
}

function showMuzie(jsonObj) {
    var song = jsonObj['NameSong'];

    for (var i = 0; i < Muzie.length; i++) {

        var myH1 = document.createElement('h1');
        var myPara = document.querySelector('.songartist');
        var myBackground = document.querySelector('.Drake');

        myArticle.appendChild(myH1);
        myArticle.appendChild(myPara);
        myArticle.appendChild(myBackground);

        section.appendChild(Muzie);
    }
}

request.responseType = 'json';

// Hulp en code van: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
