dir = localStorage.getItem('inc');
console.log(dir);
if (dir === "false") {
  inc = 90;
}else {
  inc = -90;
}
const viewer = pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "https://raw.githubusercontent.com/FlavioCaputo/Teatro-Pirandello/refs/heads/main/Static/Panorama/Pla2.jpeg",
  "autoLoad": true,
  "showControls": false,
  "yaw": inc, 
  "hotSpots": [
    {
      "pitch": 2,
      "yaw": -85,
      "cssClass": "custom-hotspot1",
      "text": "Stanza Laterale",
      "createTooltipFunc": Freccia2,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": -8,
      "yaw": 96,
      "cssClass": "custom-hotspot1",
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
      localStorage.setItem('inc', false);
      window.location.href = "../page/Plat.html";
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
function Freccia2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot');
  hotSpotDiv.onclick = function() {
      localStorage.setItem('inc', true);
      window.location.href = "../page/Plat2.html";
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
