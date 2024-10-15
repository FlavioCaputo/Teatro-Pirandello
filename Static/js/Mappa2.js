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
      "createTooltipFunc": rit,
      "createTooltipArgs": "Custom Hotspot"
    },
  ]
});
function rit(hotSpotDiv, args) {
  hotSpotDiv.onclick = function() {
    window.location.href = "../../Home.html";
  }
}