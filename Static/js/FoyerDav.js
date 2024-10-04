pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://flaviocaputo.github.io/Teatro-Pirandello/Static/Panorama/foyer2.jpeg",
    "autoLoad": true,
    "showControls": false,
    "hotSpots": [
      {
        "pitch": -20,
        "yaw": -180,
        "cssClass": "custom-hotspot2",
        "text": "Stanza Laterale",
        "createTooltipFunc": Freccia1,
        "createTooltipArgs": "Custom Hotspot"
      },
      {
        "pitch": -2,
        "yaw": -48,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Lapide81,
      },
      {
        "pitch": -2,
        "yaw": 44,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Lapide69,
      },
      {
        "pitch": 0,
        "yaw": -224.5,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": PlanT,
      },
      {
        "pitch": -1,
        "yaw": -142,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": PlanF,
      },
      ]
  })
  function Freccia1(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot');
    hotSpotDiv.onclick = function() {
        window.location.href = "../page/Visita.html";
      };
  }
  function Lapide81(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('Lap81'); 
    nuovoOggetto.textContent = 'Lapide Commemorativa 1881';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.fontSize = '16px';
    nuovoOggetto.style.width = '120px';
    nuovoOggetto.style.height = '70px';
    nuovoOggetto.style.top = '-10px';
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
    };
    hotSpotDiv.onmouseenter = function() {
      nuovoOggetto.style.display = "Block";
    }
    hotSpotDiv.onmouseleave = function() {
      nuovoOggetto.style.display = "none";
      Oggetto2.style.display = "none";
    }
  }
  function Lapide69(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('Lap81'); 
    nuovoOggetto.textContent = 'Lapide Commemorativa 1869';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.fontSize = '16px';
    nuovoOggetto.style.width = '120px';
    nuovoOggetto.style.height = '70px';
    nuovoOggetto.style.top = '-10px';
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
    };
    hotSpotDiv.onmouseenter = function() {
      nuovoOggetto.style.display = "Block";
    }
    hotSpotDiv.onmouseleave = function() {
      nuovoOggetto.style.display = "none";
      Oggetto2.style.display = "none";
    }
  }
  function PlanF(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('ProgettoF'); 
    nuovoOggetto.textContent = 'Progetto del Teatro vista Frontale';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.width = '160px';
    nuovoOggetto.style.height = '85px';
    nuovoOggetto.style.top = '-30px';
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
    };
    hotSpotDiv.onmouseenter = function() {
      nuovoOggetto.style.display = "Block";
    }
    hotSpotDiv.onmouseleave = function() {
      nuovoOggetto.style.display = "none";
      Oggetto2.style.display = "none";
    }
  }
  function PlanT(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('ProgettoT'); 
    nuovoOggetto.textContent = 'Planimetria del Teatro';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.width = '160px';
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
    };
    hotSpotDiv.onmouseenter = function() {
      nuovoOggetto.style.display = "Block";
    }
    hotSpotDiv.onmouseleave = function() {
      nuovoOggetto.style.display = "none";
      Oggetto2.style.display = "none";
    }
  }