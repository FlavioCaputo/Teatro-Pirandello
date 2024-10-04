pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://flaviocaputo.github.io/Teatro-Pirandello/Static/Panorama/Stanza.jpg",
    "autoLoad": true,
    "showControls": false,
    "hotSpots": [
        {
          "pitch": -10,
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
      window.location.href = "../page/SalaLaterale.html";
    };
    hotSpotDiv.onmouseenter = function() {
      nuovoOggetto.style.display = "Block";
    }
    hotSpotDiv.onmouseleave = function() {
      nuovoOggetto.style.display = "none";
    }
  }