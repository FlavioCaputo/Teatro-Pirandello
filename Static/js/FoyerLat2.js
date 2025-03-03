pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://flaviocaputo.github.io/Teatro-Pirandello/Static/Panorama/Fl1.jpeg",
    "autoLoad": true,
    "showControls": false,
    "hotSpots": [
        {
          "pitch": -18,
          "yaw": -155,
          "cssClass": "custom-hotspot1",
          "text": "Foyer",
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
      localStorage.setItem('inc', true);
      window.location.href = "../page/Visita4.html";
      };
      hotSpotDiv.onmouseenter = function() {
        hotSpotDiv.classList.remove("custom-hotspot1");
        hotSpotDiv.classList.add('custom-hotspot1h');   
      }
      hotSpotDiv.onmouseleave = function() {
        hotSpotDiv.classList.remove("custom-hotspot1h");
        hotSpotDiv.classList.add('custom-hotspot1');   
      }
  }