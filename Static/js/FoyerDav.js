pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama":  "https://raw.githubusercontent.com/FlavioCaputo/Teatro-Pirandello/refs/heads/main/Static/Panorama/foyer2.jpg",
    "autoLoad": true,
    "showControls": false,
    "yaw": -90, 
    "hotSpots": [
      {
        "pitch": -4,
        "yaw": -5,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": piano,
      },
      {
        "pitch": -20,
        "yaw": 90,
        "cssClass": "custom-hotspot2",
        "text": "Stanza Laterale",
        "createTooltipFunc": Freccia1,
        "createTooltipArgs": "Custom Hotspot"
      },
      {
        "pitch": -7,
        "yaw": -93,
        "cssClass": "custom-hotspot2",
        "text": "Stanza Laterale",
        "createTooltipFunc": Freccia2,
        "createTooltipArgs": "Custom Hotspot"
      },
      {
        "pitch": 2,
        "yaw": -38,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Lapide69,
      },
      {
        "pitch": 27,
        "yaw": -149,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Bellini,
      },
      {
        "pitch": 2,
        "yaw": -148,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Lapide81,
      },
      {
        "pitch": -2,
        "yaw": -46,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Luigi,
      },
      {
        "pitch": 27,
        "yaw": -38,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Rossini,
      },
      {
        "pitch": 23,
        "yaw": -6,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Verdi,
      },
      {
        "pitch": -2,
        "yaw": -25,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Ugo,
      },
      {
        "pitch": 0,
        "yaw": 12,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Mille,
      },
      {
        "pitch": 30,
        "yaw": 25,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Mercadante,
      },
      {
        "pitch": 3,
        "yaw": 119,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": PlanT,
      },
      {
        "pitch": 4,
        "yaw": 58,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": PlanF,
      },
      {
        "pitch": 0,
        "yaw": -200,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": BustoZ,
      },
      {
        "pitch": -1,
        "yaw": -161,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Pippo,
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
  function Freccia2(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot');
    hotSpotDiv.onclick = function() {
        window.location.href = "../page/Plat.html";
      };
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
  function Lapide69(hotSpotDiv, args) {
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
  function PlanF(hotSpotDiv, args) {
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
  function PlanT(hotSpotDiv, args) {
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
  function Bellini(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'Vincenzo Bellini';
    nuovoOggetto.classList.add('info'); 
    hotSpotDiv.appendChild(nuovoOggetto);
  
    hotSpotDiv.text = "Ciao";
    hotSpotDiv.onclick = function() {
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          window.location.href = "../page/Vincenzo.html";
        }
        selectedButton = hotSpotDiv;
        Tog();
        nuovoOggetto.style.display = "block"; 
      }else {
        window.location.href = "../page/Vincenzo.html";
      }
    };
    hotSpotDiv.onmouseenter = function() {
      nuovoOggetto.style.display = "Block";
    }
    hotSpotDiv.onmouseleave = function() {
      nuovoOggetto.style.display = "none";
    }
  }
  function Rossini(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'Gioachino Rossini';
    nuovoOggetto.classList.add('info'); 
    hotSpotDiv.appendChild(nuovoOggetto);
  
    hotSpotDiv.text = "Ciao";
    hotSpotDiv.onclick = function() {
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          window.location.href = "../page/Rossini.html";
        }
        selectedButton = hotSpotDiv;
        Tog();
        nuovoOggetto.style.display = "block"; 
      }else {
        window.location.href = "../page/Rossini.html";
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
  function Verdi(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'Giuseppe Verdi';
    nuovoOggetto.classList.add('info'); 
    hotSpotDiv.appendChild(nuovoOggetto);
  
    hotSpotDiv.text = "Ciao";
    hotSpotDiv.onclick = function() {
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          window.location.href = "../page/Verdi.html";
        }
        selectedButton = hotSpotDiv;
        Tog();
        nuovoOggetto.style.display = "block"; 
      }else {
        window.location.href = "../page/Verdi.html";
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
  function Mercadante(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
    var nuovoOggetto = document.createElement('div');
    nuovoOggetto.textContent = 'Saverio Mercadante';
    nuovoOggetto.classList.add('info'); 
    nuovoOggetto.style.fontSize = '18px';
    hotSpotDiv.appendChild(nuovoOggetto);
  
    hotSpotDiv.text = "Ciao";
    hotSpotDiv.onclick = function() {
      if (isMobile) {
        if (selectedButton == hotSpotDiv){
          window.location.href = "../page/Mercadante.html";
        }
        selectedButton = hotSpotDiv;
        Tog();
        nuovoOggetto.style.display = "block"; 
      }else {
        window.location.href = "../page/Mercadante.html";
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
  function Luigi(hotSpotDiv, args) {
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
  function Mille(hotSpotDiv, args) {
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
  function Ugo(hotSpotDiv, args) {
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
  function BustoZ(hotSpotDiv, args) {
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
  function Pippo(hotSpotDiv, args) {
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
