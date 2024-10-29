pannellum.viewer('panorama', {
    "type": "equirectangular",
    "panorama": "https://flaviocaputo.github.io/Teatro-Pirandello/Static/Panorama/foyer2.jpeg",
    "autoLoad": true,
    "showControls": false,
    "hotSpots": [
      {
        "pitch": -20,
        "yaw": -180,
        "cssClass": "custom-hotspot2",
        "text": "Stanza Laterale",
        "createTooltipFunc": Freccia1,
        "createTooltipArgs": "Custom Hotspot"
      },
      {
        "pitch": -2,
        "yaw": -48,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Lapide81,
      },
      {
        "pitch": 22,
        "yaw": -46,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Bellini,
      },
      {
        "pitch": -2,
        "yaw": 44,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Lapide69,
      },
      {
        "pitch": -7,
        "yaw": 34,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Luigi,
      },
      {
        "pitch": 20,
        "yaw": 44,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Rossini,
      },
      {
        "pitch": 20,
        "yaw": 73,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Verdi,
      },
      {
        "pitch": -5,
        "yaw": 57,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Ugo,
      },
      {
        "pitch": 0,
        "yaw": 92,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Mille,
      },
      {
        "pitch": 30,
        "yaw": 107,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Mercadante,
      },
      {
        "pitch": 0,
        "yaw": -224.5,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": PlanT,
      },
      {
        "pitch": -1,
        "yaw": -142,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": PlanF,
      },
      {
        "pitch": 0,
        "yaw": -98,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": BustoZ,
      },
      {
        "pitch": -3,
        "yaw": -60,
        "type": "info",
        "text": "abito",
        "createTooltipFunc": Pippo,
      },
      ]
  })
  function isMobile() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
  var selectedButton = null;
  var prevbut = null;
  var tir = 0;
  document.onclick = function() {
    if (isMobile) {
      if (selectedButton == prevbut && tir == 1) {
        Array.from(selectedButton.children).forEach((child, index) => {
          child.style.display = "none";
          tir == 0;
          selectedButton = null
      });
      }
      tir++;
    }
  };
  function Tog() {
    console.log('cio');
    if (selectedButton != prevbut && prevbut != null) {
      Array.from(prevbut.children).forEach((child, index) => {
        child.style.display = "none";
      });
      tir = 0;
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
    testo.style.bottom = '-78px';
    Oggetto2.appendChild(testo);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
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
    testo.style.bottom = '-78px';
    Oggetto2.appendChild(testo);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
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
    testo.style.bottom = '-55px';
    Oggetto2.appendChild(testo);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
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
    testo.style.bottom = '-55px';
    Oggetto2.appendChild(testo);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
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
      window.location.href = "../page/Vincenzo.html";
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
      window.location.href = "../page/Rossini.html";
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
      window.location.href = "../page/Verdi.html";
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
    hotSpotDiv.appendChild(nuovoOggetto);
  
    hotSpotDiv.text = "Ciao";
    hotSpotDiv.onclick = function() {
      window.location.href = "../page/Mercadante.html";
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
    testo.style.bottom = '-78px';
    Oggetto2.appendChild(testo);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
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
    Oggetto2.classList.add('Lug'); 
    var testo = document.createElement('p');
    testo.textContent = "G.B. Noto Millefiori, Personificazione del fiume Akragas, 1875.";
    testo.classList.add('text');
    testo.style.bottom = '-78px';
    Oggetto2.appendChild(testo);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
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
    testo.style.bottom = '-50px';
    Oggetto2.appendChild(testo);
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
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
    testo.textContent = "Busto di Zeus di Orticoli, o Giove di Otricolo, XVIII secolo. Il busto raffigura un’opera marmorea rinvenuta nel 1775 nel comune italiano di Otricoli, in provincia di Terni, in Umbria., durante una campagna di scavi finanziata da Papa Pio VI ed attualmente esposta nella Sala Rotonda dei Musei Vaticani.";
    testo.classList.add('sc'); 
    testo.style.top = '-32vh';
    testo.style.marginLeft = '17vw';
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(testo);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      testo.style.display = "Block";
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
    };
    hotSpotDiv.onmouseenter = function() {
      nuovoOggetto.style.display = "Block";
    }
    hotSpotDiv.onmouseleave = function() {
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
        Oggetto2.style.display = "none";
        testo.style.display = "none";
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
    testo.textContent = "Busto dell’attore agrigentino Pippo Montalbano, al quale è intitolato il foyer del teatro. Pippo Montalbano (Agrigento 1 febbraio 1940 - 8 marzo 2009). All’età di 14 anni, recita nella commedia musicale \"Pinocchio\" di Collodi. Nel 1963, fonda con alcuni amici la Compagnia di Prosa \"Maschere Nude\" che nel 1965 divenne la cooperativa “Piccolo Teatro Pirandelliano Città di Agrigento” e successivamente, nel 1989, “Piccolo Teatro Città  di Agrigento”. Nel corso della sua carriera di attore ha recitato in numerose rappresentazioni teatrali, ha   svolto diverse esperienze televisive e cinematografiche e ha ricevuto tanti i riconoscimenti. È stato un uomo impegnato nel sociale e con una grande passione per le tradizioni popolari religiose.";
    testo.classList.add('scr'); 
    testo.style.top = '-32vh';
    testo.style.marginLeft = '17vw';
    hotSpotDiv.appendChild(Oggetto2);
    hotSpotDiv.appendChild(testo);
    hotSpotDiv.appendChild(nuovoOggetto);
    hotSpotDiv.onclick = function() {
      testo.style.display = "Block";
      Oggetto2.style.display = "Block";
      nuovoOggetto.style.display = "none";
    };
    hotSpotDiv.onmouseenter = function() {
      nuovoOggetto.style.display = "Block";
    }
    hotSpotDiv.onmouseleave = function() {
      if (isMobile) {
      }else {
        nuovoOggetto.style.display = "none"; 
        Oggetto2.style.display = "none";
        testo.style.display = "none";
      }
    }
  }