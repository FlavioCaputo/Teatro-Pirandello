pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://flaviocaputo.github.io/Teatro-Pirandello/Static/Panorama/Stanza.jpg",
    "autoLoad": true,
    "showControls": false,
    "hotSpots": [
        {
          "pitch": -18,
          "yaw": 185,
          "cssClass": "custom-hotspot2",
          "text": "Foyer",
          "createTooltipFunc": Freccia1,
          "createTooltipArgs": "Custom Hotspot"
        },
        {
          "pitch": 0,
          "yaw": 0,
          "type": "info",
          "createTooltipFunc": Sala,
        },
      ]
  })
const isMobile = navigator.userAgentData.mobile;
var selectedButton = null;
var prevbut = null;
var tir = 0;
document.onclick = function() {
  tir++;
  if (isMobile) {
    console.log('ciao');
    if (tir == 2) {
    console.log('r');
      Array.from(selectedButton.children).forEach((child, index) => {
        child.style.display = "none";
    });
    tir = 0;
    selectedButton = null;
   }
  }
};
  function rit() {
    window.location.href = "../page/Mappa.html";
  }
  function Freccia1(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot');
    hotSpotDiv.onclick = function() {
        window.location.href = "../page/Visita.html";
      };
  }
  function Sala(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'Sala laterale foyer';
    nuovoOggetto.classList.add('info'); 
    nuovoOggetto.style.width = '120px';
    hotSpotDiv.appendChild(nuovoOggetto);
  
    hotSpotDiv.text = "Ciao";
    hotSpotDiv.onclick = function() {
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          window.location.href = "../page/SalaLaterale.html";
        }
        selectedButton = hotSpotDiv;
        nuovoOggetto.style.display = "block"; 
      }else {
        window.location.href = "../page/SalaLaterale.html";
      }
    };
    hotSpotDiv.onmouseenter = function() {
      nuovoOggetto.style.display = "Block";
    }
    hotSpotDiv.onmouseleave = function() {
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
      }
    }
  }