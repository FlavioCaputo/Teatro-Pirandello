pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "https://raw.githubusercontent.com/FlavioCaputo/Teatro-Pirandello/refs/heads/main/Static/Panorama/Inizio.jpeg",
  "autoLoad": true,
  "showControls": false,
  "yaw": 90, 
  "hotSpots": [
    {
      "pitch": -4,
      "yaw": 93,
      "cssClass": "custom-hotspot2",
      "text": "Stanza Laterale",
      "createTooltipFunc": Freccia1,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": 50,
      "yaw": 92,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": Fac,
    },
    {
      "pitch": 55.6,
      "yaw": 37.5,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": medmaf,
    },
    {
      "pitch": 63.8,
      "yaw": 57.7,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": medmon,
    },
    {
      "pitch": 67,
      "yaw": 72.5,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": medalf,
    },
    {
      "pitch": 66.5,
      "yaw": 113.7,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": medsil,
    },
    {
      "pitch": 63.7,
      "yaw": 128,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": medmet,
    },
    {
      "pitch": 55.3,
      "yaw": 146.8,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": medgol,
    },
    {
      "pitch": 2.5,
      "yaw": 14.5,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": Lapann,
    },
    {
      "pitch": 2.5,
      "yaw": 31.5,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": Lapu,
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
    localStorage.setItem('inc', true);
      window.location.href = "../page/Visita.html";
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
function Fac(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Facciata, primo ordine alla sommità dell’arco centrale';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '84px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('Stemma'); 
  var testo = document.createElement('p');
  testo.textContent = "Stemma della città di Agrigento con i tre Telamoni che sorreggono la città turrita rappresentata da tre torri.";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-46px';
    testo.style.fontSize = '6.5px';
    nuovoOggetto.style.fontSize = '11px';
  } else {
    testo.style.bottom = '-57px';
    testo.style.fontSize = '14px';
    nuovoOggetto.style.fontSize = '15px';
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
function Lapann(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Lato occidentale del quadriportico.';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '16px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('Lapan'); 
  var testo = document.createElement('p');
  testo.textContent = "Lapide che ricorda l’intitolazione del teatro Comunale di Agrigento all’illustre concittadino, Premio Nobel per la Letteratura, Luigi Pirandello, in data 10 dicembre 1956.";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-44px';
    testo.style.fontSize = '8px';
    nuovoOggetto.style.fontSize = '13px';
  } else {
    testo.style.bottom = '-68px';
    testo.style.fontSize = '12.5px';
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
function Lapu(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Lato occidentale del quadriportico guardando l’ingresso.';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '14px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('Lapuig'); 
  var testo = document.createElement('p');
  testo.textContent = "Lapide realizzata nel 1986 in occasione del cinquantesimo anniversario della morte di Luigi Pirandello, nella quale si auspica che il teatro intitolato al celebre drammaturgo agrigentino, “restituito ai cittadini dopo anni di attese e restauri per arricchire la città nel solco della continuità e del ricongiungimento culturale di Girgenti ad Agrigento, con l’auspicio di fasti futuri”.";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-44px';
    testo.style.fontSize = '8px';
    nuovoOggetto.style.fontSize = '13px';
  } else {
    testo.style.bottom = '-120px';
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
function medmaf(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Medaglione con il busto in alto rilievo  di Andrea Maffei';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '14px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('medMAf'); 
  var testo = document.createElement('p');
  testo.textContent = "Medaglione con il busto di Andrea Maffei (Molina di Ledro, Trento, 19 aprile 1798 – Milano, 27 novembre 1885), poeta, librettista e traduttore italiano del XIX secolo.";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-44px';
    testo.style.fontSize = '8px';
    nuovoOggetto.style.fontSize = '13px';
  } else {
    testo.style.bottom = '-72px';
    testo.style.fontSize = '13px';
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
function medmon(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Medaglione con il busto in alto rilievo di Vittorio Monti';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '14px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('medMont'); 
  var testo = document.createElement('p');
  testo.textContent = "Medaglione in calcarenite con il busto del celebre compositore Vittorio Monti (Napoli, 6 gennaio 1868 - 20 giugno 1922), uno dei maggiori compositori, violinisti e direttori d'orchestra italiano a cavallo tra il XIX e il XX secolo. ";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-44px';
    testo.style.fontSize = '8px';
    nuovoOggetto.style.fontSize = '13px';
  } else {
    testo.style.bottom = '-89px';
    testo.style.fontSize = '13px';
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
function medalf(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Medaglione con il busto in alto rilievo di Vittorio Alfieri';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '14px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('medalf'); 
  var testo = document.createElement('p');
  testo.textContent = "Medaglione in calcarenite con il busto del celebre Vittorio Alfieri (Asti, 16 gennaio 1749 – Firenze l'8 ottobre 1803), drammaturgo, poeta e scrittore italiano del XVIII secolo.";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-44px';
    testo.style.fontSize = '8px';
    nuovoOggetto.style.fontSize = '13px';
  } else {
    testo.style.bottom = '-72px';
    testo.style.fontSize = '13px';
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
function medsil(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Medaglione con il busto in alto rilievo di Silvio Pellico';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '14px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('medsil'); 
  var testo = document.createElement('p');
  testo.textContent = "Medaglione in calcarenite con il busto di Silvio Pellico (Saluzzo, 24 giugno 1789 – Torino, 31 gennaio 1854), celebre scrittore, poeta e patriota italiano del XIX secolo.";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-44px';
    testo.style.fontSize = '8px';
    nuovoOggetto.style.fontSize = '13px';
  } else {
    testo.style.bottom = '-72px';
    testo.style.fontSize = '13px';
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
function medmet(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Medaglione con il busto in alto rilievo di Pietro Metastasio';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '14px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('medmet'); 
  var testo = document.createElement('p');
  testo.textContent = "Medaglione in calcarenite con il busto di Pietro Metastasio, Pietro Trapassi, meglio conosciuto come Metastasio (Roma, 3 gennaio 1698 – Vienna, 12 aprile 1782), celebre poeta, librettista, drammaturgo del XVIII secolo, considerato il riformatore del melodramma italiano.";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-44px';
    testo.style.fontSize = '8px';
    nuovoOggetto.style.fontSize = '13px';
  } else {
    testo.style.bottom = '-110px';
    testo.style.fontSize = '13px';
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
function medgol(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Medaglione con il busto in alto rilievo di Carlo Goldoni';
  nuovoOggetto.classList.add('info');  
  nuovoOggetto.style.fontSize = '14px';
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('medgol'); 
  var testo = document.createElement('p');
  testo.textContent = "Medaglione in calcarenite con il busto di Carlo Goldoni (Venezia 1707 - Parigi 1793), considerato uno dei padri della commedia moderna. ";
  testo.classList.add('text');
  if (isMobile) {
    testo.style.bottom = '-44px';
    testo.style.fontSize = '8px';
    nuovoOggetto.style.fontSize = '13px';
  } else {
    testo.style.bottom = '-56px';
    testo.style.fontSize = '13px';
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