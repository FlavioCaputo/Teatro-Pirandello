var overlay = document.getElementById('videobg');
var t1 = document.getElementById('foyer')
document.body.style.overflow = "hidden";
t1.classList.add('fade-out')
t1.style.display = 'none';
setTimeout(function() {
    document.body.style.overflow = "auto";
    overlay.style.display = 'none';
}, 6000);
function visita() {
    window.location.href = "static/page/Visita.html";
}
function Posin() {
    t1.style.display = 'block';
    t1.classList.remove('fade-out')
}
function Posout() {
    t1.classList.add('fade-out')
}