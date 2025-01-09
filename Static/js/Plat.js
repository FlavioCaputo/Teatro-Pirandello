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
  "panorama": "https://raw.githubusercontent.com/FlavioCaputo/Teatro-Pirandello/refs/heads/main/Static/Panorama/Pla1.jpeg",
  "autoLoad": true,
  "showControls": false,
  "yaw": inc, 
  "hotSpots": [
    {
      "pitch": -10,
      "yaw": -90.5,
      "cssClass": "custom-hotspot1",
      "text": "Stanza Laterale",
      "createTooltipFunc": Freccia2,
    },
    {
      "pitch": 7,
      "yaw": -90.5,
      "type": "info",
      "createTooltipFunc": sip,
    },
    {
      "pitch": -18  ,
      "yaw": 90,
      "cssClass": "custom-hotspot2",
      "text": "Stanza Laterale",
      "createTooltipFunc": Freccia1,
    },
    {
      "pitch": 25,
      "yaw": -117.5,
      "type": "info",
      "createTooltipFunc": cap1,
    },
    {
      "pitch": 21.5,
      "yaw": -111.5,
      "type": "info",
      "createTooltipFunc": cap2,
    },
    {
      "pitch": 25,
      "yaw": -64.5,
      "type": "info",
      "createTooltipFunc": cap3,
    },
    {
      "pitch": 22,
      "yaw": -70.5,
      "type": "info",
      "createTooltipFunc": cap4,
    },
    {
      "pitch": 55,
      "yaw": -90.5,
      "type": "info",
      "createTooltipFunc": mid,
    },
    {
      "pitch": 96,
      "yaw": -90.5,
      "type": "info",
      "createTooltipFunc": car,
    },
    {
      "pitch": 63,
      "yaw": -39,
      "type": "info",
      "createTooltipFunc": din,
    },
    {
      "pitch": 62,
      "yaw": 214,
      "type": "info",
      "createTooltipFunc": met,
    },
    {
      "pitch": 76,
      "yaw": 185,
      "type": "info",
      "createTooltipFunc": a1,
    },
    {
      "pitch": 57,
      "yaw": 242,
      "type": "info",
      "createTooltipFunc": a2,
    },
    {
      "pitch": 57,
      "yaw": -65,
      "type": "info",
      "createTooltipFunc": a3,
    },
    {
      "pitch": 14,
      "yaw": -125,
      "type": "info",
      "createTooltipFunc": ap,
    },
    {
      "pitch": 14.5,
      "yaw": -127.5,
      "type": "info",
      "createTooltipFunc": lep,
    },
    {
      "pitch": 16,
      "yaw": -133.5,
      "type": "info",
      "createTooltipFunc": aqu,
    },
    {
      "pitch": 16.5,
      "yaw": -137,
      "type": "info",
      "createTooltipFunc": gra,
    },
    {
      "pitch": 16.5,
      "yaw": -45,
      "type": "info",
      "createTooltipFunc": chi,
    },
    {
      "pitch": 16,
      "yaw": -48.5,
      "type": "info",
      "createTooltipFunc": div,
    },
    {
      "pitch": 14.5,
      "yaw": -54.2,
      "type": "info",
      "createTooltipFunc": divlep,
    },
    {
      "pitch": 14,
      "yaw": -57,
      "type": "info",
      "createTooltipFunc": ztest,
    },
    {
      "pitch": 12.5,
      "yaw": -61.5,
      "type": "info",
      "createTooltipFunc": escu,
    },
    {
      "pitch": 13,
      "yaw": -120,
      "type": "info",
      "createTooltipFunc": quad,
    },
    {
      "pitch": 18,
      "yaw": -145,
      "type": "info",
      "createTooltipFunc": cavallo,
    },
    {
      "pitch": 18,
      "yaw": -37,
      "type": "info",
      "createTooltipFunc": ful,
    },
    {
      "pitch": 18.5,
      "yaw": -149,
      "type": "info",
      "createTooltipFunc": trina,
    },
    {
      "pitch": 0,
      "yaw": -140,
      "type": "info",
      "createTooltipFunc": para,
    },
]
})

