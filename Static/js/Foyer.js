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
    "pitch": 0,
    "yaw": -72.5,
    "type": "info",
    "text": "Goldoni",
    "createTooltipFunc": Bigl,
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
    "createTooltipFunc": abito1,
  },
  {
      "pitch": 0,
      "yaw": -55,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": abito2,
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
const isMobile = navigator.userAgentData.mobile;
var selectedButton = null;
var prevbut = null;
var img = false;
var tir = 0;
document.onclick = function() {
  tir++;
  if (isMobile) {
    console.log('hel');
    if (img) {
      if (selectedButton == prevbut && tir == 3) {
        Array.from(selectedButton.children).forEach((child, index) => {
          child.style.display = "none";
      });
      tir = 0;
      selectedButton = null;
      img = false;
      }
    } else {
      if (selectedButton == prevbut && tir == 2) {
        Array.from(selectedButton.children).forEach((child, index) => {
          child.style.display = "none";
      });
      tir = 0;
      selectedButton = null;
     }
    }
  }
};
function Tog() {
  console.log('cio');
  if (selectedButton != prevbut && prevbut != null) {
    Array.from(prevbut.children).forEach((child, index) => {
      child.style.display = "none";
    });
    tir = 0;
    img = false;
  }
  prevbut = selectedButton;
}
function rit() {
  window.location.href = "../page/Mappa.html";
}
function Bigl(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Biglietteria';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.height = "30px";
  nuovoOggetto.style.marginTop = "-30px";
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.text = "Ciao";
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      selectedButton = hotSpotDiv;
      Tog();
      nuovoOggetto.style.display = "block"; 
    }
  };
  hotSpotDiv.onmouseenter = function() {
      nuovoOggetto.style.display = "block"; // Mostra il div quando il mouse entra
  }
  hotSpotDiv.onmouseleave = function() {
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
    }
  }
}
function Alfieri(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Vittorio Alfieri';
  nuovoOggetto.classList.add('info'); 
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.text = "Ciao";
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        window.location.href = "../page/Vittorio.html";
      }
      selectedButton = hotSpotDiv;
      Tog();
      nuovoOggetto.style.display = "block"; 
    }else {
      window.location.href = "../page/Vittorio.html"; // Reindirizza alla pagina desiderata
    }
};
  hotSpotDiv.onmouseenter = function() {
      nuovoOggetto.style.display = "block"; // Mostra il div quando il mouse entra
  }
  hotSpotDiv.onmouseleave = function() {
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
    }
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
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        window.location.href = "../page/Carlo.html";
      }
      selectedButton = hotSpotDiv;
      Tog();
      nuovoOggetto.style.display = "block"; 
    }else {
      window.location.href = "../page/Carlo.html";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
    }
  }
}

function Metastasio(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Metastasio';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.height = "30px";
  nuovoOggetto.style.marginTop = "-30px";
  hotSpotDiv.appendChild(nuovoOggetto);

  hotSpotDiv.text = "Ciao";
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        window.location.href = "../page/Metastasio.html";
      }
      selectedButton = hotSpotDiv;
      Tog();
      nuovoOggetto.style.display = "block"; 
    }else {
      window.location.href = "../page/Metastasio.html";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
    }
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
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        window.location.href = "../page/VittorioM.html";
      }
      selectedButton = hotSpotDiv;
      Tog();
      nuovoOggetto.style.display = "block"; 
    }else {
      window.location.href = "../page/VittorioM.html";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
    }
  }
}
function abito1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Abito del baritono Giovan Battista Inghilleri';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.fontSize = '15px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('Ing'); 
  var testo = document.createElement('p');
  testo.textContent = "Giovan Battista Inghilleri, baritono nato a Porto Empedocle nel 1894, fu celebre per le esibizioni nei principali teatri italiani e internazionali, interpretando ruoli iconici come Carlo Gérard, Alfio, Tonio e Figaro.";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-45px';
    testo.style.fontSize = '7.5px';
  } else {
    testo.style.bottom = '-65px';
    testo.style.fontSize = '12px';
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        Oggetto2.style.display = "Block";
        nuovoOggetto.style.display = "none";
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
}
function abito2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Abito del baritono Giovan Battista Inghilleri';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.fontSize = '15px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('Ing2'); 
  var testo = document.createElement('p');
  testo.textContent = "Giovan Battista Inghilleri, baritono nato a Porto Empedocle nel 1894, fu celebre per le esibizioni nei principali teatri italiani e internazionali, interpretando ruoli iconici come Carlo Gérard, Alfio, Tonio e Figaro.";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-45px';
    testo.style.fontSize = '7.5px';
  } else {
    testo.style.bottom = '-65px';
    testo.style.fontSize = '12px';
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        Oggetto2.style.display = "Block";
        nuovoOggetto.style.display = "none";
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
}
function Lapide06(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Lapide Commemorativa 2006';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '16px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('Lap06'); 
  var testo = document.createElement('p');
  testo.textContent = "Lapide che ricorda la donazione della “Copia del grande sipario storico Il trionfo di Esseneto” da parte del produttore teatrale nazionale agrigentino Francesco Bellomo";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-44px';
  } else {
    testo.style.bottom = '-78px';
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        Oggetto2.style.display = "Block";
        nuovoOggetto.style.display = "none";
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
}
function Lapide95(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  //testo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Lapide Commemorativa 1995';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '16px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  //imagine e testo
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('Lap95'); 
  var testo = document.createElement('p');
  testo.textContent = "Lapide che ricorda la restituzione del teatro \"Luigi Pirandello\" alla città da parte dell'amministrazione Sodano";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-43px';
    testo.style.fontSize = '10px';
  } else {
    testo.style.bottom = '-65px';
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        Oggetto2.style.display = "Block";
        nuovoOggetto.style.display = "none";
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
}
function Dedica(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dedica del Foyer';
  nuovoOggetto.classList.add('info'); 
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('Dedica'); 
  var testo = document.createElement('p');
  testo.textContent = "Lapide con il nome dell’attore agrigentino Pippo Montalbano, al quale è dedicato il foyer del teatro \"Luigi Pirandello\" di Agrigento.";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-38px';
    testo.style.fontSize = '9px';
  } else {
    testo.style.bottom = '-75px';
  }
  Oggetto2.appendChild(testo); 
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        Oggetto2.style.display = "Block";
        nuovoOggetto.style.display = "none";
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
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
  var testo = document.createElement('p');
  testo.textContent = "Elaborati grafici di progetto del teatro, pianta con sezione trasversale con veduta di:\n ●palcoscenico e torre scenica\n ●sala con platea e palchi\n ●ingresso – vestibolo soprastante il foyer\n ●atrio e porticato di ingresso";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-38px';
    testo.style.fontSize = '9px';
  } else {
    testo.style.bottom = '-60px';
  }
  Oggetto2.appendChild(testo); 
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        Oggetto2.style.display = "Block";
        nuovoOggetto.style.display = "none";
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
}