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
var kms = true;
viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://raw.githubusercontent.com/FlavioCaputo/Teatro-Pirandello/refs/heads/main/Static/Panorama/foyer2.jpg",
    "autoLoad": true,
    "showControls": false,
    "yaw": inc, 
    "hotSpots": [
      {
        "pitch": -4,
        "yaw": -5,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": piano,
      },
      {
        "pitch": -12,
        "yaw": 90,
        "cssClass": "custom-hotspot1",
        "text": "Stanza Laterale",
        "createTooltipFunc": Freccia1,
        "createTooltipArgs": "Custom Hotspot"
      },
      {
        "pitch": -7,
        "yaw": -93,
        "cssClass": "custom-hotspot2",
        "text": "Stanza Laterale",
        "createTooltipFunc": Freccia2,
        "createTooltipArgs": "Custom Hotspot"
      },
      {
        "pitch": 2,
        "yaw": -38,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Lapide69,
      },
      {
        "pitch": 27,
        "yaw": -149,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Bellini,
      },
      {
        "pitch": 21,
        "yaw": -179,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Mis,
      },
      {
        "pitch": 2,
        "yaw": -148,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Lapide81,
      },
      {
        "pitch": -2,
        "yaw": -46,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Luigi,
      },
      {
        "pitch": 27,
        "yaw": -38,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Rossini,
      },
      {
        "pitch": 30,
        "yaw": 25,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Verdi,
      },
      {
        "pitch": -2,
        "yaw": -25,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Ugo,
      },
      {
        "pitch": 0,
        "yaw": 12,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Mille,
      },
      {
        "pitch": 27,
        "yaw":  150,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Mercadante,
      },
      {
        "pitch": 3,
        "yaw": 119,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": PlanT,
      },
      {
        "pitch": 4,
        "yaw": 58,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": PlanF,
      },
      {
        "pitch": 0,
        "yaw": -200,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": BustoZ,
      },
      {
        "pitch": -1,
        "yaw": -161,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Pippo,
      },
    ]
  })

  
  const hotspotIds = [
    "pia",
    "fr1",
    "fr2",
    "Lap69",
    "Bel",
    "Mis",
    "Lap81",
    "Lui",
    "Ros",
    "Ver",
    "Ugo",
    "Mil",
    "Mer",
    "plat",
    "plaf",
    "bus",
    "pip",
  ];
  const pos = [
    [-4, -5],
    [-12, 90],
    [-7, -93],
    [2, -38],
    [27, -149],
    [21, -179],
    [2, -148],
    [-2, -46],
    [27, -38],
    [30, 25],
    [-2, -25],
    [0, 12],
    [27, 150],
    [3, 119],
    [4, 58],
    [0, -200],
    [-1, -161]
  ];

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
  function Freccia1(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot');
    hotSpotDiv.onclick = function() {
        localStorage.setItem('inc', false);
        window.location.href = "../page/Visita.html";
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
        window.location.href = "../page/Plat.html";
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
  function piano(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'Pianoforte del teatro';
    nuovoOggetto.classList.add('info'); 
    hotSpotDiv.appendChild(nuovoOggetto);
  
    hotSpotDiv.text = "Ciao";
    hotSpotDiv.onclick = function() {
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
        }
        selectedButton = hotSpotDiv;
        Tog();
        nuovoOggetto.style.display = "block"; 
      }else {
      }
    };
    hotSpotDiv.onmouseenter = function() {
      if (kms == true) {
        nuovoOggetto.style.display = "Block";
      }
    }
    hotSpotDiv.onmouseleave = function() {
      kms = true;
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
      }
    }
  }
  function Lapide81(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'Lapide Commemorativa 1881';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.fontSize = '16px';
    nuovoOggetto.style.width = '120px';
    nuovoOggetto.style.height = '70px';
    nuovoOggetto.style.top = '-10px';
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('Lap81'); 
    var testo = document.createElement('p');
    testo.textContent = "Lapide che ricorda la visita della Regina Margherita nella città di Agrigento (già Girgenti) e la partecipazione alla cerimonia di intitolazione del teatro alla “augusta sovrana” ";
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
      ind = hotSpotDiv;
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          cent("Lap81");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("Lap81");
      }
    };
    hotSpotDiv.onmouseenter = function() {
      if (kms == true) {
        nuovoOggetto.style.display = "Block";
      }
    }
    hotSpotDiv.onmouseleave = function() {
      kms = true;
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
        Oggetto2.style.display = "none";
      }
    }
  }
  function Lapide69(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'Lapide Commemorativa 1869';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.fontSize = '16px';
    nuovoOggetto.style.width = '120px';
    nuovoOggetto.style.height = '70px';
    nuovoOggetto.style.top = '-10px';
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('Lap81'); 
    var testo = document.createElement('p');
    testo.textContent = "Lapide che ricorda il voto del Consiglio civico del 9 maggio 1869 per la costruzione di un teatro comunale e l’inaugurazione avvenuta in data 24 aprile 1880.";
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
      ind = hotSpotDiv;
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          cent("Lap69");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("Lap69");
      }
    };
    hotSpotDiv.onmouseenter = function() {
      if (kms == true) {
        nuovoOggetto.style.display = "Block";
      }
    }
    hotSpotDiv.onmouseleave = function() {
      kms = true;
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
        Oggetto2.style.display = "none";
      }
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
    var testo = document.createElement('p');
    testo.textContent = "Elaborati grafici di progetto del teatro, pianta con sezione trasversale con veduta di:\n ●sala con platea e palchi\n ●volta in gesso con cannucciato e copertura";
    testo.classList.add('text');
    if (isMobile) {
      testo.style.bottom = '-38px';
      testo.style.fontSize = '9px';
    } else {
      testo.style.bottom = '-45px';
    }
    Oggetto2.appendChild(testo);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      ind = hotSpotDiv;
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          cent("plaf");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("plaf");
      }
    };
    hotSpotDiv.onmouseenter = function() {
      if (kms == true) {
        nuovoOggetto.style.display = "Block";
      }
    }
    hotSpotDiv.onmouseleave = function() {
      kms = true;
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
        Oggetto2.style.display = "none";
      }
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
    var testo = document.createElement('p');
    testo.textContent = "Elaborati grafici di progetto del teatro, pianta con veduta di:\n ●palcoscenico e torre scenica\n ●sala con platea e palchi\n ●ingresso e vestibolo\n ●atrio e porticato di ingresso";
    testo.classList.add('text');
    if (isMobile) {
      testo.style.bottom = '-38px';
      testo.style.fontSize = '9px';
    } else {
      testo.style.bottom = '-45px';
    }
    Oggetto2.appendChild(testo);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      ind = hotSpotDiv;
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          cent("plat");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("plat");
      }
    };
    hotSpotDiv.onmouseenter = function() {
      if (kms == true) {
        nuovoOggetto.style.display = "Block";
      }
    }
    hotSpotDiv.onmouseleave = function() {
      kms = true;
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
        Oggetto2.style.display = "none";
      }
    }
  }
  function Bellini(hotSpotDiv, args) {
    ind = hotSpotDiv;
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  //testo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Ritratto di Vincenzo Bellini (Catania 1801 - Puteaux, Parigi, 1835)';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '16px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  //imagine e testo
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('bel'); 
  var testo = document.createElement('p');
  testo.textContent = "Vincenzo Bellini fù uno dei più celebri musicisti italiani del XIX secolo. Il dipinto di forma circolare, impreziosito da un elegante profilo dorato e da una cornice in stucco di colore bianco, è opera dei pittori milanesi Luigi Sacco e Antonio Tavella (1879).";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-43px';
    testo.style.fontSize = '7px';
    nuovoOggetto.style.fontSize = "13px";
  } else {
    testo.style.bottom = '-120px';
    nuovoOggetto.style.fontSize = "13px";
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("Bel");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("Bel");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (kms == true) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    kms = true;
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
  }
  function Rossini(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  //testo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Ritratto di Gioachino Rossini (Pesaro, 29 febbraio 1792 – Passy, 13 novembre 1868)';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '16px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  //imagine e testo
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('ros'); 
  var testo = document.createElement('p');
  testo.textContent = "Gioachino Rossini fù un celebre compositore italiano del XIX secolo. Il dipinto di forma circolare, impreziosito da un elegante profilo dorato e da una cornice in stucco di colore bianco, è opera dei pittori milanesi Luigi Sacco e Antonio Tavella (1879).";
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
        cent("Ros");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("Ros");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (kms == true) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    kms = true;
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
  }
  function Verdi(hotSpotDiv, args) {
    ind = hotSpotDiv;
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  //testo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Ritratto di Giuseppe Verdi (Le Roncole, 10 ottobre 1813 – Milano, 27 gennaio 1901)';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '16px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  //imagine e testo
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('ver'); 
  var testo = document.createElement('p');
  testo.textContent = "Giuseppe Fortunino Francesco Verdi fù uno dei più celebri compositori italiani del XIX secolo. Il dipinto di forma circolare, impreziosito da un elegante profilo dorato e da una cornice in stucco di colore bianco, è opera dei pittori milanesi Luigi Sacco e Antonio Tavella (1879).";
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
        cent("Ver");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("Ver");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (kms == true) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    kms = true;
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
  }
  function Mercadante(hotSpotDiv, args) {
    ind = hotSpotDiv;
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  //testo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Ritratto di Saverio Mercadante (Altamura, 17 settembre 1795 – Napoli, 17 dicembre 1870)';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '16px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  //imagine e testo
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('mer'); 
  var testo = document.createElement('p');
  testo.textContent = "Saverio Mercadante fù un celebre compositore italiano del XIX secolo. Il dipinto di forma circolare, impreziosito da un elegante profilo dorato e da una cornice in stucco di colore bianco, è opera dei pittori milanesi Luigi Sacco e Antonio Tavella (1879).";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-43px';
    testo.style.fontSize = '7px';
    nuovoOggetto.style.fontSize = "13px";
  } else {
    testo.style.bottom = '-120px';
    nuovoOggetto.style.fontSize = "10.7px";
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("Mer");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("Mer");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (kms == true) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    kms = true;
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
  }
  function Mis(hotSpotDiv, args) {
    ind = hotSpotDiv;
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  //testo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Ritratto di celebre compositore italiano';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '16px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  //imagine e testo
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('mis'); 
  var testo = document.createElement('p');
  testo.textContent = "Ritratto di celebre compositore italiano, di difficile identificazione a causa dello stato di degrado del dipinto, opera dei pittori milanesi Luigi Sacco e Antonio Tavella (1879).";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-43px';
    testo.style.fontSize = '7px';
    nuovoOggetto.style.fontSize = "13px";
  } else {
    testo.style.bottom = '-80px';
    nuovoOggetto.style.fontSize = "15px";
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("Mis");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("Mis");
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (kms == true) {
      nuovoOggetto.style.display = "Block";
    }
  }
  hotSpotDiv.onmouseleave = function() {
    kms = true;
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
      Oggetto2.style.display = "none";
    }
  }
  }
  function Luigi(hotSpotDiv, args) {
    ind = hotSpotDiv;
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'Busto in bronzo di Luigi Pirandello';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.fontSize = '16px';
    nuovoOggetto.style.width = '120px';
    nuovoOggetto.style.height = '70px';
    nuovoOggetto.style.top = '-10px';
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('Lug'); 
    var testo = document.createElement('p');
    testo.textContent = "Busto in bronzo del Premio Nobel Luigi Pirandello al quale, nel 1946, a dieci anni dalla morte dell'illustre agrigentino, l’amministrazione comunale intitolò il teatro.";
    testo.classList.add('text');
    if (isMobile) {
      testo.style.bottom = '-48px';
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
          cent("Lui");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("Lui");
      }
    };
    hotSpotDiv.onmouseenter = function() {
      if (kms == true) {
        nuovoOggetto.style.display = "Block";
      }
    }
    hotSpotDiv.onmouseleave = function() {
      kms = true;
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
        Oggetto2.style.display = "none";
      }
    }
  }
  function Mille(hotSpotDiv, args) {
    ind = hotSpotDiv;
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'G.B. Noto Millefiori';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.fontSize = '16px';
    nuovoOggetto.style.width = '120px';
    nuovoOggetto.style.height = '50px';
    nuovoOggetto.style.top = '8px';
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('Mil'); 
    var testo = document.createElement('p');
    testo.textContent = "G.B. Noto Millefiori, Personificazione del fiume Akragas, 1875.";
    testo.classList.add('text');
    if (isMobile) {
      testo.style.bottom = '-23px';
    } else {
      testo.style.bottom = '-25px';
    }
    Oggetto2.appendChild(testo);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      ind = hotSpotDiv;
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          cent("Mil");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("Mil");
      }
    };
    hotSpotDiv.onmouseenter = function() {
      if (kms == true) {
        nuovoOggetto.style.display = "Block";
      }
    }
    hotSpotDiv.onmouseleave = function() {
      kms = true;
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
        Oggetto2.style.display = "none";
      }
    }
  }
  function Ugo(hotSpotDiv, args) {
    ind = hotSpotDiv;
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'Busto di Don Pietro Ugo';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.fontSize = '16px';
    nuovoOggetto.style.width = '120px';
    nuovoOggetto.style.height = '50px';
    nuovoOggetto.style.top = '8px';
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('Pietro'); 
    var testo = document.createElement('p');
    testo.textContent = "Busto di Don Pietro Ugo, Luogotenente delle Due Sicilie (XIX sec.)";
    testo.classList.add('text');
    if (isMobile) {
      testo.style.bottom = '-25px';
    } else {
      testo.style.bottom = '-40px';
    }
    Oggetto2.appendChild(testo);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      ind = hotSpotDiv;
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          cent("Ugo");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("Ugo");
      }
    };
    hotSpotDiv.onmouseenter = function() {
      if (kms == true) {
        nuovoOggetto.style.display = "Block";
      }
    }
    hotSpotDiv.onmouseleave = function() {
      kms = true;
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
        Oggetto2.style.display = "none";
      }
    }
  }
  function BustoZ(hotSpotDiv, args) {
    ind = hotSpotDiv;
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'Busto di Zeus di Orticoli';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.fontSize = '16px';
    nuovoOggetto.style.width = '120px';
    nuovoOggetto.style.height = '50px';
    nuovoOggetto.style.top = '8px';
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('Z'); 
    var testo = document.createElement('div');
    testo.textContent = "Busto di Zeus di Orticoli, o Giove di Otricolo, XVIII secolo. Il busto raffigura un’opera marmorea rinvenuta nel 1775 nel comune italiano di Otricoli, in provincia di Terni, in Umbria.";
    testo.classList.add('text');
    if (isMobile) {
      testo.style.bottom = '-42px';
      testo.style.fontSize = '7.8px';
    } else {
      testo.style.bottom = '-75px';
      testo.style.fontSize = '13.5px';
    }
    Oggetto2.appendChild(testo);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      ind = hotSpotDiv;
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          cent("bus");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("bus");
      }
    };
    hotSpotDiv.onmouseenter = function() {
      if (kms == true) {
        nuovoOggetto.style.display = "Block";
      }
    }
    hotSpotDiv.onmouseleave = function() {
      kms = true;
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
        Oggetto2.style.display = "none";
      }
    }
  }
  function Pippo(hotSpotDiv, args) {
    ind = hotSpotDiv;
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'Busto di Pippo Montalbano';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.fontSize = '16px';
    nuovoOggetto.style.width = '120px';
    nuovoOggetto.style.height = '50px';
    nuovoOggetto.style.top = '8px';
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('Pip'); 
    var testo = document.createElement('div');
    testo.textContent = "Busto dell’attore agrigentino Pippo Montalbano, al quale è intitolato il foyer del teatro. Pippo Montalbano (Agrigento 1 febbraio 1940 - 8 marzo 2009).";
    testo.classList.add('text'); 
    if (isMobile) {
      testo.style.bottom = '-48px';
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
          cent("pip");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("pip");
      }
    };
    hotSpotDiv.onmouseenter = function() {
      if (kms == true) {
        nuovoOggetto.style.display = "Block";
      }
    }
    hotSpotDiv.onmouseleave = function() {
      kms = true;
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
        Oggetto2.style.display = "none";
      }
    }
  }
  