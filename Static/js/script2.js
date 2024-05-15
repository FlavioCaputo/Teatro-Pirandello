pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "https://i.ibb.co/PrwmLHs/foyer.jpg",
  "autoLoad": true,
  "showControls": false,
  "haov": 180,
  "hotSpots": [
    {
        "pitch": 21,
        "yaw": -46,
        "type": "info",
        "text": "Vincenzo Bellini",
        "createTooltipFunc": hotspotClick,
    },
    {
      "pitch": -7,
      "yaw": 57,
      "cssClass": "custom-hotspot2",
      "text": "Stanza Laterale",
      "createTooltipFunc": hotspot2,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": 19,
      "yaw": -72.5,
      "type": "info",
      "text": "Vincenzo Bellini",
      "createTooltipFunc": hotspotClick2,
   },
]
})
function hotspotClick(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Vittorio Alfieri';
  nuovoOggetto.classList.add('info'); 
  hotSpotDiv.appendChild(nuovoOggetto);

  hotSpotDiv.text = "Ciao";
  hotSpotDiv.onclick = function() {
    window.location.href = "../page/Vittorio.html";
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.style.display = "none";
  }
}

function hotspot2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot');
  hotSpotDiv.onclick = function() {
      window.location.href = "../page/Visita2.html";
    };
}

function hotspotClick2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Carlo Goldoni';
  nuovoOggetto.classList.add('info'); 
  hotSpotDiv.appendChild(nuovoOggetto);

  hotSpotDiv.text = "Ciao";
  hotSpotDiv.onclick = function() {
    window.location.href = "../page/Carlo.html";
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.style.display = "none";
  }
}