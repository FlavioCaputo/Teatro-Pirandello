dir = localStorage.getItem('inc');
console.log(dir);
if (dir === "false") {
  inc = -180;
}else {
  inc = 0;
}
pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://flaviocaputo.github.io/Teatro-Pirandello/Static/Panorama/Fl2.jpeg",
    "autoLoad": true,
    "showControls": false,
    "yaw": inc, 
    "hotSpots": [
        {
          "pitch": -35,
          "yaw": -15,
          "cssClass": "custom-hotspot2",
          "text": "Foyer",
          "createTooltipFunc": Freccia1,
          "createTooltipArgs": "Custom Hotspot"
        },
        {
          "pitch": -6,
          "yaw": 200,
          "cssClass": "custom-hotspot1",
          "text": "Foyer",
          "createTooltipFunc": Freccia2,
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
      window.location.href = "../page/Visita2.html";
      };
    hotSpotDiv.onmouseenter = function() {
      hotSpotDiv.classList.remove("custom-hotspot2");
      hotSpotDiv.classList.add('custom-hotspot2h');   
    }
    hotSpotDiv.onmouseleave = function() {
      hotSpotDiv.classList.remove("custom-hotspot2h");
      hotSpotDiv.classList.add('custom-hotspot2');   
    }
  }
  function Freccia2(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot');
    hotSpotDiv.onclick = function() {
      localStorage.setItem('inc', false);
      window.location.href = "../page/Visita5.html";
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