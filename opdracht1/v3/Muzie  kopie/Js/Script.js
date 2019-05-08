/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//gebruik gemaakt van https://www.youtube.com/watch?v=C22hQKE_32c&t=344s

console.log('test');

var fillElement = document.querySelector('.fill');
var emptyElement = document.querySelectorAll('.empty');



function dragstart() {
    console.log('start');
    setTimeout(() => this.className = 'invisible', 0);

}

function dragend() {
    console.log('end');
    this.className = 'fill';
}

fillElement.addEventListener('dragstart', dragstart);
fillElement.addEventListener('dragend', dragend);


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
