pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://i.ibb.co/NmXSSYZ/Stanza.jpg",
    "autoLoad": true,
    "showControls": false,
    "hotSpots": [
        {
          "pitch": -10,
          "yaw": 185,
          "cssClass": "custom-hotspot",
          "text": "Foyer",
          "createTooltipFunc": hotspot,
          "createTooltipArgs": "Custom Hotspot"
        }
      ]
  })
  function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot');
    hotSpotDiv.onclick = function() {
        window.location.href = "../page/Visita.html";
      };
  }