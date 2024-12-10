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
      "pitch": -18  ,
      "yaw": 90,
      "cssClass": "custom-hotspot2",
      "text": "Stanza Laterale",
      "createTooltipFunc": Freccia1,
    },
    {
      "pitch": 0,
      "yaw": -90,
      "type": "info",
      "createTooltipFunc": cap1,
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
  var testo = document.createElement('div');
  testo.textContent = "Nel teatro e nelle arti la lira, ha un forte significato simbolico, legato a concetti di armonia, creatività e ispirazione divina. Questo simbolo affonda le sue radici nell'antica Grecia, dove questo strumento musicale era associato ad Apollo, il dio della musica, della poesia e delle arti, nonché a Orfeo, un leggendario poeta e musico capace di incantare con il suono della lira persino la natura e gli dei. I principali significati simbolici della lira nel contesto teatrale sono: musica e armonia, ispirazione poetica, legame con il mito, equilibrio e bellezza. ";
  testo.classList.add('sc');
  if (isMobile) {
    nuovoOggetto.style.fontSize = '11px';
  } else {
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