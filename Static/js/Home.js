var lastScrollTop = 0; // Memorizza la posizione dello scroll precedente
var header = document.getElementById('header');
var minHeight = 350; // altezza minima in pixel
var maxHeight = 700; // altezza massima in pixel
var triggerPixelEnd = 350;
var button = document.getElementById('start');
var button2 = document.getElementById('start2');
var button3 = document.getElementById('start3');


function hide() {
    overlayimg.style.display = 'none';
    img.classList.remove('vedere')
    img.classList.remove('vedere2')
    img.style.zIndex = 1;
    document.body.style.overflow = 'auto';
    window.scrollTo(0, alt);
    if (window.scrollY > triggerPixelEnd) {
        header.style.height = minHeight + "px";
    }
}
button.addEventListener('click', function() {
    window.location.href = "Static/page/Mappa.html";
});
button2.addEventListener('click', function() {
    window.location.href = "https://maps.app.goo.gl/qgnD3WYXsGERXZNRA";
});
button3.addEventListener('click', function() {
    window.location.href = "https://fondazioneteatropirandello.it/";
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > triggerPixelEnd) {
        header.style.height = minHeight + "px";
    } else if (scrollPosition == 0) {
        header.style.height = maxHeight + "px";
    }
});
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var headerHeight;


    // Rileva la direzione dello scroll
    var scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';

    if (scrollPosition < triggerPixelEnd) {
        // Esegui le azioni in base alla direzione dello scroll
        if (scrollDirection === 'down') {
            console.log("Scorrimento verso il basso");
            let currentBottom = parseFloat(button2.style.bottom) || 0;
            headerHeight = header.offsetHeight - (scrollPosition - lastScrollTop);
            header.style.height = Math.max(headerHeight, minHeight) + 'px';
        } else {
            console.log("Scorrimento verso l'alto");
            headerHeight = header.offsetHeight + (lastScrollTop - scrollPosition);
            header.style.height = Math.min(headerHeight, maxHeight) + 'px';
        }
        if (scrollPosition === 0) {
            header.style.height = maxHeight + "px";
        }
    } else {
        header.style.height = minHeight + "px";
    };

    // Aggiorna la posizione dello scroll precedente
    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
});
