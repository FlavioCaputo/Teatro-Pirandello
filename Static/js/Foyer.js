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
function rit() {
  window.location.href = "../page/Mappa.html";
}
function Alfieri(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo

  // Crea un nuovo div per il contenuto
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.classList.add('scr'); 
  
  // Crea un nuovo bottone
  var bottone = document.createElement('button');
  bottone.textContent = 'Scopri di più'; // Testo del bottone
  bottone.classList.add('button'); // Aggiungi una classe al bottone
  var testoAlfieri = document.createElement('p');
  testoAlfieri.textContent = 'Vittorio Alfieri, nato ad Asti il 16 gennaio 1749, fu un poeta tragico italiano noto per le sue opere che affrontavano il tema della tirannia e il risveglio dello spirito nazionale italiano, guadagnandosi il titolo di precursore del Risorgimento. Dopo aver studiato all\'Accademia Militare di Torino, si dedicò alla letteratura, influenzato da autori come Voltaire e Rousseau, e scrisse celebri tragedie tra cui "Antonio e Cleopatra" e "Antigone". Morì a Firenze l\'8 ottobre 1803.';
  nuovoOggetto.appendChild(testoAlfieri);
  nuovoOggetto.appendChild(bottone);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.text = "Ciao";
  hotSpotDiv.onclick = function() {
    window.location.href = "../page/Vittorio.html"; // Reindirizza alla pagina desiderata
};
  hotSpotDiv.onmouseenter = function() {
      nuovoOggetto.style.display = "block"; // Mostra il div quando il mouse entra
  }
  hotSpotDiv.onmouseleave = function() {
      nuovoOggetto.style.display = "none"; // Nascondi il div quando il mouse esce
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
  nuovoOggetto.textContent = 'Carlo Goldoni, è considerato uno dei padri della commedia moderna (Venezia 1707 - Parigi 1793). Sin da bambino mostrò una viva inclinazione per il teatro. All’età di nove anni compose una commedia. La sua formazione scolastica e musicale avvenne tra Perugia, Rimini e Pavia dove studiò legge. Nel 1731 si laureò presso l’Università degli Studi di Padova. In questo periodo scrisse un almanacco satirico e un melodramma (Amalasunta, 1732), che poi bruciò. Trasferitosi a Venezia, dovette abbandonare la città lagunare a causa dei debiti che aveva contratto. Si trasferì a Pisa, dove fu nominato pastore d\'Arcadia col nome di Polisseno Fegeio. Dal 1745 al 1748 la professione di avvocato. Dopo qualche anno tornò a Venezia, dove si dedicò unicamente al teatro. Negli ultimi anni della sua vita soffrì di varî acciacchi, era quasi cieco, e la pensione gli bastava appena. Ammalatosi gravemente, morì nella miseria. Scrisse più di 200 tra commedie, tragedie, tragicommedie, intermezzi, LIBRETTI, melodrammi (musicati da Galuppi, Piccinni, Paisiello, Mozart, Haydn, Sacchini, ecc.), ma la sua gloria è legata solo alle commedie. Importanti però sono anche i suoi Mémoires, che cominciò a scrivere nel 1784 e compì e pubblicò nel 1787.';
  
  nuovoOggetto.classList.add('scr'); 
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