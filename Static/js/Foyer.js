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
  "panorama": "https://raw.githubusercontent.com/FlavioCaputo/Teatro-Pirandello/refs/heads/main/Static/Panorama/foyer.jpg",
  "autoLoad": true,
  "showControls": false,
  "yaw": inc, 
  "hotSpots": []
})
viewer.addHotSpot({
    id: "lap95",
    pitch: 5,
    yaw: 195,
    type: "info",
    createTooltipFunc: Lapide95,
});

viewer.addHotSpot({
    id: "Alf",
    pitch: 27.5,
    yaw: 212.5,
    type: "info",
    createTooltipFunc: Alfieri,
});

viewer.addHotSpot({
    id: "fr1",
    pitch: -10.5,
    yaw: 1,
    cssClass: "custom-hotspot2",
    createTooltipFunc: Freccia1,
});

viewer.addHotSpot({
    id: "fr2",
    pitch: -9.5,
    yaw: -88,
    cssClass: "custom-hotspot1",
    createTooltipFunc: Freccia2,
});

viewer.addHotSpot({
    id: "fr3",
    pitch: -24,
    yaw: 93,
    cssClass: "custom-hotspot2",
    createTooltipFunc: Freccia3,
});

viewer.addHotSpot({
    id: "Gol",
    pitch: 23,
    yaw: 181,
    type: "info",
    createTooltipFunc: Goldoni,
});

viewer.addHotSpot({
    id: "big",
    pitch: 0,
    yaw: 181,
    type: "info",
    createTooltipFunc: Bigl,
});

viewer.addHotSpot({
    id: "Met",
    pitch: 24,
    yaw: 2,
    type: "info",
    text: "Metastasio",
    createTooltipFunc: Metastasio,
});

viewer.addHotSpot({
    id: "Mon",
    pitch: 27,
    yaw: -28.5,
    type: "info",
    createTooltipFunc: Monti,
});

viewer.addHotSpot({
    id: "ab1",
    pitch: 4,
    yaw: -16,
    type: "info",
    text: "abito",
    createTooltipFunc: abito1,
});

viewer.addHotSpot({
    id: "ab2",
    pitch: 4,
    yaw: 202,
    type: "info",
    text: "abito",
    createTooltipFunc: abito2,
});

viewer.addHotSpot({
    id: "lap06",
    pitch: 4.3,
    yaw: -12,
    type: "info",
    text: "abito",
    createTooltipFunc: Lapide06,
});

viewer.addHotSpot({
    id: "Ded",
    pitch: 9,
    yaw: 166.5,
    type: "info",
    text: "abito",
    createTooltipFunc: Dedica,
});

viewer.addHotSpot({
    id: "Plan",
    pitch: 2.5,
    yaw: 15.5,
    type: "info",
    text: "abito",
    createTooltipFunc: PlanL,
});

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
let hotspotsData = [
  // Hotspot 1: lap95
  [
      { id: "lap95", pitch: 5, yaw: 195, type: "info", createTooltipFunc: Lapide95 }
  ],
  
  // Hotspot 2: Alf
  [
      { id: "Alf", pitch: 27.5, yaw: 212.5, type: "info", createTooltipFunc: Alfieri }
  ],
  
  // Hotspot 3: fr1
  [
      { id: "fr1", pitch: -10.5, yaw: 1, cssClass: "custom-hotspot2", createTooltipFunc: Freccia1 }
  ],
  
  // Hotspot 4: fr2
  [
      { id: "fr2", pitch: -9.5, yaw: -88, cssClass: "custom-hotspot1", createTooltipFunc: Freccia2 }
  ],
  
  // Hotspot 5: fr3
  [
      { id: "fr3", pitch: -24, yaw: 93, cssClass: "custom-hotspot2", createTooltipFunc: Freccia3 }
  ],
  
  // Hotspot 6: Gol
  [
      { id: "Gol", pitch: 23, yaw: 181, type: "info", createTooltipFunc: Goldoni }
  ],
  
  // Hotspot 7: big
  [
      { id: "big", pitch: 0, yaw: 181, type: "info", createTooltipFunc: Bigl }
  ],
  
  // Hotspot 8: Met
  [
      { id: "Met", pitch: 24, yaw: 2, type: "info", text: "Metastasio", createTooltipFunc: Metastasio }
  ],
  
  // Hotspot 9: Mon
  [
      { id: "Mon", pitch: 27, yaw: -28.5, type: "info", createTooltipFunc: Monti }
  ],
  
  // Hotspot 10: ab1
  [
      { id: "ab1", pitch: 4, yaw: -16, type: "info", text: "abito", createTooltipFunc: abito1 }
  ],
  
  // Hotspot 11: ab2
  [
      { id: "ab2", pitch: 4, yaw: 202, type: "info", text: "abito", createTooltipFunc: abito2 }
  ],
  
  // Hotspot 12: lap06
  [
      { id: "lap06", pitch: 4.3, yaw: -12, type: "info", text: "abito", createTooltipFunc: Lapide06 }
  ],
  
  // Hotspot 13: Ded
  [
      { id: "Ded", pitch: 9, yaw: 166.5, type: "info", text: "abito", createTooltipFunc: Dedica }
  ],
  
  // Hotspot 14: Plan
  [
      { id: "Plan", pitch: 2.5, yaw: 15.5, type: "info", text: "abito", createTooltipFunc: PlanL }
  ]
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
  nuovoOggetto.style.display = 'none';
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
  ind = hotSpotDiv;
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
  ind = hotSpotDiv;
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
    testo.style.bottom = '-127px';
    nuovoOggetto.style.fontSize = "14px";
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
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
    testo.style.bottom = '-127px';
    nuovoOggetto.style.fontSize = "12px";
  }
  Oggetto2.appendChild(testo);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
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
  ind = hotSpotDiv;
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
  ind = hotSpotDiv;
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
  ind = hotSpotDiv;
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
  ind = hotSpotDiv;
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
  ind = hotSpotDiv;
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
  ind = hotSpotDiv;
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