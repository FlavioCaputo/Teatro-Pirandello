pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "https://raw.githubusercontent.com/FlavioCaputo/Teatro-Pirandello/refs/heads/main/Static/Panorama/Inizio.jpg",
  "autoLoad": true,
  "showControls": false,
  "yaw": 90, 
  "hotSpots": [
    {
      "pitch": -8,
      "yaw": 90,
      "cssClass": "custom-hotspot2",
      "text": "Stanza Laterale",
      "createTooltipFunc": Freccia1,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": 50,
      "yaw": 90,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": Fac,
    },
    {
      "pitch": 2.5,
      "yaw": 12,
      "type": "info",
      "text": "abito",
      "createTooltipFunc": Lapann,
    },
    {
      "pitch": 2.5,
      "yaw": 35,
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
      window.location.href = "../page/Visita.html";
    };
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
    testo.style.bottom = '-45px';
    testo.style.fontSize = '6.5px';
    nuovoOggetto.style.fontSize = '11px';
  } else {
    testo.style.bottom = '-55px';
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