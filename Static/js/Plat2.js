const isMobile = navigator.userAgentData.mobile;
var selectedButton = null;
var prevbut = null;
var img = false;
var tir = 0;
var ind;
var us = true;
viewer = pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "https://raw.githubusercontent.com/FlavioCaputo/Teatro-Pirandello/refs/heads/main/Static/Panorama/Pla3.jpeg",
  "autoLoad": true,
  "showControls": false,
  "yaw": 90, 
  "hotSpots": [
    {
      "pitch": -20,
      "yaw": 95,
      "cssClass": "custom-hotspot1",
      "createTooltipFunc": Freccia1,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": 10,
      "yaw": -90,
      "type": "info",
      "createTooltipFunc": sip,
  },
  {
    "pitch": 42,
    "yaw": -166,
    "type": "info",
    "createTooltipFunc": cap2,
  },
  {
    "pitch": 38,
    "yaw": -195,
    "type": "info",
    "createTooltipFunc": cap1,
  },
  {
    "pitch": 39,
    "yaw": 24,
    "type": "info",
    "createTooltipFunc": cap3,
  },
  {
    "pitch": 42.5,
    "yaw": -5,
    "type": "info",
    "createTooltipFunc": cap4,
  },
  {
    "pitch": 60,
    "yaw": 96,
    "type": "info",
    "createTooltipFunc": mid,
  },
  {
    "pitch": 32,
    "yaw": 96,
    "type": "info",
    "createTooltipFunc": car,
  },
  {
    "pitch": 40,
    "yaw": 70,
    "type": "info",
    "createTooltipFunc": din,
  },
  {
    "pitch": 40,
    "yaw": 121,
    "type": "info",
    "createTooltipFunc": met,
  },
  {
    "pitch": 35,
    "yaw": 107,
    "type": "info",
    "createTooltipFunc": a1,
  },
  {
    "pitch": 53,
    "yaw": 115,
    "type": "info",
    "createTooltipFunc": a2,
  },
  {
    "pitch": 53,
    "yaw": 75,
    "type": "info",
    "createTooltipFunc": a3,
  },
]
})

const hotspotIds = [
  "fr1",
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
];
const pos = [
[-20, 95], 
[10, -90], 
[38, -195], 
[42, -166], 
[39, 24], 
[42.5, -5],
[60, 96],
[32, 96],
[40, 70],
[40, 121],
[35, 107],
[53, 115],
[53, 75],
]

