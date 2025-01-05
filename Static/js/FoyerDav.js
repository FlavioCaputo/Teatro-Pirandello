dir = localStorage.getItem('inc');
console.log(dir);
if (dir === "false") {
  inc = 90;
}else {
  inc = -90;
}
var pitch = 0;
var yaw = 0;
var fov = 0;
const isMobile = navigator.userAgentData.mobile;
var selectedButton = null;
var prevbut = null;
var img = false;
var tir = 0;
var ind;
var us = true;
viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://raw.githubusercontent.com/FlavioCaputo/Teatro-Pirandello/refs/heads/main/Static/Panorama/foyer2.jpg",
    "autoLoad": true,
    "showControls": false,
    "yaw": inc, 
    "hotSpots": []
  })
  viewer.addHotSpot({
    id: "pia",
    pitch: -4,
    yaw: -5,
    type: "info",
    createTooltipFunc: piano,
  });
  
  viewer.addHotSpot({
    id: "fr1",
    pitch: -12,
    yaw: 90,
    cssClass: "custom-hotspot1",
    createTooltipFunc: Freccia1,
    createTooltipArgs: "Custom Hotspot",
  });
  
  viewer.addHotSpot({
    id: "fr2",
    pitch: -7,
    yaw: -93,
    cssClass: "custom-hotspot2",
    createTooltipFunc: Freccia2,
    createTooltipArgs: "Custom Hotspot",
  });
  
  viewer.addHotSpot({
    id: "Lap69",
    pitch: 2,
    yaw: -38,
    type: "info",
    createTooltipFunc: Lapide69,
  });
  
  viewer.addHotSpot({
    id: "Bel",
    pitch: 27,
    yaw: -149,
    type: "info",
    createTooltipFunc: Bellini,
  });
  
  viewer.addHotSpot({
    id: "Mis",
    pitch: 21,
    yaw: -179,
    type: "info",
    createTooltipFunc: Mis,
  });
  
  viewer.addHotSpot({
    id: "Lap81",
    pitch: 2,
    yaw: -148,
    type: "info",
    createTooltipFunc: Lapide81,
  });
  
  viewer.addHotSpot({
    id: "Lui",
    pitch: -2,
    yaw: -46,
    type: "info",
    createTooltipFunc: Luigi,
  });
  
  viewer.addHotSpot({
    id: "Ros",
    pitch: 27,
    yaw: -38,
    type: "info",
    createTooltipFunc: Rossini,
  });
  
  viewer.addHotSpot({
    id: "Ver",
    pitch: 30,
    yaw: 25,
    type: "info",
    createTooltipFunc: Verdi,
  });
  
  viewer.addHotSpot({
    id: "Ugo",
    pitch: -2,
    yaw: -25,
    type: "info",
    createTooltipFunc: Ugo,
  });
  
  viewer.addHotSpot({
    id: "Mil",
    pitch: 0,
    yaw: 12,
    type: "info",
    createTooltipFunc: Mille,
  });
  
  viewer.addHotSpot({
    id: "Mer",
    pitch: 27,
    yaw: 150,
    type: "info",
    createTooltipFunc: Mercadante,
  });
  
  viewer.addHotSpot({
    id: "plat",
    pitch: 3,
    yaw: 119,
    type: "info",
    createTooltipFunc: PlanT,
  });
  
  viewer.addHotSpot({
    id: "plaf",
    pitch: 4,
    yaw: 58,
    type: "info",
    createTooltipFunc: PlanF,
  });
  
  viewer.addHotSpot({
    id: "bus",
    pitch: 0,
    yaw: -200,
    type: "info",
    createTooltipFunc: BustoZ,
  });
  
  viewer.addHotSpot({
    id: "pip",
    pitch: -1,
    yaw: -161,
    type: "info",
    createTooltipFunc: Pippo,
  });
  
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
  const hotspotsData = [
    [{ id: "pia", pitch: -4, yaw: -5, type: "info", createTooltipFunc: piano }],
    [{ id: "fr1", pitch: -12, yaw: 90, cssClass: "custom-hotspot1", createTooltipFunc: Freccia1, createTooltipArgs: "Custom Hotspot" }],
    [{ id: "fr2", pitch: -7, yaw: -93, cssClass: "custom-hotspot2", createTooltipFunc: Freccia2, createTooltipArgs: "Custom Hotspot" }],
    [{ id: "Lap69", pitch: 2, yaw: -38, type: "info", createTooltipFunc: Lapide69 }],
    [{ id: "Bel", pitch: 27, yaw: -149, type: "info", createTooltipFunc: Bellini }],
    [{ id: "Mis", pitch: 21, yaw: -179, type: "info", createTooltipFunc: Mis }],
    [{ id: "Lap81", pitch: 2, yaw: -148, type: "info", createTooltipFunc: Lapide81 }],
    [{ id: "Lui", pitch: -2, yaw: -46, type: "info", createTooltipFunc: Luigi }],
    [{ id: "Ros", pitch: 27, yaw: -38, type: "info", createTooltipFunc: Rossini }],
    [{ id: "Ver", pitch: 30, yaw: 25, type: "info", createTooltipFunc: Verdi }],
    [{ id: "Ugo", pitch: -2, yaw: -25, type: "info", createTooltipFunc: Ugo }],
    [{ id: "Mil", pitch: 0, yaw: 12, type: "info", createTooltipFunc: Mille }],
    [{ id: "Mer", pitch: 27, yaw: 150, type: "info", createTooltipFunc: Mercadante }],
    [{ id: "plat", pitch: 3, yaw: 119, type: "info", createTooltipFunc: PlanT }],
    [{ id: "plaf", pitch: 4, yaw: 58, type: "info", createTooltipFunc: PlanF }],
    [{ id: "bus", pitch: 0, yaw: -200, type: "info", createTooltipFunc: BustoZ }],
    [{ id: "pip", pitch: -1, yaw: -161, type: "info", createTooltipFunc: Pippo }]
  ];
  function sop(nome) {
    let id;
    id = hotspotIds.indexOf(nome)
  
    const [item] = hotspotIds.splice(id, 1);
    hotspotIds.push(item);
    viewer.removeHotSpot(item);
    let hotspot = hotspotsData[id][0];
    hotspotsData.splice(id, 1);
    hotspotsData.push([hotspot]);
    viewer.addHotSpot(hotspot);
  }

  viewer.on('mousedown', (event) => {
    pitch = viewer.mouseEventToCoords(event)[0];
    yaw = viewer.mouseEventToCoords(event)[1];
    fov = viewer.getHfov();
    });
  function cent(id) {
    sop(id);
    hotSpotDiv = ind;
    us = false;
    Oggetto2 = hotSpotDiv.children[0];
    nuovoOggetto = hotSpotDiv.children[1];
    nuovoOggetto.style.display = "none";
    Oggetto2.style.zIndex = 5;
    canvas_height = window.innerHeight;
    canvas_width = window.innerWidth;
    xc = viewer.getYaw();
    yc = viewer.getPitch();
    //studio di pitch in px
    y_pixel = (pitch-yc) * 9.3 * 100/fov + window.innerHeight/2;
    const cal = (a, b) => ((a >= 0) === (b >= 0) ? a - b : a + b);
    difx = cal(yaw, xc);
    dif = cal(pitch, yc);
    const style = window.getComputedStyle(Oggetto2);
    altob = parseFloat(style.height) +  parseFloat(style.borderBottomWidth) + parseFloat(style.borderWidth);
    if (dif >= 0) { //alto 
      alt = (y_pixel-180);
      if (alt > altob) {
        alt=-40 + "px";
      }else {
        alt = -(y_pixel-180) + "px";
      }
      Oggetto2.style.bottom = alt;
    }else {
      alt = (y_pixel-160);
      if (alt > altob || alt <= 0) {
        alt=0 + "px";
      }else {
        alt = -(y_pixel-180) + "px";
      }
      Oggetto2.style.bottom = alt;
    }
    console.log(difx);
      console.log(yaw);
      console.log(xc);
      console.log('-------');
    if (difx <= 0) { //sinistra
      Oggetto2.style.removeProperty('right');
      Oggetto2.style.display = "Block";
      Oggetto2.style.left = 20 + "px";
    }else {
      Oggetto2.style.removeProperty('left');
      Oggetto2.style.display = "Block";
      Oggetto2.style.right = 20 + "px";
    }
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
  function rit() {
    window.location.href = "../page/Mappa.html";
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
      nuovoOggetto.style.display = "Block";
    }
    hotSpotDiv.onmouseleave = function() {
      nuovoOggetto.style.display = "none";
    }
  }
  function Lapide81(hotSpotDiv, args) {
    ind = hotSpotDiv;
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
  function Lapide69(hotSpotDiv, args) {
    ind = hotSpotDiv;
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
  function PlanF(hotSpotDiv, args) {
    ind = hotSpotDiv;
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
  function PlanT(hotSpotDiv, args) {
    ind = hotSpotDiv;
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
  function Rossini(hotSpotDiv, args) {
    ind = hotSpotDiv;
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