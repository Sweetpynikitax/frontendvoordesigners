/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('test');

var fillElement = document.querySelector('#fill');
var emptyElement = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', ondragstart);
fill.addEventListener('dragend', ondragend);

function dragstart() {
    console.log('start');

}

function dragend() {
    console.log('end');
}
