var lastScrollTop = 0; // Memorizza la posizione dello scroll precedente
var header = document.getElementById('header');
var minHeight = 100; // altezza minima in pixel
var maxHeight = 250; // altezza massima in pixel
var mindim = 80; // altezza minima in pixel
var maxdim = 180; // altezza massima in pixel
var triggerPixelEnd = 250;
var overlayimg = document.getElementById('Overlayimg')
var img = "";
var alt = "";

function rit4() {
    dit = localStorage.getItem('pa');
    window.location.href = dit;
}
function ingrandisci(element) {
    element.classList.add('vedere')
    overlayimg.style.display = 'block';
    img = element
    element.style.zIndex = 8;
    if (element.id === "prima") {
        alt = window.scrollY;
        window.scrollTo(0, 50);
        document.body.style.overflow = 'hidden';
    } else {
        alt = window.scrollY;
        punto = element.offsetTop - element.querySelector('img').offsetHeight*7/8;
        window.scrollTo(0, punto);
        document.body.style.overflow = 'hidden';
    }
}
function hide() {
    overlayimg.style.display = 'none';
    img.classList.remove('vedere')
    img.classList.remove('vedere2')
    img.style.zIndex = 1;
    document.body.style.overflow = 'auto';
    window.scrollTo(0, alt);
    if (window.scrollY > triggerPixelEnd) {
        header.style.height = minHeight + "px";
        testo.style.fontSize = mindim + "px";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var scrollPosition = window.scrollY;
    var testo = document.getElementById("title");
    if (scrollPosition > triggerPixelEnd) {
        header.style.height = minHeight + "px";
        testo.style.fontSize = mindim + "px";
    }
});
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var headerHeight;
    var testo = document.getElementById("title");
    var dimensioneAttuale = window.getComputedStyle(testo).getPropertyValue("font-size");

    // Rileva la direzione dello scroll
    var scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';

    if (scrollPosition < triggerPixelEnd) {
        // Esegui le azioni in base alla direzione dello scroll
        if (scrollDirection === 'down') {
            console.log("Scorrimento verso il basso");
            headerHeight = header.offsetHeight - (scrollPosition - lastScrollTop);
            header.style.height = Math.max(headerHeight, minHeight) + 'px';
            var nuovaDimensione = parseFloat(dimensioneAttuale) - 10; // Diminuisci di 2 pixel
            console.log(dimensioneAttuale+"px")
            testo.style.fontSize = Math.max(nuovaDimensione, mindim) + "px";
        } else {
            console.log("Scorrimento verso l'alto");
            headerHeight = header.offsetHeight + (lastScrollTop - scrollPosition);
            header.style.height = Math.min(headerHeight, maxHeight) + 'px';
            var nuovaDimensione = parseFloat(dimensioneAttuale) + 5.5; // Diminuisci di 2 pixel
            console.log(dimensioneAttuale+"px")
            testo.style.fontSize = Math.min(nuovaDimensione, maxdim) + "px";
        }
        if (scrollPosition === 0) {
            testo.style.fontSize = maxdim + "px";
        }
    } else {
        console.log("Luca, Martina non ti vuole")
        testo.style.fontSize = mindim + "px";
    };

    // Aggiorna la posizione dello scroll precedente
    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
});