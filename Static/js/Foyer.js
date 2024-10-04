pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "https://flaviocaputo.github.io/Teatro-Pirandello/Static/Panorama/foyer.jpg",
  "autoLoad": true,
  "showControls": false,
  "haov": 180,
  "hotSpots": [
    {
        "pitch": 21,
        "yaw": -46,
        "type": "info",
        "text": "Vincenzo Bellini",
        "createTooltipFunc": Alfieri,
    },
    {
      "pitch": -7,
      "yaw": 57,
      "cssClass": "custom-hotspot2",
      "text": "Stanza Laterale",
      "createTooltipFunc": Freccia1,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": -7,
      "yaw": -5,
      "cssClass": "custom-hotspot2",
      "text": "Foyer",
      "createTooltipFunc": Freccia2,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": 19,
      "yaw": -72.5,
      "type": "info",
      "text": "Goldoni",
      "createTooltipFunc": Goldoni,
   },
   {
    "pitch": 24,
    "yaw": 57,
    "type": "info",
    "text": "Metastasio",
    "createTooltipFunc": Metastasio,
  },
  {
  "pitch": 23.5,
  "yaw": 32,
  "type": "info",
  "text": "Monti",
  "createTooltipFunc": Monti,
  },
  {
    "pitch": 4,
    "yaw": 42,
    "type": "info",
    "text": "abito",
    "createTooltipFunc": abito,
  },
  {
      "pitch": 0,
      "yaw": -55,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": abito,
  },
  {
      "pitch": 4.3,
      "yaw": 46.5,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": Lapide06,
  },
  {
        "pitch": 0,
        "yaw": -60,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Lapide95,
  },
  {
          "pitch": 5,
          "yaw": -83.4,
          "type": "info",
          "text": "abito",
          "createTooltipFunc": Dedica,
  },
  {
    "pitch": 3.7,
    "yaw": 68.7,
    "type": "info",
    "text": "abito",
    "createTooltipFunc": PlanL,
  },
]
})
function Alfieri(hotSpotDiv, args) {
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

function Freccia1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot');
  hotSpotDiv.onclick = function() {
      window.location.href = "../page/Visita2.html";
    };
}
function Freccia2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot');
  hotSpotDiv.onclick = function() {
      window.location.href = "../page/Visita3.html";
    };
}

function Goldoni(hotSpotDiv, args) {
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

function Metastasio(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Metastasio';
  nuovoOggetto.classList.add('info'); 
  hotSpotDiv.appendChild(nuovoOggetto);

  hotSpotDiv.text = "Ciao";
  hotSpotDiv.onclick = function() {
    window.location.href = "../page/Metastasio.html";
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.style.display = "none";
  }
}
function Monti(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Vittorio Monti';
  nuovoOggetto.classList.add('info'); 
  hotSpotDiv.appendChild(nuovoOggetto);

  hotSpotDiv.text = "Ciao";
  hotSpotDiv.onclick = function() {
    window.location.href = "../page/VittorioM.html";
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.style.display = "none";
  }
}
function abito(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Abito di Inghilleri';
  nuovoOggetto.classList.add('info'); 
  hotSpotDiv.appendChild(nuovoOggetto);

  hotSpotDiv.text = "Ciao";
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.style.display = "none";
  }
}
function Lapide06(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('Lap06'); 
  nuovoOggetto.textContent = 'Lapide Commemorativa 2006';
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
function Lapide95(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('Lap95'); 
  nuovoOggetto.textContent = 'Lapide Commemorativa 1995';
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
function Dedica(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('Dedica'); 
  nuovoOggetto.textContent = 'Dedica del Foyer';
  nuovoOggetto.classList.add('info');  
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
function PlanL(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('ProgettoL'); 
  nuovoOggetto.textContent = 'Progetto del Teatro vista laterale';
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