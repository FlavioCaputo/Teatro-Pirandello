var overlay = document.getElementById('videobg');
var mobov = document.getElementById('co');
var t1 = document.getElementById('foyer')
var t2 = document.getElementById('stanza1')
var b1 = document.getElementById('bot')
var b2 = document.getElementById('bot2')
document.body.style.overflow = "hidden";
t1.classList.add('fade-out')
t1.style.display = 'none';
t2.classList.add('fade-out')
t2.style.display = 'none';
b1.classList.add('fade-out')
b2.classList.add('fade-out')
overlay.style.display = 'none';
mobov.style.display = 'block';
const view = window.innerWidth;
if (view > 738) {
    handleResize()
}
function handleResize() {
    console.log('mag');
        mobov.style.display = 'none';  // Nascondi l'elemento 'mobov'
        overlay.style.display = 'block';  // Mostra l'elemento 'overlay'
        setTimeout(function() {
            document.body.style.overflow = "auto";  // Permetti lo scrolling
            overlay.style.display = 'none'; 
        }, 6000); 
}

window.addEventListener('orientationchange', handleResize);
function visita() {
    window.location.href = "Visita.html";
}
function visita2() {
    window.location.href = "Visita2.html";
}
function Posin() {
    t1.style.display = 'block';
    t1.classList.remove('fade-out')
    b1.classList.remove('fade-out')
}
function Posout() {
    t1.classList.add('fade-out')
    b1.classList.add('fade-out')
}

function Posin2() {
    t2.style.display = 'block';
    t2.classList.remove('fade-out')
    b2.classList.remove('fade-out')
}
function Posout2() {
    t2.classList.add('fade-out')
    b2.classList.add('fade-out')
}