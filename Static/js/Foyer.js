dir = localStorage.getItem('inc');
console.log(dir);
if (dir === "false") {
  inc = 90;
}else {
  inc = -90;
}
const isMobile = navigator.userAgentData.mobile;
var selectedButton = null;
var prevbut = null;
var img = false;
var tir = 0;
var ind;
var us = true;
viewer = pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "https://raw.githubusercontent.com/FlavioCaputo/Teatro-Pirandello/refs/heads/main/Static/Panorama/foyer.jpg",
  "autoLoad": true,
  "showControls": false,
  "yaw": inc, 
  "hotSpots": [
    {
        "pitch": 27.5,
        "yaw": 212.5,
        "type": "info",
        "text": "Vincenzo Bellini",
        "createTooltipFunc": Alfieri,
    },
    {
      "pitch": -10.5,
      "yaw": 1,
      "cssClass": "custom-hotspot2",
      "text": "Stanza Laterale",
      "createTooltipFunc": Freccia1,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": -9.5,
      "yaw": -88,
      "cssClass": "custom-hotspot1",
      "text": "Foyer",
      "createTooltipFunc": Freccia2,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": -24,
      "yaw": 93,
      "cssClass": "custom-hotspot2",
      "text": "Foyer",
      "createTooltipFunc": Freccia3,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": 23,
      "yaw": 181,
      "type": "info",
      "text": "Goldoni",
      "createTooltipFunc": Goldoni,
   },
   {
    "pitch": 0,
    "yaw": 181,
    "type": "info",
    "text": "Goldoni",
    "createTooltipFunc": Bigl,
   },
   {
    "pitch": 24,
    "yaw": 2,
    "type": "info",
    "text": "Metastasio",
    "createTooltipFunc": Metastasio,
  },
  {
  "pitch": 27,
  "yaw": -28.5,
  "type": "info",
  "text": "Monti",
  "createTooltipFunc": Monti,
  },
  {
    "pitch": 4,
    "yaw": -16,
    "type": "info",
    "text": "abito",
    "createTooltipFunc": abito1,
  },
  {
      "pitch": 4,
      "yaw": 202,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": abito2,
  },
  {
      "pitch": 4.3,
      "yaw": -12,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": Lapide06,
  },
  {
        "pitch": 5,
        "yaw": 195,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Lapide95,
  },
  {
          "pitch": 9,
          "yaw": 166.5,
          "type": "info",
          "text": "abito",
          "createTooltipFunc": Dedica,
  },
  {
    "pitch": 2.5,
    "yaw": 15.5,
    "type": "info",
    "text": "abito",
    "createTooltipFunc": PlanL,
  },
  ]
})

const hotspotIds = [
  "lap95",
  "Alf",
  "fr1",
  "fr2",
  "fr3",
  "Gol",
  "big",
  "Met",
  "Mon",
  "ab1",
  "ab2",
  "lap06",
  "Ded",
  "Plan"
];
const pos = [
[5, 195], 
[27.5, 212.5], 
[-10.5, 1], 
[-9.5, -88], 
[-24, 93], 
[23, 181], 
[0, 181], 
[24, 2], 
[27, -28.5], 
[4, -16], 
[4, 202], 
[4.3, -12], 
[12, 166.5], 
[2.5, 15.5], 
]

document.getElementById('buttonbordered').addEventListener('click', function(e) {
  window.location.href = "../page/Mappa.html";
});
function hotpos(id) {
  let ind
  ind = hotspotIds.indexOf(id);
  const [pitch, yaw] = pos[ind];
  return [pitch, yaw]
}

viewer.on('mousedown', (event) => {
  pitch = viewer.mouseEventToCoords(event)[0];
  yaw = viewer.mouseEventToCoords(event)[1];
  fov = viewer.getHfov();
  });
