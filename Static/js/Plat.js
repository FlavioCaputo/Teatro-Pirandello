pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "https://raw.githubusercontent.com/FlavioCaputo/Teatro-Pirandello/refs/heads/main/Static/Panorama/teatro.jpg",
  "autoLoad": true,
  "showControls": false,
  "yaw": -90, 
  "hotSpots": [
    {
      "pitch": -8,
      "yaw": 90,
      "cssClass": "custom-hotspot2",
      "text": "Stanza Laterale",
      "createTooltipFunc": Freccia2,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": -8,
      "yaw": -90,
      "cssClass": "custom-hotspot2",
      "text": "Stanza Laterale",
      "createTooltipFunc": Freccia1,
      "createTooltipArgs": "Custom Hotspot"
    },
]
})

function rit() {
  window.location.href = "../page/Mappa.html";
}

function Freccia1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot');
  hotSpotDiv.onclick = function() {
      window.location.href = "../page/Visita3.html";
    };
}
function Freccia2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot');
  hotSpotDiv.onclick = function() {
      window.location.href = "../page/Plat2.html";
    };
}
