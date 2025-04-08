dir = localStorage.getItem('inc');
console.log(dir);
if (dir === "false") {
  inc = 0;
}else {
  inc = 90;
}
const isMobile = navigator.userAgentData.mobile;
var selectedButton = null;
var prevbut = null;
var img = false;
var tir = 0;
var ind;
var us = true;
hot = localStorage.getItem('vis');
var but = document.getElementById('si');
var ch = document.getElementById('ch');
but.addEventListener('change', function() {
  if(ch.checked) {
    localStorage.setItem('vis', "true");
    setTimeout(() => {
      location.reload();
    }, 400);
  }else {
    localStorage.setItem('vis', "false");
    setTimeout(() => {
      location.reload();
    }, 400);
  }
});
if (hot === "true") {
  ch.checked = true;
}
viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://flaviocaputo.github.io/Teatro-Pirandello/Static/Panorama/FL4.jpeg",
    "autoLoad": true,
    "showControls": false,
    "yaw": inc, 
    "hotSpots": [
        {
          "pitch": -18,
          "yaw": 92,
          "cssClass": "custom-hotspot2",
          "text": "Foyer",
          "createTooltipFunc": Freccia1,
          "createTooltipArgs": "Custom Hotspot"
        },
      ]
  })
  const hotspotIds = [
    "fr1",
    "fr2",
    "te",
    "gio",
    "ar",
    "ina",
  ];
  const pos = [
    [-18, 0],
    [-18, 94.5],
    [1, 135],
    [6, 156],
    [6, 210],
    [7, 238],
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
      localStorage.setItem('inc', false);
      window.location.href = "../page/Visita4.html";
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
  function te(hotSpotDiv, args) {
    if (hot === "true") {
      hotSpotDiv.style.display = "none";
    };
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('temp'); 
    nuovoOggetto.textContent = 'F. Lojacono (1838-1915)\nTempio dei Dioscuri Olio su tela,\n cm. 103 x 67';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.width= "200px";
    nuovoOggetto.style.fontSize = "14.5px";
    var x = document.createElement('p');
    x.classList.add('text-x');
    x.textContent = "x";
    Oggetto2.appendChild(x);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      if (us) {
        ind = hotSpotDiv;
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          cent("te");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("te");
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
  function ar(hotSpotDiv, args) {
    if (hot === "true") {
      hotSpotDiv.style.display = "none";
    };
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('ar'); 
    nuovoOggetto.textContent = 'M. Mirabella (1870-1930)\n Ulivi Olio su tela,\n cm. 47 x 87,5';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.width= "200px";
    nuovoOggetto.style.fontSize = "16px";
    var x = document.createElement('p');
    x.classList.add('text-x');
    x.textContent = "x";  
    x.style.right = "-18px";
    Oggetto2.appendChild(x);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      if (us) {
        ind = hotSpotDiv;
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          cent("ar");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("ar");
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
  function gio(hotSpotDiv, args) {
    if (hot === "true") {
      hotSpotDiv.style.display = "none";
    };
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('gio'); 
    nuovoOggetto.textContent = 'F. Lojacono (1838-1915)\n Un giorno di sole in Sicilia. Il duello Olio su tela,\n cm. 45,5 x 87,5';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.width= "200px";
    nuovoOggetto.style.fontSize = "14.5px";
    var x = document.createElement('p');
    x.classList.add('text-x');
    x.textContent = "x";
    x.style.right = "-18px";  
    Oggetto2.appendChild(x);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      if (us) {
        ind = hotSpotDiv;
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          cent("gio");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("gio");
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
  function ina(hotSpotDiv, args) {
    if (hot === "true") {
      hotSpotDiv.style.display = "none";
    };
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    var Oggetto2 = document.createElement('div');
    Oggetto2.classList.add('ina'); 
    nuovoOggetto.textContent = 'F. Lojacono (1838-1915)\n Arrivo inatteso Olio su tela,\n cm. 46 x 88';
    nuovoOggetto.classList.add('info');  
    nuovoOggetto.style.width= "200px";
    nuovoOggetto.style.fontSize = "14.5px";
    var x = document.createElement('p');
    x.classList.add('text-x');
    x.textContent = "x";
    x.style.right = "-18px";  
    Oggetto2.appendChild(x);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      if (us) {
        ind = hotSpotDiv;
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          cent("ina");
        }
        selectedButton = hotSpotDiv;
        img = true;
        Tog();
      }else {
        cent("ina");
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