var overlay = document.getElementById('videobg');
var t1 = document.getElementById('foyer')
var t2 = document.getElementById('stanza1')
document.body.style.overflow = "hidden";
t1.classList.add('fade-out')
t1.style.display = 'none';
t2.classList.add('fade-out')
t2.style.display = 'none';
setTimeout(function() {
    document.body.style.overflow = "auto";
    overlay.style.display = 'none';
}, 6000);
function visita() {
    window.location.href = "Static/page/Visita.html";
}
function visita2() {
    window.location.href = "Static/page/Visita2.html";
}
function Posin() {
    t1.style.display = 'block';
    t1.classList.remove('fade-out')
}
function Posout() {
    t1.classList.add('fade-out')
}

function Posin2() {
    t2.style.display = 'block';
    t2.classList.remove('fade-out')
}
function Posout2() {
    t2.classList.add('fade-out')
}