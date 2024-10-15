var mobov = document.getElementById('co');
document.body.style.overflow = "hidden";
mobov.style.display = 'block';
const view = window.innerWidth;
var selectedButton = null; // Variabile per memorizzare l'elemento selezionato 
pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "https://flaviocaputo.github.io/Teatro-Pirandello/Static/Panorama/untitled.png",
  "haov": 180,
  "autoLoad": true,
  "showControls": false,
  "hfov": 30, // Campo visivo ridotto per simulare uno zoom maggiore
  "minHfov": 78, // Impedisce di ridurre lo zoom al di sotto di questo valore
  "maxHfov": 78, // Permette di "allargare" lo zoom se necessario
  "disableKeyboardCtrl": true, // Disabilita il controllo da tastiera
  "disableMouseCtrl": true, // Disabilita il controllo da mouse
  "disableTouchCtrl": true, // Disabilita il controllo da touch
  "draggable": false, // Disabilita il drag (trascinamento) con mouse e touch
  "yaw": 0, // Imposta l'angolo orizzontale fisso
  "pitch": 0, // Imposta l'angolo verticale fisso
  "hotSpots": [
    {
      "pitch": -0.2,
      "yaw": -30.7,
      "cssClass": "custom-hotspot2",
      "text": "Stanza Laterale",
      "createTooltipFunc": Foyer,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": -6.2,
      "yaw": -30,
      "cssClass": "custom-hotspot3",
      "text": "Stanza Laterale",
      "createTooltipFunc": Foyerlat,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": -0.2,
      "yaw": -30.7,
      "cssClass": "custom-hotspot4",
      "text": "Stanza Laterale",
      "createTooltipFunc": Foyerdav,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": -0.5,
      "yaw": -19,
      "type": "info",
      "text": "Metastasio",
      "createTooltipFunc": Inizio,
    },
  ]
});
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
function Foyer(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  hotSpotDiv.textContent = "Foyer";
  hotSpotDiv.onclick = function() {
    if (isMobile()) {
      if (selectedButton == hotSpotDiv){
          window.location.href = "Visita.html";
      }
      selectedButton = hotSpotDiv;
    }else {
      window.location.href = "Visita.html";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    hotSpotDiv.classList.add('fade-in');
  }
  hotSpotDiv.onmouseleave = function() {
    hotSpotDiv.classList.remove('fade-in');
  }
}
function Foyerlat(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  hotSpotDiv.textContent = "Stanza Laterale";
  hotSpotDiv.onclick = function() {
    if (isMobile()) {
      if (selectedButton == hotSpotDiv){
          window.location.href = "Visita2.html";
      }
      selectedButton = hotSpotDiv;
    }else {
      window.location.href = "Visita2.html";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    hotSpotDiv.classList.add('fade-in');
  }
  hotSpotDiv.onmouseleave = function() {
    hotSpotDiv.classList.remove('fade-in');
  }
}
function Foyerdav(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  hotSpotDiv.textContent = "Foyer Davanti";
  hotSpotDiv.onclick = function() {
    if (isMobile()) {
      if (selectedButton == hotSpotDiv){
          window.location.href = "Visita3.html";
      }
      selectedButton = hotSpotDiv;
    }else {
      window.location.href = "Visita3.html";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    hotSpotDiv.classList.add('fade-in');
  }
  hotSpotDiv.onmouseleave = function() {
    hotSpotDiv.classList.remove('fade-in');
  }
}
function Inizio(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Inizia tour';
  nuovoOggetto.classList.add('info'); 
  hotSpotDiv.appendChild(nuovoOggetto);

  hotSpotDiv.onclick = function() {
    if (isMobile()) {
      if (selectedButton == hotSpotDiv){
      }
      selectedButton = hotSpotDiv;
    }else {
    }
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.style.display = "none";
  }
}
function rit() {
  window.location.href = "../../Home.html";
}