const hotspotIds = [
  "fr1",
  "fr2",
  "sip",
  "cap1",
  "cap2",
  "cap3",
  "cap4",
  "mid",
  "car",
  "din",
  "met",
  "a1",
  "a2",
  "a3",
  "gra",
  "aqu",
  "lep",
  "ap",
  "chi",
  "div",
  "divlep",
  "ztest",
  "escu",
  "quad",
  "cavallo",
  "ful",
  "trina",
  "para",
];
const pos = [
[-10, -90.5], 
[7, -90.5], 
[-18, 90], 
[25, -117.5], 
[21.1, -111.5], 
[25, -64.5], 
[22, -70.5],
[55, -90.5],
[96, -90.5],
[63, -39],
[62, 214],
[76, 185],
[57, 242],
[57, -65],
[16, -137],
[16, -133.5],
[14.5, -127.5],
[14, -125],
[16.5, -45],
[16, -48.5],
[14.5, -54.2],
[14, -57],
[12.5, -61.5],
[13, -120],
[18, -145],
[18, -37],
[18.5, -149],
[0, -140],
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
  Oggetto = hotSpotDiv.children[1]
  nuovoOggetto = hotSpotDiv.children[2];
  nuovoOggetto.style.display = 'none';
  const [pitch, yaw] = hotpos(id);
  console.log(yaw)
  viewer.setHfov(50);
  viewer.setYaw(yaw);
  viewer.setPitch(pitch);
  console.log(viewer.getHfov())
  Oggetto2.style.display = 'Block';
  Oggetto.style.display = 'Block';
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
      window.location.href = "../page/Visita3.html";
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
      window.location.href = "../page/Plat1.html";
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
function cap1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Capitello pseudo-corinzio decorato con la lira.';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Capitello pseudo-corinzio ligneo decorato con due cornucopie al posto delle volute e con una lira al centro. L'opera è stata realizzata dallo scultore e decoratore palermitano Benedetto Alfano tra il 1876 e il 1877, su disegni dell’architetto Giovan Battista Filippoo Basile. Nel teatro e nelle arti la lira, ha un forte significato simbolico, legato a concetti di armonia, creatività e ispirazione divina. Questo simbolo affonda le sue radici nell'antica Grecia, dove questo strumento musicale era associato ad Apollo, il dio della musica, della poesia e delle arti, nonché a Orfeo, un leggendario poeta e musico capace di incantare con il suono della lira persino la natura e gli dei. I principali significati simbolici della lira nel contesto teatrale sono: musica e armonia, ispirazione poetica, legame con il mito, equilibrio e bellezza. ";
  Oggetto2.style.left = "200px";
  Oggetto2.style.bottom = "-60px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('Cap1');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("cap1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("cap1");
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
      Oggetto.style.display = "none";
    }
  }
}
function cap2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Capitello pseudo-corinzio decorato con una maschera teatrale';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '85px';
  nuovoOggetto.style.top = '-23px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Capitello pseudo-corinzio ligneo decorato con due cornucopie al posto delle volute e con una maschera teatrale al centro. L'opera è stata realizzata dallo scultore e decoratore palermitano Benedetto Alfano tra il 1876 e il 1877, su disegni dell’architetto Giovan Battista Filippoo Basile. Le maschere teatrali, da sempre, sono state molto più di semplici accessori scenici. Esse, infatti, hanno svolto un ruolo fondamentale nella rappresentazione, arricchendo le performance di significati profondi e simbolici. Esse sono state utilizzate fin dall’antichità per rappresentare le emozioni dei personaggi nelle opere teatrali. Esistono due tipi di maschere teatrali: la maschera da commedia e la maschera da tragedia. La maschera da commedia ha un grande sorriso, mentre la maschera da tragedia ha la fronte aggrottata, come la maschera presente nel capitello dell’arco armonico del Teatro “Luigi Pirandello” di Agrigento.";
  Oggetto2.style.left = "200px";
  Oggetto2.style.bottom = "-60px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('Cap2');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("cap2");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("cap2");
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
      Oggetto.style.display = "none";
    }
  }
}
function cap3(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Capitello pseudo-corinzio decorato con un’aquila';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Capitello pseudo-corinzio decorato con un’aquila che tiene nel becco un ramoscello sormontata da un nido contre aquilotti. L’aquila è un simbolo di potenza, nobiltà e spiritualità. In ambito teatrale essa rappresenta l'ispirazione, la creatività e la capacità del teatro di elevare lo spirito umano, portandolo verso temi sublimi e profondi. Spesso, questo rapace veniva usato come emblema per rappresentare il teatro cosiddetto “alto”, l'arte drammatica più elevata e nobile. Nei suoi molteplici significati simbolici, l'aquila può anche essere collegata alla tragedia classica. La presenza di un nido con tre aquilotti potrebbe simboleggiare protezione, autorità e cura. Nota per essere un uccello forte e dominante, L’aquila, rappresenta una figura di potere ma anche di saggezza, che come un sovrano guida e protegge i suoi sudditi, in questo caso rappresentati dagli aquilotti che a loro volta rappresenterebbero l’innocenza e la vulnerabilità. Spesso questo simbolismo veniva utilizzato nelle decorazioni dei teatri per rappresentare la dinamica tra autorità e i suoi protetti, o per mettere in scena il tema della trasmissione di conoscenze e valori da una generazione all’altra. ";
  Oggetto2.style.left = "200px";
  Oggetto2.style.bottom = "-60px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('Cap4');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("cap3");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("cap3");
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
      Oggetto.style.display = "none";
    }
  }
}
function cap4(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Capitello pseudo-corinzio decorato con un cigno';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Capitello pseudo-corinzio, con due cornucopie al posto delle volute e un cigno con un seme sotto la zampa destra e una fascia nel becco, realizzato dallo scultore e decoratore palermitano Benedetto Alfano, tra il 1876 e il 1877, su disegni dell’architetto Giovan Battista Filippo Basile. In ambito teatrale, il cigno ha un significato simbolico ricco e stratificato e spesso è stato utilizzato nelle decorazioni pittoriche e scultoree del teatro nel XIX secolo. Esso riflette i temi di bellezza, grazia, trasformazione e tragedia. La figura del cigno simboleggia la perfezione estetica, ideale per rappresentare l'arte drammatica, musicale e coreutica, che aspirano a incantare e sublimare il pubblico. Nei miti classici, come quello di Leda e il Cigno o del cigno come incarnazione di Zeus, il cigno rappresenta il cambiamento e la metamorfosi, collegandosi al teatro come luogo di trasformazione, dove attori e storie cambiano continuamente forma per evocare emozioni e mondi immaginari. In molte tradizioni, il cigno è simbolo di purezza e spiritualità. Nel teatro, questo può essere letto come un richiamo alla sacralità dell'arte e alla sua capacità di elevare l'animo umano. Il concetto del \"canto del cigno\", legato alla leggenda secondo cui il cigno canta una melodia struggente prima di morire, evoca poi il pathos e il senso di inevitabilità della tragedia, elementi centrali nel teatro drammatico. Con lo sviluppo del balletto nel XIX secolo, soprattutto con opere come \"Il Lago dei Cigni\" di Čajkovskij (1877), il cigno divenne anche un simbolo iconico legato alla danza classica, rappresentando leggerezza e fluidità, caratteristiche fondamentali della danza stessa. Il seme sotto la zampa del cigno può simboleggiare la protezione del potenziale creativo dell’arte e degli artisti. La fascia potrebbe rappresentare, invece, la vstità e la varietà dei messaggi che il teatro è in grado di comunicare. Nel complesso, il cigno era una figura poliedrica che si prestava a rappresentare le emozioni e gli ideali più elevati del teatro e della cultura artistica del XIX secolo.";
  Oggetto2.style.left = "200px";
  Oggetto2.style.bottom = "-60px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('Cap3');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("cap4");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("cap4");
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
      Oggetto.style.display = "none";
    }
  }
}
function mid(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto a olio di noce che raffigura Mida';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto a olio di noce che raffigura Mida, celebre musicista vissuto nell’antica Akragas nel V secolo a.C. Molto probabilmente la sua formazione musicale di auleta avvenne durante la tirannia di Terone. Le fonti storiche e letterarie, infatti, attestano che tra il VI e il V sec. a.C. nella città di Akragas vi era una fervida attività musicale (Bellia 2003). Nel 496 a.C. vinse le celebri gare musicali delle Panatenee e nel 490 a.C. la 24ᵃ Pitiade. Le vittorie di Mida nelle due importanti gare musicali diede grande lustro alla città di Akragas. La fama di questo illustre musicista akragantino, probabilmente proveniente dalla Frigia, fu tramandata dal celebre poeta lirico Pindaro con la XII Ode Pitica.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('mid');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("mid");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("mid");
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
      Oggetto.style.display = "none";
    }
  }
}
function car(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto a olio di noce che raffigura Carcino';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto a olio di noce che raffigura Carcino, drammaturgo nato nell’antica Akragas e vissuto nel IV sec. a.C. tra Akragas e Siracusa. Era figlio del drammaturgo greco Senocle e nipote di Carcino il Vecchio, poeta tragico ateniese del V sec. Trascorse gran parte della sua vita alla corte di Dionisio II di Siracusa. Secondo le fonti, scrisse più di centocinquanta tragedie, sebbene si conoscono solo i titoli di sole sei opere: Alope, Achille, Tieste, Semele, Anfiarao, Medea, Edipo, Tereo e Oreste.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('car');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("car");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("car");
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
      Oggetto.style.display = "none";
    }
  }
}
function din(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto a olio di noce che raffigura Dinoloco';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto a olio di noce che raffigura Dinoloco, poeta e commediografo, nato e vissuto nell’antica città di Akragas nel V sec. a.C. Secondo alcuni, figlio, secondo altri discepolo di Epicarimo, maestro della commedia. Scrisse quattordici drammi in dialetto dorico, di cui sappiamo solo, da alcuni titoli, che alcuni di essi erano su argomenti mitologici.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('din');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("din");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("din");
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
      Oggetto.style.display = "none";
    }
  }
}
function met(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto a olio di noce che raffigura Metello';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto a olio di noce che raffigura Metello, musicista e filosofo vissuto nell’antica città di Akragas nel IV secolo a.C., ovvero nell’età di Dionigi, caratterizzata dall'influenza e dall'operato dei due tiranni di Siracusa: Dionisio I e Dionisio II. Insegnò musica in Sicilia e ad Atene e fu precettore e maestro di musica di Platone e di Empedocle. L’illustre artista akragantino è stato ricordato dal celebre scrittore e biografo greco Plutarco nei Moralia Sulla musica.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('mete');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("met");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("met");
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
      Oggetto.style.display = "none";
    }
  }
}
function a1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Allegoria della musica e della fama';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Allegoria della musica e della fama, rappresentata da un angelo musicante e un putto alato in volo. L’angelo, adulto, è raffigurato mentre suona una tromba araldica (o chiarina). Indossa una veste lunga e fluente, di colore celeste e dorato Le ali, ampie e maestose, sono spiegate e conferiscono all'angelo un aspetto potente e maestoso. A fianco all’angelo, un putto alato tiene in mano una corona di alloro, simbolo di vittoria e gloria. La tromba suonata dall'angelo potrebbe simboleggia contestualmente l’arte musicale e la fama dell’artista che si diffonde attraverso il suono. La corona di alloro rappresenta la ricompensa il musicista o per l'artista, che raggiunge l'apice del successo attraverso la sua arte. La scena è dinamica. L’angelo e il putto alato fluttuano nello spazio con grazia e le espressioni dei volti suggeriscono un senso di gioia e di trionfo.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('a1');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("a1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("a1");
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
      Oggetto.style.display = "none";
    }
  }
}
function a2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Allegoria della musica e della fama';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Allegoria della musica e della fama, rappresentata da un angelo e un putto alato musicante in volo. L’angelo, adulto, è raffigurato mentre tiene in mano una corona di alloro, simbolo di vittoria e gloria. Indossa una veste lunga e fluente, di colore blu e rosa. Le ali, ampie e maestose, sono spiegate e conferiscono all'angelo un aspetto potente e maestoso. A fianco all’angelo, un putto alato suona una tromba araldica (o chiarina). La tromba simboleggia contestualmente l’arte musicale e la fama dell’artista che si diffonde attraverso il suono. La corona di alloro rappresenta la ricompensa il musicista o per l'artista, che raggiunge l'apice del successo attraverso la sua arte. La scena è dinamica. L’angelo e il putto alato fluttuano nello spazio con grazia e le espressioni dei volti suggeriscono un senso di gioia e di trionfo.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('a2');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("a2");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("a2");
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
      Oggetto.style.display = "none";
    }
  }
}
function a3(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Allegoria della musica e della fama';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Allegoria della musica e della fama, rappresentata da un angelo musicante e un putto alato in volo. L’angelo, adulto, è raffigurato mentre suona una tromba araldica (o chiarina). Indossa una veste lunga e fluente, di colore blu e dorato Le ali, ampie e maestose, sono spiegate e conferiscono all'angelo un aspetto potente e maestoso. A fianco all’angelo, un putto alato tiene in mano una corona di alloro, simbolo di vittoria e gloria. La tromba suonata dall'angelo potrebbe simboleggia contestualmente l’arte musicale e la fama dell’artista che si diffonde attraverso il suono. La corona di alloro rappresenta la ricompensa il musicista o per l'artista, che raggiunge l'apice del successo attraverso la sua arte. La scena è dinamica. L’angelo e il putto alato fluttuano nello spazio con grazia e le espressioni dei volti suggeriscono un senso di gioia e di trionfo.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('a3');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("a3");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("a3");
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
      Oggetto.style.display = "none";
    }
  }
}
function gra(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale erano raffigurati un granchio e un piccolo pesce. Insieme all’aquila, il granchio è un simbolo distintivo dell'antica Akragas. Entrambi i simboli sono stati oggetto di studio e interpretazione per secoli. Questi due animali, così diversi tra loro, racchiudono un simbolismo profondo e complesso che riflette l'identità e i valori di questa importante città della Magna Grecia. La maggioranza degli studiosi ritiene che rappresentino il legame profondo della città con il suo territorio e i due differenti luoghi sui quali si sviluppava l’antico abitato greco. In particolare il granchio, abitante naturale delle coste, degli stagni e dei fiumi, rappresenterebbe la parte a valle e costiera; l’aquila, dominatrice dei cieli e dei territori, la parte in collina, dove vi era l’acropoli. Con il suo robusto esoscheletro e le sue pinze potenti, il granchio, era simbolo di forza, tenacia e capacità di adattamento. Queste caratteristiche rispecchiavano lo spirito degli abitanti di Akragas, che si erano affermati come una delle potenze economiche e politiche della Magna Grecia. Ciò è testimoniato anche dalla presenza di un grosso pesce sotto il granchio.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('gra');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("gra");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("gra");
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
      Oggetto.style.display = "none";
    }
  }
}
function aqu(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata la testa di un’aquila. Insieme al granchio, l’aquila è un simbolo distintivo dell'antica Akragas. Entrambi i simboli sono stati oggetto di studio e interpretazione per secoli. Questi due animali, così diversi tra loro, racchiudono un simbolismo profondo e complesso che riflette l'identità e i valori di questa importante città della Magna Grecia. La maggioranza degli studiosi ritiene che rappresentino il legame profondo della città con il suo territorio e i due differenti luoghi sui quali si sviluppava l’antico abitato greco. In particolare, il granchio, abitante naturale delle coste, degli stagni e dei fiumi, rappresenterebbe la parte a valle e costiera; l’aquila, dominatrice dei cieli e dei territori, la parte in collina, dove vi era l’acropoli. Con il suo robusto esoscheletro e le sue pinze potenti, il granchio, era simbolo di forza, tenacia e capacità di adattamento. Queste caratteristiche rispecchiavano lo spirito degli abitanti di Akragas, che si erano affermati come una delle potenze economiche e politiche della Magna Grecia. Ciò è testimoniato anche dalla presenza di un grosso pesce sotto il granchio.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('aqu');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("aqu");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("aqu");
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
      Oggetto.style.display = "none";
    }
  }
}
function lep(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata un’aquila che cattura una lepre. Questa scena possiede un forte simbolismo ed è un'allegoria ricca di significati che riflette l'identità e gli ideali della città di Akragas. Questa scena simboleggia la forza, il potere, la vittoria, ma anche la lotta per la sopravvivenza e il legame con il mondo divino.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('lep');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("lep");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("lep");
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
      Oggetto.style.display = "none";
    }
  }
}
function ap(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata un’aquila stante con ali aperte.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ap');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("ap");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ap");
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
      Oggetto.style.display = "none";
    }
  }
}
function chi(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata un’aquila stante con ali chiuse.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('chi');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("chi");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("chi");
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
      Oggetto.style.display = "none";
    }
  }
}
function div(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata un’aquila che divora un serpente. Questa scena possiede un forte simbolismo ed è ricca di significati. L’immagine di un’aquila che divora un serpente racchiude in sé i valori fondamentali della cultura greca e le aspirazioni della città di Akragas. Questa scena rappresenta la potenza, la protezione divina, la vittoria e la capacità di superare le avversità. L'Aquila che divora un serpente simboleggia il trionfo del bene sul male, della luce sulle tenebre, della civiltà sulla barbarie; il potere e il dominio di Akragas sulle forze ostili, sia interne che esterne; in quanto simbolo di Zeus, protegge Akragas dalle minacce esterne e garantisce la vittoria nelle guerre.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('div');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("div");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("div");
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
      Oggetto.style.display = "none";
    }
  }
}
function divlep(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata due aquile che divorano una lepre. L'immagine delle due aquile che divorano una lepre rifletteva i valori e le aspirazioni della città di Akragas. Questa scena simboleggiava la potenza, la protezione divina e il desiderio di dominio, ma poteva anche essere interpretata in chiave più ampia, come una rappresentazione del ciclo della vita e della morte. L'immagine delle due aquile che divorano una lepre può essere interpretata in diversi modi: la forza e il dominio di Akragas sulle altre città-stato; protezione divina e di Zeus in particolare; il ciclo della vita e della morte, con le aquile che simboleggiavano la forza della natura e la lepre la fragilità dell'esistenza; riferimento ad Eschilo.  Alcuni studiosi, infatti, hanno ipotizzato che questa raffigurazione possa essere un riferimento ad un passo del drammaturgo Eschilo, che parla di un presagio visto da un comandante prima di una battaglia, in cui due aquile combattevano per una lepre.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('divlep');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("divlep");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("divlep");
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
      Oggetto.style.display = "none";
    }
  }
}
function ztest(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata la testa la laureata di Zeus. La testa laureata di Zeus, una raffigurazione ricorrente sulle monete dell'antica Akragas, rivestiva un significato profondo e poliedrico. Essa rappresentava: potere divino e, di conseguenza, il potere di Akragas; sicurezza della protezione divina, garanzia di prosperità; legittimità conferita da Zeus al potere politico e sociale di Akragas, che ne rafforzava l'unità e l'identità della città-stato; saggezza e onore dei governanti; vittorie e trionfi, poiché l'alloro era associato alle vittorie e ai trionfi. Dunque, la testa laureata di Zeus era un simbolo complesso e potente, che racchiudeva in sé i valori fondamentali della cultura greca e le aspirazioni della città di Akragas.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ztest');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("ztest");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ztest");
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
      Oggetto.style.display = "none";
    }
  }
}
function trina(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata la Triskeles (Trinacria).  La Triskeles (Trinacria). La “triskeles”, [s. f. dal gr. τρισκελής, agg., propr. «con tre gambe», comp. di τρι- «tre-» e σκέλος «gamba»] presente su molte monete di Akragas, è un simbolo antico e complesso che racchiude in sé molteplici significati. Al termine greco \"triskéles\" che si ricollega al significato geografico: \"treis\" (tre) e \"àkra\"(promontori), da cui deriva il termine latino \"trìquetra\" (a tre vertici). Essa è formata da tre gambe che si intrecciano in un punto centrale. La sua forma ricorda vagamente una ruota o un mulino a vento e la sua origine è antichissima, poiché risale a culture preistoriche. Al centro si trova spesso una testa femminile o un gorgonèion (Gorgone, o Medusa), personaggio mitologico. In Sicilia, la triscele ha origini figurative remote Essa venne infatti ritrovata su della ceramica di produzione gelese, con caratteristiche prettamente locali, risalente al VII-VI secolo a.C. Una di queste produzioni di fabbrica “geloa” è rappresentata da un Dinos (anforetta priva di anse e con il fondo concavo,   prevalentemente utilizzata  per mescolare l'acqua al vino), scorci del VII a.C., rinvenuto nell'attuale ………..";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('trina');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("trina");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("trina");
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
      Oggetto.style.display = "none";
    }
  }
}
function escu(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurato un serpente attorcigliato a una verga. Il serpente attorcigliato a una verga è un simbolo antico e complesso, presente in diverse culture, ma con significati particolarmente rilevanti nell'antica Grecia. Nel mondo greco, questo simbolo era associato principalmente a due figure divine: Ermes, messaggero degli dei e dio del commercio, e Asclepio, dio della medicina. Ancor oggi, il bastone di Asclepio è utilizzato come simbolo universale della medicina. I significati più comuni associati al serpente attorcigliato a una verga nell'antica Grecia erano: guarigione e medicina, saggezza e conoscenza, rinascita e trasformazione, energia vitale, equilibrio e armonia.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('escu');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("escu");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("escu");
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
      Oggetto.style.display = "none";
    }
  }
}
function quad(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata una quadriga in corsa. Nella simbologia della mitologia greca, la quadriga la quadriga rappresenta, potere e maestosità, movimento e velocità, divinità e mitologia, trionfo e vittoria. La quadriga, infatti, era il simbolo per eccellenza dell'agonismo, della competizione, della ricerca della gloria. Le gare di quadrighe erano gare di velocità ed eventi di grande importanza, che attiravano spettatori da tutta la Grecia. In tale ottica, la raffigurazione della quadriga nelle decorazioni pittoriche dei palchi del primo ordine, oltre ad essere un simbolo della città allevatrice di cavalli, presenta un chiaro riferimento al trionfo dell’atleta Esseneto nella gara dello stadion alle Olimpiadi di Elea del 412 a.C., raffigurata nel sipario ottocentesco realizzato dal pittore messinese Luigi Queriau nel 1879 e nel nuovo sipario donato nel 2006 al Teatro “Luigi Pirandello” dal regista e produttore di livello nazionale, di origine agrigentina, Francesco Bellomo.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('quad');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("quad");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("quad");
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
      Oggetto.style.display = "none";
    }
  }
}
function cavallo(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurato un cavallo libero. Il cavallo libero, un'immagine ricorrente sulle monete dell'antica Grecia, portava con sé una moltitudine di significati, profondamente radicati nella cultura e nella mitologia greca. Ecco alcuni dei simboli più importanti associati a questa figura: libertà e indipendenza, forza e potenza, nobiltà e aristocrazia, ricchezza e la prosperità, solarità e luce, vitalità e movimento.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('cavallo');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("cavallo");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("cavallo");
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
      Oggetto.style.display = "none";
    }
  }
}
function ful(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una fascia dorata e da un perfilo di colore rosso. Il dipinto riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurato un fulmine alato con la scritta ΑΚΡΑΓΑΝΤΙΝΩΝ, uno dei simboli presenti sulle monete dell’antica Akragas. Il fulmine alato con la scritta ΑΚΡΑΓΑΝΤΙΝΩΝ sulle monete di Akragas (l'odierna Agrigento) era un simbolo carico di significati, complesso e multiforme, che racchiudeva in sé i valori fondamentali della cultura greca e le aspirazioni della città di Akragas. Il fulmine rappresentava: il potere divino, in quanto era associato a Zeus, re degli dei nell'Olimpo; la forza e maestosità poiché simboleggiava la forza inarrestabile e la maestosità della natura, e per estensione, la potenza militare e politica di Akragas; protezione divina, in quanto arma di Zeus utilizzata per difendere i suoi fedeli. L'ala, invece, conferiva al fulmine un senso di velocità e potenza, sottolineando la rapidità con cui Zeus poteva intervenire e punire i suoi nemici. Essa poteva anche essere interpretata come un simbolo di ascesa e conquista, rappresentando l'ambizione di Akragas di espandersi e dominare le altre città-stato. La scritta ΑΚΡΑΓΑΝΤΙΝΩΝ, che significa \"degli Akragantini\", sottolineava l'appartenenza della moneta e di chi la possedeva alla città di Akragas.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ful');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("ful");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ful");
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
      Oggetto.style.display = "none";
    }
  }
}
function para(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Decorazione pittorica dei parapetti del primo ordine di palchi';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '160px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Decorazione pittorica dei parapetti del primo ordine di palchi, dipinti ad olio di noce su legno realizzati dagli artisti milanesi Luigi Sacco e Antonio Tavella, nel 1879. Le decorazioni pittoriche sono ispirate alle grottesche cinquecentesche alla maniera raffaellesca. Al centro, un putto alato fitomorfo sorregge una collana di perle di colore rosa con un desco ottagonale color oro di forma recante il numero del palco. Alla destra e alla sinistra del putto sono raffigurate, su fondo giallo tenue, eleganti decorazioni con fiori bianchi e rosa e steli spiraliformi di colore varie tonalità di verde intrecciati da fettucce di colore rosa a sviluppo serpentino.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('para');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    ind = hotSpotDiv;
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        cent("para");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("para");
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
      Oggetto.style.display = "none";
    }
  }
}
function sip(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Sipario';
  nuovoOggetto.classList.add('info'); 
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.text = "Ciao";
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        localStorage.setItem('pa', '../page/Plat.html');
        window.location.href = "../page/Sipario.html";
      }
      selectedButton = hotSpotDiv;
      Tog();
      nuovoOggetto.style.display = "block"; 
    }else {
      localStorage.setItem('pa', '../page/Plat.html');
      window.location.href = "../page/Sipario.html"; // Reindirizza alla pagina desiderata
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
