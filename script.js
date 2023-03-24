let text = document.getElementById('text');
let tree_left = document.getElementById('tree-left');
let tree_right = document.getElementById('tree-right');
let gate_left = document.getElementById('gate-left');
let gate_right = document.getElementById('gate-right');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    tree_left.style.left = value * -1.5 + 'px';
    tree_right.style.left = value * 1.5 + 'px';
    gate_left.style.left = value * 0.5 +'px';
    gate_right.style.left = value * -0.5 +'px';
});