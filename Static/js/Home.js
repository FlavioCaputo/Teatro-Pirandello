var lastScrollTop = 0; // Memorizza la posizione dello scroll precedente
var header = document.getElementById('header');
var minHeight = 350; // altezza minima in pixel
var maxHeight = 700; // altezza massima in pixel
var triggerPixelEnd = 350;
var button = document.getElementById('start');
var button2 = document.getElementById('start2');
var button3 = document.getElementById('start3');
var minmob = 220;
var maxmob = 500;
const isMobile = navigator.userAgentData.mobile;
function hide() {
    overlayimg.style.display = 'none';
    img.classList.remove('vedere')
    img.classList.remove('vedere2')
    img.style.zIndex = 1;
    document.body.style.overflow = 'auto';
    window.scrollTo(0, alt);
    if (window.scrollY > triggerPixelEnd) {
        if (isMobile) {
            header.style.height = minmob + "px";
        }else {
            header.style.height = minHeight + "px";
        }
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
        if (isMobile) {
            header.style.height = minmob + "px";
        }else {
            header.style.height = minHeight + "px";
        }
    } else if (scrollPosition == 0) {
        if (isMobile) {
            header.style.height = maxmob + "px";
        }else {
            header.style.height = maxHeight + "px";
        }
    }
});
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var headerHeight;
    if (isMobile && this.window.innerWidth < this.window.innerHeight) {
        var scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';
        var of = 1;

    if (scrollPosition < triggerPixelEnd) {
        // Esegui le azioni in base alla direzione dello scroll
        if (scrollDirection === 'down') {
            console.log("Scorrimento verso il basso");
            let currentBottom = parseFloat(button2.style.bottom) || 0;
            headerHeight = header.offsetHeight - of*(scrollPosition - lastScrollTop);
            header.style.height = Math.max(headerHeight, minmob) + 'px';
        } else {
            console.log("Scorrimento verso l'alto");
            headerHeight = header.offsetHeight + of*(lastScrollTop - scrollPosition);
            header.style.height = Math.min(headerHeight, maxmob) + 'px';
        }
        if (scrollPosition === 0) {
            header.style.height = maxmob + "px";
        }
    } else {
        header.style.height = minmob + "px";
    };

    // Aggiorna la posizione dello scroll precedente
    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition;
    }else {
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
    }
});