document.getElementById('buttonbordered').addEventListener('click', function(e) {
  window.location.href = "../page/Mappa.html";
});
function hotpos(id) {
  let ind
  ind = hotspotIds.indexOf(id);
  console.log(ind)
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
  console.log(pitch)
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
  Oggetto2.style.left = "400px";
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
  Oggetto2.style.left = "400px";
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
  Oggetto2.textContent = "Capitello pseudo-corinzio in legno con dorature, decorato con due cornucopie al posto delle volute e al centro, sopra le foglie di acanto, con una tortora che porta un ramoscello nel becco; nella soprastante cornice curvilinea del capitello è presente un nido contre pulcini con il becco aperto. Fin dall'antichità, la tortora è stata associata a diversi significati simbolici, ma nel contesto della seconda metà del XIX secolo, e in particolare nell'ambito teatrale, assume connotazioni specifiche. È simbolo di amore e fedeltà, poiché da sempre questo animale rappresenta l’amore coniugale e la fedeltà, grazie al suo legame monogamico e al suo canto melodioso; è simbolo di pace, riconciliazione e speranza, soprattutto se raffigurata con un ramoscello d'ulivo nel becco, poiché nella Genesi (8, 11) è una colomba a portare a Noè il rametto d'ulivo, mostrandogli così la fine del Diluvio universale e l'inizio di una nuova era di pace tra Dio e gli uomini; è simbolo di vita e rinascita, in particolare se rappresentata con un nido con tre pulcini. La contrapposizione nei due capitelli dei pilastri dell’arco armonico del Teatro “Luigi Pirandello”, adottata dall’architetto Giovan battista Filippo Basile, tra la tortora, simbolo di domesticità e affetti familiari, e il cigno, legato alla divinità e all'ispirazione artistica, rappresenta la dualità dell'esperienza umana e dell'arte stessa, che unisce l'intimo e l’universale. La tortora, dunque, rappresenta un messaggio di amore, pace, speranza e rinascita, valori universali che il teatro trasmette ai cuori degli spettatori.";
  Oggetto2.style.left = "400px";
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
  Oggetto2.style.left = "400px";
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
  nuovoOggetto.textContent = 'Dipinto a tempera che raffigura Mida';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto a tempera che raffigura Mida, celebre musicista vissuto nell’antica Akragas nel V secolo a.C. Molto probabilmente la sua formazione musicale di auleta avvenne durante la tirannia di Terone. Le fonti storiche e letterarie, infatti, attestano che tra il VI e il V sec. a.C. nella città di Akragas vi era una fervida attività musicale (Bellia 2003). Nel 496 a.C. vinse le celebri gare musicali delle Panatenee e nel 490 a.C. la 24ᵃ Pitiade. Le vittorie di Mida nelle due importanti gare musicali diede grande lustro alla città di Akragas. La fama di questo illustre musicista akragantino, probabilmente proveniente dalla Frigia, fu tramandata dal celebre poeta lirico Pindaro con la XII Ode Pitica.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('mid');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-2.7%";
  x.style.top = "-6.7%";
  x.style.fontSize = "18px";
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  Oggetto.appendChild(x);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    if (us) {
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
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  x.onclick = function() {
    console.log("primo");
    Oggetto.style.display = "none";
    Oggetto2.style.display = "none";
    viewer.setHfov(100);
    setTimeout(() => {
      us = true;
    }, 1000); // 2000 ms = 2 secondi  
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.style.display = "none"; 
  }
}
function car(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto a tempera che raffigura Carcino';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto a tempera che raffigura Carcino, drammaturgo nato nell’antica Akragas e vissuto nel IV sec. a.C. tra Akragas e Siracusa. Era figlio del drammaturgo greco Senocle e nipote di Carcino il Vecchio, poeta tragico ateniese del V sec. Trascorse gran parte della sua vita alla corte di Dionisio II di Siracusa. Secondo le fonti, scrisse più di centocinquanta tragedie, sebbene si conoscono solo i titoli di sole sei opere: Alope, Achille, Tieste, Semele, Anfiarao, Medea, Edipo, Tereo e Oreste.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('car');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-2.7%";
  x.style.top = "-6.7%";
  x.style.fontSize = "18px";
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  Oggetto.appendChild(x);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    if (us) {
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
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  x.onclick = function() {
    console.log("primo");
    Oggetto.style.display = "none";
    Oggetto2.style.display = "none";
    viewer.setHfov(100);
    setTimeout(() => {
      us = true;
    }, 1000); // 2000 ms = 2 secondi  
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.style.display = "none"; 
  }
}
function din(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto a tempera che raffigura Dinoloco';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto a tempera che raffigura Dinoloco, poeta e commediografo, nato e vissuto nell’antica città di Akragas nel V sec. a.C. Secondo alcuni, figlio, secondo altri discepolo di Epicarimo, maestro della commedia. Scrisse quattordici drammi in dialetto dorico, di cui sappiamo solo, da alcuni titoli, che alcuni di essi erano su argomenti mitologici.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('din');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-2.7%";
  x.style.top = "-6.7%";
  x.style.fontSize = "18px";
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  Oggetto.appendChild(x);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    if (us) {
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
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  x.onclick = function() {
    console.log("primo");
    Oggetto.style.display = "none";
    Oggetto2.style.display = "none";
    viewer.setHfov(100);
    setTimeout(() => {
      us = true;
    }, 1000); // 2000 ms = 2 secondi  
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.style.display = "none"; 
  }
}
function met(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto a tempera che raffigura Metello';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto a tempera che raffigura Metello, musicista e filosofo vissuto nell’antica città di Akragas nel IV secolo a.C., ovvero nell’età di Dionigi, caratterizzata dall'influenza e dall'operato dei due tiranni di Siracusa: Dionisio I e Dionisio II. Insegnò musica in Sicilia e ad Atene e fu precettore e maestro di musica di Platone e di Empedocle. L’illustre artista akragantino è stato ricordato dal celebre scrittore e biografo greco Plutarco nei Moralia Sulla musica.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('mete');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-2.7%";
  x.style.top = "-6.7%";
  x.style.fontSize = "18px";
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
    nuovoOggetto.style.fontSize = '15px';
  }
  Oggetto.appendChild(x);
  hotSpotDiv.appendChild(Oggetto2);
  hotSpotDiv.appendChild(Oggetto);
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.onclick = function() {
    if (us) {
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
    }
  };
  hotSpotDiv.onmouseenter = function() {
    if (us) {
      nuovoOggetto.style.display = "Block";
    }
  }
  x.onclick = function() {
    console.log("primo");
    Oggetto.style.display = "none";
    Oggetto2.style.display = "none";
    viewer.setHfov(100);
    setTimeout(() => {
      us = true;
    }, 1000); // 2000 ms = 2 secondi  
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.style.display = "none"; 
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


function Freccia1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot');
  hotSpotDiv.onclick = function() {
      localStorage.setItem('inc', false);
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
        localStorage.setItem('pa', '../page/Plat2.html');
        window.location.href = "../page/Sipario.html";
      }
      selectedButton = hotSpotDiv;
      Tog();
      nuovoOggetto.style.display = "block"; 
    }else {
      localStorage.setItem('pa', '../page/Plat2.html');
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

