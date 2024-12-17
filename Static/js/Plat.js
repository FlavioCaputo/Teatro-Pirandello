dir = localStorage.getItem('inc');
console.log(dir);
if (dir === "false") {
  inc = 90;
}else {
  inc = -90;
}
pannellum.viewer('panorama', {
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
      "createTooltipFunc": cap4,
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
  Oggetto2.textContent = "Nel teatro e nelle arti la lira, ha un forte significato simbolico, legato a concetti di armonia, creatività e ispirazione divina. Questo simbolo affonda le sue radici nell'antica Grecia, dove questo strumento musicale era associato ad Apollo, il dio della musica, della poesia e delle arti, nonché a Orfeo, un leggendario poeta e musico capace di incantare con il suono della lira persino la natura e gli dei. I principali significati simbolici della lira nel contesto teatrale sono: musica e armonia, ispirazione poetica, legame con il mito, equilibrio e bellezza. ";
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
      Oggetto.style.display = "Block";
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
  Oggetto2.textContent = "Le maschere teatrali, da sempre, sono state molto più di semplici accessori scenici. Esse, infatti, hanno svolto un ruolo fondamentale nella rappresentazione, arricchendo le performance di significati profondi e simbolici. Esse sono state utilizzate fin dall’antichità per rappresentare le emozioni dei personaggi nelle opere teatrali. Esistono due tipi di maschere teatrali: la maschera da commedia e la maschera da tragedia. La maschera da commedia ha un grande sorriso, mentre la maschera da tragedia ha la fronte aggrottata, come la maschera presente nel capitello dell’arco armonico del Teatro “Luigi Pirandello” di Agrigento.";
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
      Oggetto.style.display = "Block";
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
      Oggetto.style.display = "none";
    }
  }
}
function cap4(hotSpotDiv, args) {
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
      Oggetto.style.display = "Block";
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