function cent(id) {
  hotSpotDiv = ind;
  us = false;
  Oggetto2 = hotSpotDiv.children[0];
  nuovoOggetto = hotSpotDiv.children[1];
  nuovoOggetto.style.display = 'none';
  const [pitch, yaw] = hotpos(id);
  console.log(yaw)
  viewer.setHfov(50);
  viewer.setYaw(yaw);
  viewer.setPitch(pitch);
  console.log(viewer.getHfov())
  Oggetto2.style.display = 'Block';
}

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
function Bigl(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Biglietteria';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.height = "30px";
  nuovoOggetto.style.marginTop = "-30px";
  if (isMobile) {
    nuovoOggetto.style.fontSize = '15px';
  }
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
  //testo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Ritratto di Vittorio Alfieri (Asti, 16 gennaio 1749 – Firenze l\'8 ottobre 1803)';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '16px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  //imagine e testo
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('Alf'); 
  var testo = document.createElement('p');
  testo.textContent = "Vittorio Alfieri fù un celebre drammaturgo, poeta e scrittore italiano del XVIII secolo. Il dipinto di forma circolare, impreziosito da un elegante profilo dorato e da una cornice in stucco di colore bianco, è opera dei pittori milanesi Luigi Sacco e Antonio Tavella (1879).";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-43px';
    testo.style.fontSize = '7px';
    nuovoOggetto.style.fontSize = "13px";
  } else {
    testo.style.bottom = '-120px';
    nuovoOggetto.style.fontSize = "12px";
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("Alf");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("Alf");
      
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    us = true
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
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
    localStorage.setItem('inc', true);
      window.location.href = "../page/Visita3.html";
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
function Freccia3(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot');
  hotSpotDiv.onclick = function() {
      window.location.href = "../page/ent.html";
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
function Goldoni(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  //testo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Ritratto di Carlo Goldoni (Venezia 1707 - Parigi 1793)';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '16px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  //imagine e testo
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('gol'); 
  var testo = document.createElement('p');
  testo.textContent = "Carlo Goldoni fù un celebre compositore italiano considerato uno dei padri della commedia moderna. Il dipinto di forma circolare, impreziosito da un elegante profilo dorato e da una cornice in stucco di colore bianco, è opera dei pittori milanesi Luigi Sacco e Antonio Tavella (1879).";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-43px';
    testo.style.fontSize = '7px';
    nuovoOggetto.style.fontSize = "13px";
  } else {
    testo.style.bottom = '-130px';
    nuovoOggetto.style.fontSize = "14px";
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("Gol");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("Gol");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    us = true;
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
}
function Metastasio(hotSpotDiv, args) {
  ind = hotSpotDiv;
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  //testo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Ritratto di  Metastasio (Roma, 3 gennaio 1698 – Vienna, 12 aprile 1782)';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '16px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  //imagine e testo
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('met'); 
  var testo = document.createElement('p');
  testo.textContent = "Pietro Trapassi, meglio conosciuto come Metastasio fù un celebre poeta, librettista, drammaturgo del XVIII. Il dipinto di forma circolare, impreziosito da un elegante profilo dorato e da una cornice in stucco di colore bianco, è opera dei pittori milanesi Luigi Sacco e Antonio Tavella (1879).";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-43px';
    testo.style.fontSize = '7px';
    nuovoOggetto.style.fontSize = "13px";
  } else {
    testo.style.bottom = '-138px';
    nuovoOggetto.style.fontSize = "12px";
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("Met");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("Met");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    us = true;
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
}
function Monti(hotSpotDiv, args) {
  ind = hotSpotDiv;
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  //testo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Ritratto di Vittorio Monti (Napoli, 6 gennaio 1868 - 20 giugno 1922)';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '16px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  //imagine e testo
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('mon'); 
  var testo = document.createElement('p');
  testo.textContent = "Vittorio Monti fù uno dei maggiori compositori, violinisti e direttori d'orchestra italiano a cavallo tra il XIX e il XX secolo. Il dipinto di forma circolare, impreziosito da un elegante profilo dorato e da una cornice in stucco di colore bianco, è opera dei pittori milanesi Luigi Sacco e Antonio Tavella (1879).";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-43px';
    testo.style.fontSize = '7px';
    nuovoOggetto.style.fontSize = "13px";
  } else {
    testo.style.bottom = '-130px';
    nuovoOggetto.style.fontSize = "12px";
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("Mon");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("Mon");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    us = true
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
}
function abito1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Abito del baritono Giovan Battista Inghilleri';
  nuovoOggetto.classList.add('info'); 
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
    testo.style.fontSize = '6.5px';
    nuovoOggetto.style.fontSize = '11px';
  } else {
    testo.style.bottom = '-65px';
    testo.style.fontSize = '12px';
    nuovoOggetto.style.fontSize = '15px';
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("ab1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ab1");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    us = true
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
    testo.style.fontSize = '6.5px';
    nuovoOggetto.style.fontSize = '11px';
  } else {
    testo.style.bottom = '-65px';
    testo.style.fontSize = '12px';
    nuovoOggetto.style.fontSize = '15px';
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("ab2");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ab2");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    us = true
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
    testo.style.fontSize = '8px';
    nuovoOggetto.style.fontSize = '13px';
  } else {
    testo.style.bottom = '-78px';
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("lap06");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("lap06");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    us = true
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
    testo.style.fontSize = '7px';
    nuovoOggetto.style.fontSize = "13px";
  } else {
    testo.style.bottom = '-65px';
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("lap95");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("lap95")
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    us = true
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
    testo.style.fontSize = '7px';
  } else {
    testo.style.bottom = '-75px';
  }
  Oggetto2.appendChild(testo); 
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("Ded");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("Ded");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    us = true
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
    testo.style.fontSize = '7px';
  } else {
    testo.style.bottom = '-60px';
  }
  Oggetto2.appendChild(testo); 
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("Plan");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("Plan");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    us = true
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
}