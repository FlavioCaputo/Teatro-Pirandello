
var mobov = document.getElementById('co');
var b1 = document.getElementById('bot');
var b2 = document.getElementById('bot2');
var b3 = document.getElementById('bot3');
document.body.style.overflow = "hidden";
b1.classList.add('fade-out');
b2.classList.add('fade-out');
b3.classList.add('fade-out');
mobov.style.display = 'block';
const view = window.innerWidth;
var selectedButton = null; // Variabile per memorizzare l'elemento selezionato 
if (view > 738) {
    handleResize()
}
function isMobile() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function handleResize() {
    console.log('mag');
    mobov.style.display = 'none';  // Nascondi l'elemento 'mobov'

}

window.addEventListener('orientationchange', handleResize);
function rit() {
    window.location.href = "../../Home.html";
}
function visita() {
    if (isMobile()) {
        if (selectedButton == b1){
            window.location.href = "Visita.html";
        }
        selectedButton = b1;
    }else {
        window.location.href = "Visita.html";
    }
}
function visita2() {
    if (isMobile()) {
        if (selectedButton ==b2){
            window.location.href = "Visita2.html";
        }
        selectedButton = b2;
    }else {
        window.location.href = "Visita2.html";
    }
}
function visita3() {
    if (isMobile()) {
        if (selectedButton == b3){
            window.location.href = "Visita3.html";
            selectedButton = null;
        }
        selectedButton = b3;
    }else {
        window.location.href = "Visita3.html";
    }
}
function Posin() {
    b1.classList.remove('fade-out');
}
function Posout() {
    b1.classList.add('fade-out');
}

function Posin2() {
    b2.classList.remove('fade-out');
}
function Posout2() {
    b2.classList.add('fade-out');
}
function Posin3() {
    b3.classList.remove('fade-out');
}
function Posout3() {
    b3.classList.add('fade-out');
}
