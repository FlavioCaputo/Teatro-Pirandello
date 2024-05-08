pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "https://i.ibb.co/PrwmLHs/foyer.jpg",
  "autoLoad": true,
  "showControls": false,
  "haov": 180,
  "hotSpots": [
    {
        "pitch": 22,
        "yaw": -45,
        "type": "info",
        "text": "Vincenzo Bellini",
        "createTooltipFunc": hotspotClick,
    },
]
})
function hotspotClick(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Vincenzo Bellini';
  nuovoOggetto.classList.add('info'); 
  hotSpotDiv.appendChild(nuovoOggetto);

  hotSpotDiv.text = "Ciao";
  hotSpotDiv.onclick = function() {
    window.location.href = "../page/Vincenzo.html";
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.style.display = "none";
  }
}