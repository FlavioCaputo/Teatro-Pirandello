console.log(window.innerHeight);
var mobov = document.getElementById('co');
document.body.style.overflow = "hidden";
mobov.style.display = 'block';
const isMobile = navigator.userAgentData.mobile;
var prevbut = null;
var img = false;
var tir = 0;
var selectedButton = null; 
var but = document.getElementById('si');
var ch = document.getElementById('ch');
if (localStorage.getItem('vis') === "true") {
  ch.checked = true;
}
but.addEventListener('change', function() {
  if(ch.checked) {
      localStorage.setItem('vis', "true");
  }else {
      localStorage.setItem('vis', "false");
  }
});
if (window.innerWidth > window.innerHeight) {
  console.log('mag');
  mobov.style.display = 'none';  // Nascondi l'elemento 'mobov'
} 
pannellum.viewer('panorama', {
  "type": "equirectangular",
  "panorama": "https://flaviocaputo.github.io/Teatro-Pirandello/Static/Panorama/untitled.jpeg",
  "haov": 180,
  "autoLoad": true,
  "showControls": false,
  "hfov": 30, // Campo visivo ridotto per simulare uno zoom maggiore
  "minHfov": 78, // Impedisce di ridurre lo zoom al di sotto di questo valore
  "maxHfov": 78, // Permette di "allargare" lo zoom se necessario
  "disableKeyboardCtrl": true, // Disabilita il controllo da tastiera
  "disableMouseCtrl": true, // Disabilita il controllo da mouse
  "disableTouchCtrl": true, // Disabilita il controllo da touch
  "draggable": false, // Disabilita il drag (trascinamento) con mouse e touch
  "yaw": 0, // Imposta l'angolo orizzontale fisso
  "pitch": 0, // Imposta l'angolo verticale fisso
  "hotSpots": [
    {
      "pitch": -0.2,
      "yaw": -30.7,
      "cssClass": "custom-hotspot2",
      "text": "Stanza Laterale",
      "createTooltipFunc": Foyer,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": -6.2,
      "yaw": -30,
      "cssClass": "custom-hotspot3",
      "text": "Stanza Laterale",
      "createTooltipFunc": Foyerlat,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": -0.2,
      "yaw": -30.7,
      "cssClass": "custom-hotspot4",
      "text": "Stanza Laterale",
      "createTooltipFunc": Foyerdav,
      "createTooltipArgs": "Custom Hotspot"
    },
    {
      "pitch": -0.2,
      "yaw": 6,
      "cssClass": "custccont",
      "createTooltipFunc": Platea,
      "createTooltipArgs": ".custom-hotspot"
    },
    {
      "pitch": -0.5,
      "yaw": -19,
      "type": "info",
      "text": "Metastasio",
      "createTooltipFunc": Inizio,
    },
  ]
});

document.onclick = function() {
  tir++;
  if (isMobile) {
    if (selectedButton == prevbut && tir == 2) {
      Array.from(selectedButton.children).forEach((child, index) => {
        child.style.display = "none";
    });
    tir = 0;
    selectedButton = null;
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
function prov() {
  console.log('cambio');
  if (window.innerWidth < window.innerHeight) {
    console.log('mag');
    mobov.style.display = 'none';  // Nascondi l'elemento 'mobov'
  }else {
    mobov.style.display = 'block';
  }
}
window.addEventListener('orientationchange', prov);
window.addEventListener('load', function() {
  if (window.innerWidth > window.innerHeight) {
    mobov.style.display = 'none'; 
  }else {
    mobov.style.display = 'block'; 
  }
});
function Foyer(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  hotSpotDiv.textContent = "Foyer";
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
          localStorage.setItem('inc', true);
          window.location.href = "Visita.html";
      }
      selectedButton = hotSpotDiv;
    }else {
      localStorage.setItem('inc', true);
      window.location.href = "Visita.html";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    hotSpotDiv.classList.add('fade-in');
  }
  hotSpotDiv.onmouseleave = function() {
    hotSpotDiv.classList.remove('fade-in');
  }
}
function Foyerlat(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  hotSpotDiv.textContent = "Stanza Laterale";
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
          localStorage.setItem('inc', true);
          window.location.href = "Visita2.html";
      }
      selectedButton = hotSpotDiv;
    }else {
      localStorage.setItem('inc', true);  
      window.location.href = "Visita2.html";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    hotSpotDiv.classList.add('fade-in');
  }
  hotSpotDiv.onmouseleave = function() {
    hotSpotDiv.classList.remove('fade-in');
  }
}
function Foyerdav(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  hotSpotDiv.textContent = "Foyer Davanti";
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        localStorage.setItem('inc', true);
        window.location.href = "Visita3.html";
      }
      selectedButton = hotSpotDiv;
    }else {
      localStorage.setItem('inc', true);
      window.location.href = "Visita3.html";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    hotSpotDiv.classList.add('fade-in');
  }
  hotSpotDiv.onmouseleave = function() {
    hotSpotDiv.classList.remove('fade-in');
  }
}
function Inizio(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Inizia tour';
  nuovoOggetto.classList.add('info'); 
  hotSpotDiv.appendChild(nuovoOggetto);

  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
        window.location.href = "ent.html";
      }
      selectedButton = hotSpotDiv;
      Tog();
      nuovoOggetto.style.display = "block"; 
    }else {
      window.location.href = "ent.html";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.style.display = "Block";
  }
  hotSpotDiv.onmouseleave = function() {
    if (isMobile) {
    }else {
      nuovoOggetto.style.display = "none"; 
    }
  }
}
function Platea(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.classList.add('custom-hotspot5');
  var sec = document.createElement('div');
  sec.classList.add('custom-hotspot51');
  var se2c = document.createElement('div');
  se2c.classList.add('custom-hotspot52');
  var tex = document.createElement('p');
  tex.classList.add('tex');
  tex.textContent = "Platea";
  hotSpotDiv.appendChild(nuovoOggetto);
  hotSpotDiv.appendChild(sec);
  hotSpotDiv.appendChild(se2c);
  hotSpotDiv.appendChild(tex);
  hotSpotDiv.onclick = function() {
    if (isMobile) {
      if (selectedButton == hotSpotDiv){
          localStorage.setItem('inc', true);
          window.location.href = "Plat.html";
      }
      selectedButton = hotSpotDiv;
    }else {
      localStorage.setItem('inc', true);
      window.location.href = "Plat.html";
    }
  };
  hotSpotDiv.onmouseenter = function() {
    nuovoOggetto.classList.add('fade-in');
    sec.classList.add('fade-in');
    se2c.classList.add('fade-in');
    tex.classList.add('fade-in');
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.classList.remove('fade-in');
    sec.classList.remove('fade-in');
    se2c.classList.remove('fade-in');
    tex.classList.remove('fade-in');
  }
}
function rit() {
  window.location.href = "../../Home.html";
}
