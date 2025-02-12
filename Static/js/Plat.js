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
      "pitch": 48,
      "yaw": -91,
      "type": "info",
      "createTooltipFunc": pe,
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
      "pitch": 73,
      "yaw": -374,
      "type": "info",
      "createTooltipFunc": a4,
    },
    {
      "pitch": 5,
      "yaw": -114,
      "type": "info",
      "createTooltipFunc": par1,
    },
    {
      "pitch": 12.5,
      "yaw": -120,
      "type": "info",
      "createTooltipFunc": escu,
    },
    {
      "pitch": 13,
      "yaw": -122.3,
      "type": "info",
      "createTooltipFunc": leo,
    },
    {
      "pitch": 2,
      "yaw": -122.3,
      "type": "info",
      "createTooltipFunc": para,
    },
    {
      "pitch": 2,
      "yaw": -60,
      "type": "info",
      "createTooltipFunc": para1,
    },
    {
      "pitch": 14,
      "yaw": -124.5,
      "type": "info",
      "createTooltipFunc": ztest,
    },
    {
      "pitch": 14.7,
      "yaw": -127.5,
      "type": "info",
      "createTooltipFunc": quad,
    },
    {
      "pitch": 15,
      "yaw": -130.5,
      "type": "info",
      "createTooltipFunc": leo1,
    },
    {
      "pitch": 16,
      "yaw": -133.5,
      "type": "info",
      "createTooltipFunc": divlep,
    },
    {
      "pitch": 16.5,
      "yaw": -137,
      "type": "info",
      "createTooltipFunc": div,
    },
    {
      "pitch": 17,
      "yaw": -140.6,
      "type": "info",
      "createTooltipFunc": leo2,
    },
    {
      "pitch": 18.5,
      "yaw": -149,
      "type": "info",
      "createTooltipFunc": ful,
    },
    {
      "pitch": 19,
      "yaw": -153.5,
      "type": "info",
      "createTooltipFunc": leo3,
    },
    {
      "pitch": 20,
      "yaw": -158,
      "type": "info",
      "createTooltipFunc": ztest1,
    },
    {
      "pitch": 21,
      "yaw": -163,
      "type": "info",
      "createTooltipFunc": gra,
    },
    {
      "pitch": 22,
      "yaw": -168,
      "type": "info",
      "createTooltipFunc": leo4,
    },
    {
      "pitch": 23,
      "yaw": -173.3,
      "type": "info",
      "createTooltipFunc": divlep1,
    },
    {
      "pitch": 24,
      "yaw": -179,
      "type": "info",
      "createTooltipFunc": cavallo,
    },
    {
      "pitch": 25,
      "yaw": -185,
      "type": "info",
      "createTooltipFunc": leo5,
    },
    {
      "pitch": 27.5,
      "yaw": -192,
      "type": "info",
      "createTooltipFunc": don,
    },
    {
      "pitch": 29,
      "yaw": -198.7,
      "type": "info",
      "createTooltipFunc": gra1,
    },
    {
      "pitch": 31,
      "yaw": -206.5,
      "type": "info",
      "createTooltipFunc": leo6,
    },
    {
      "pitch": 33,
      "yaw": -215,
      "type": "info",
      "createTooltipFunc": aqu,
    },
    {
      "pitch": 34.5,
      "yaw": -224,
      "type": "info",
      "createTooltipFunc": ap,
    },
    {
      "pitch": 36.5,
      "yaw": -234.5,
      "type": "info",
      "createTooltipFunc": leo7,
    },
    {
      "pitch": 38,
      "yaw": -245.5,
      "type": "info",
      "createTooltipFunc": don2,
    },
    {
      "pitch": 39.5,
      "yaw": -257,
      "type": "info",
      "createTooltipFunc": gra2,
    },
    {
      "pitch": 39.5,
      "yaw": -271,
      "type": "info",
      "createTooltipFunc": leo8,
    },
    {
      "pitch": 40,
      "yaw": -283.3,
      "type": "info",
      "createTooltipFunc": ap1,
    },
    {
      "pitch": 38.5,
      "yaw": -295.5,
      "type": "info",
      "createTooltipFunc": gra3,
    },
    {
      "pitch": 37,
      "yaw": -307,
      "type": "info",
      "createTooltipFunc": leo9,
    },
    {
      "pitch": 35,
      "yaw": -317.5,
      "type": "info",
      "createTooltipFunc": don1,
    },
    {
      "pitch": 33,
      "yaw": -327,
      "type": "info",
      "createTooltipFunc": ak,
    },
    {
      "pitch": 31,
      "yaw": -335.5,
      "type": "info",
      "createTooltipFunc": leo10,
    },
    {
      "pitch": 29,
      "yaw": -343.5,
      "type": "info",
      "createTooltipFunc": trina,
    },
    {
      "pitch": 27,
      "yaw": -350.5,
      "type": "info",
      "createTooltipFunc": gra4,
    },
    {
      "pitch": 26,
      "yaw": -357,
      "type": "info",
      "createTooltipFunc": leo11,
    },
    {
      "pitch": 24,
      "yaw": -363,
      "type": "info",
      "createTooltipFunc": ap2,
    },
    {
      "pitch": 23,
      "yaw": -368.5,
      "type": "info",
      "createTooltipFunc": pun,
    },
    {
      "pitch": 21.5,
      "yaw": -374,
      "type": "info",
      "createTooltipFunc": leo12,
    },
    {
      "pitch": 21,
      "yaw": -379,
      "type": "info",
      "createTooltipFunc": aqu1,
    },
    {
      "pitch": 20,
      "yaw": -384,
      "type": "info",
      "createTooltipFunc": chi,
    },
    {
      "pitch": 19.5,
      "yaw": -388.5,
      "type": "info",
      "createTooltipFunc": leo13,
    },
    {
      "pitch": 19,
      "yaw": -393,
      "type": "info",
      "createTooltipFunc": ztest2,
    },
    {
      "pitch": 18,
      "yaw": -397,
      "type": "info",
      "createTooltipFunc": gra5,
    },
    {
      "pitch": 17.5,
      "yaw": -401.5,
      "type": "info",
      "createTooltipFunc": leo14,
    },
    {
      "pitch": 16.5,
      "yaw": -404.8,
      "type": "info",
      "createTooltipFunc": don3,
    },
    {
      "pitch": 15.5,
      "yaw": -408.5,
      "type": "info",
      "createTooltipFunc": divlep2,
    },
    {
      "pitch": 15,
      "yaw": -411.5,
      "type": "info",
      "createTooltipFunc": leo15,
    },
    {
      "pitch": 14.4,
      "yaw": -414.3,
      "type": "info",
      "createTooltipFunc": ztest3,
    },
    {
      "pitch": 13,
      "yaw": -419.5,
      "type": "info",
      "createTooltipFunc": leo16,
    },
    {
      "pitch": 12.5,
      "yaw": -422,
      "type": "info",
      "createTooltipFunc": ap3,
    },
    {
      "pitch": 5,
      "yaw": -67.5,
      "type": "info",
      "createTooltipFunc": par2,
    },
    {
      "pitch": 24.5,
      "yaw": -67.5,
      "type": "info",
      "createTooltipFunc": ligneo1,
    },
    {
      "pitch": 29,
      "yaw": -64,
      "type": "info",
      "createTooltipFunc": r,
    },
    {
      "pitch": 27.5,
      "yaw": -67.5,
      "type": "info",
      "createTooltipFunc": c,
    },
    {
      "pitch": 25.5,
      "yaw": -70.5,
      "type": "info",
      "createTooltipFunc": l,
    },
    {
      "pitch": 24.8,
      "yaw": -114.5,
      "type": "info",
      "createTooltipFunc": ligneo,
    },
    {
      "pitch": 20,
      "yaw": -114.5,
      "type": "info",
      "createTooltipFunc": Sce,
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
  "pe",
  "car",
  "din",
  "met",
  "a1",
  "a2",
  "a3",
  "a4",
  "par1",
  "par2",
  "para",
  "para1",
  "escu",
  "leo",
  "ztest",
  "quad",
  "leo1",
  "divlep",
  "div",
  "leo2",
  "",
  "ful",
  "leo3",
  "ztest1",
  "gra",
  "leo4",
  "divlep1",
  "cavallo",
  "leo5",
  "don",
  "gra1",
  "leo6",
  "aqu",
  "ap",
  "leo7",
  "don2",
  "gra2",
  "leo8",
  "ap1",
  "gra3",
  "leo9",
  "don1",
  "ak",
  "leo10",
  "trina",
  "gra4",
  "leo11",
  "ap2",
  "pun",
  "leo12",
  "aqu1",
  "chi",
  "leo13",
  "ztest2",
  "gra5",
  "leo14",
  "don3",
  "divlep2",
  "leo15",
  "ztest3",
  "",
  "leo16",
  "ap3",
  "ligneo",
  "sce",
  "ligneo1",
  "l",
  "c",
  "r",
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
[48, -91],  
[96, -90.5],
[63, -39],
[62, 214],
[76, 185],
[57, 242],
[57, -65],
[73, -374],
[3, -114],
[3, -67],
[0, -122],
[0, -60],
/*inizio mon*/
[12, -120],
[13, -122],
[14, -124],
[14, -127],
[15, -130],
[16, -133],
[16, -137],
[17, -140],
[],
[17, -145],
[18, -149],
[19, -153],
[20, -158],
[21, -163],
[22, -168],
[23, -173],
[24, -179],
[27, -192],
[29, -199],
[31, -206],
[33, -215],
[34, -224],
[36, -234],
[38, -245],
[40, -257],
[40, -271],
[40, -283],
[38, -295],
[37, -307],
[35, -317],
[33, -327],
[31, -335],
[29, -343],
[27, -350],
[26, -357],
[24, -363],
[23, -368],
[21, -374],
[21, -379],
[20, -384],
[19, -388],
[19, -393],
[18, -397],
[17, -401],
[16, -404],
[15, -408],
[15, -411],
[14, -414],
[],
[13, -419],
[12, -422],
[24, -113],
[20, -113],
[24, -67],
[25, -70],
[27, -67],
[29, -64],
]

document.getElementById('buttonbordered').addEventListener('click', function(e) {
  window.location.href = "../page/Mappa.html";
});
function hotpos(id) {
  let ind
  ind = hotspotIds.indexOf(id);
  console.log(id);
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
      if (selectedButton == prevbut && tir == 3) {
        Array.from(selectedButton.children).forEach((child, index) => {
          child.style.display = "none";
      });
      tir = 0;
      selectedButton = null;
      img = false;
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
  Oggetto2.style.left = "400px";
  Oggetto2.style.bottom = "-60px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('Cap1');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-2.5%";
  x.style.top = "-6%";
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
        cent("cap1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("cap1");
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
    Oggetto.style.display = "none";
    viewer.setHfov(100);
    setTimeout(() => {
      us = true;
    }, 1000); // 2000 ms = 2 secondi  
  }
  hotSpotDiv.onmouseleave = function() {
    nuovoOggetto.style.display = "none"; 
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
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-2.5%";
  x.style.top = "-6%";
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
        cent("cap2");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("cap2");
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
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-2.5%";
  x.style.top = "-6%";
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
        cent("cap3");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("cap3");
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
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-2.5%";
  x.style.top = "-6%";
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
        cent("cap4");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("cap4");
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
function pe(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Stemma della città di Agrigento';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '45px';
  nuovoOggetto.style.top = '15px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Stemma della città di Agrigento con i tre Telamoni che sorreggono la città turrita rappresentata da tre torri.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('pe');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("pe");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("pe");
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
        cent("a1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("a1");
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
        cent("a2");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("a2");
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
        cent("a3");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("a3");
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
function a4(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Allegoria della musica e della fama';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '70px';
  nuovoOggetto.style.top = '-10px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Allegoria della musica e della fama, rappresentata da un putto alato che suona una tromba araldica (o chiarina), attraverso il suono della quale si diffonde l’arte musicale e la fama dell’artista, e da un angelo che sorregge una corona d’alloro, simbolo di vittoria e gloria. L’angelo indossa una veste lunga e fluente, di colore marrone e verde, ha le ampie ali spiegate che gli conferiscono un aspetto potente e maestoso. Davanti all’angelo, il putto alato tiene nella mano destra la tromba e con la sinistra si aggrappa a un lenzuolo bianco. La scena è dinamica. L’angelo e il putto alato fluttuano nello spazio con grazia e le espressioni dei volti suggeriscono un senso di gioia e di trionfo.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('a4');
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
        cent("a4");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("a4");
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale erano raffigurati un granchio e un piccolo pesce. Il granchio, insieme all’aquila, era un simbolo distintivo dell'antica Akragas. Entrambi sono stati oggetto di studio e interpretazione per secoli. Questi due animali, così diversi tra loro, racchiudono un simbolismo profondo e complesso che riflette l'identità e i valori di questa importante città della Magna Grecia. In particolare, il granchio, abitante naturale delle coste, degli stagni e dei fiumi, rappresentava la parte a valle e costiera dell’antica Akragas; l’aquila, dominatrice dei cieli e dei territori, nella mitologia dell’antica Grecia attributo di Zeus, rappresentava la parte in collina, dove sorgeva l’acropoli. Con il suo robusto esoscheletro e le sue pinze potenti, il granchio, era simbolo di forza, tenacia e capacità di adattamento. Queste caratteristiche rispecchiavano lo spirito degli abitanti di Akragas, che si erano affermati come una delle potenze economiche e politiche della Magna Grecia. Ciò è testimoniato anche dalla presenza di un grosso pesce sotto il granchio. Nel mondo antico, infatti, il pesce era simbolo di abbondanza e ricchezza. In altre monete, sotto il granchio, al posto del pesce, furono raffigurati un delfino, un gambero, conchiglia e seppie ma anche chicchi di grano, un fiore, un fiore con due viticci, volute, ecc...";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('gra');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("gra");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("gra");
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata la testa di un’aquila di profilo, con un folto piumaggio e con il becco chiuso. Entrambi i simboli sono stati oggetto di studio e interpretazione per secoli. Questi due animali, così diversi tra loro, racchiudono un simbolismo profondo e complesso che riflette l'identità e i valori di questa importante città della Magna Grecia. In particolare, il granchio, abitante naturale delle coste, degli stagni e dei fiumi, rappresentava la parte a valle e costiera; l’aquila, dominatrice dei cieli e dei territori, nella mitologia dell’antica Grecia attributo di Zeus, rappresentava la parte in collina, dove sorgeva l’acropoli. La raffigurazione di sole teste di animali era una caratteristica comune dell'arte greca arcaica, periodo a cui risalgono le prime monete di Akragas con la testa di aquila di profilo. Con il passare del tempo, le dimensioni delle monete aumentarono e gli artisti ebbero più spazio a disposizione per rappresentare le figure animali, umane e divine seguendo gli stili dei periodi dell’arte greca. Così, da semplici e stilizzate, gli artisti passarono a un realismo sempre maggiore. In particolare, l'aquila dapprima venne raffigurata nella sua interezza, inizialmente in posizione stante con le ali chiuse o semiaperte e successivamente in movimento nell’atto di divorare una lepre o un serpente, e con una maggiore attenzione ai dettagli e alla resa realistica dell'animale.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('aqu');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("aqu");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("aqu");
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata un’aquila che cattura una lepre. Al pari del granchio, l’aquila era un simbolo distintivo dell'antica Akragas e nella mitologia dell’antica Grecia era considerato attributo di Zeus. In particolare, l’aquila, dominatrice dei cieli e dei territori, nella mitologia dell’antica Grecia attributo di Zeus, rappresentava la parte in collina, dove sorgeva l’acropoli; il granchio, abitante naturale delle coste, degli stagni e dei fiumi, rappresentava la parte a valle e costiera. La scena di un’aquila che divora una lepre possiede un forte simbolismo ed è un'allegoria ricca di significati che riflette l'identità e gli ideali della città di Akragas. Questa scena simboleggia la forza, il potere, la vittoria, ma anche la lotta per la sopravvivenza e il legame con il mondo divino e con Zeus in particolare.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('lep');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("lep");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("lep");
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata un’aquila stante con ali chiuse, in una vista a tre quarti. Al pari del granchio, l’aquila era un simbolo distintivo dell'antica Akragas e nella mitologia dell’antica Grecia era considerato attributo di Zeus. Con l'aumentare delle dimensioni delle monete nel tempo, gli artisti ebbero più spazio per raffigurare figure umane, animali e divinità. Con il passare del tempo, le dimensioni delle monete aumentarono e gli artisti ebbero più spazio a disposizione per rappresentare le figure animali, umane e divine seguendo gli stili dei periodi dell’arte greca. Così, da semplici e stilizzate, gli artisti passarono a un realismo sempre maggiore. In particolare, inizialmente ritrassero l'aquila di profilo (testa e collo), poi nella sua interezza in posizione stante con le ali chiuse, come nella moneta raffigurata nel dipinto in questione, o semiaperte e, infine, la mostrarono in volo, con maggiore dettaglio e realismo, nell'atto di ghermire una preda.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ap');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("ap");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ap");
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata un’aquila stante con ali semiaperte, in vista a tre quarti. Al pari del granchio, l’aquila era un simbolo distintivo dell'antica Akragas e nella mitologia dell’antica Grecia era considerato attributo di Zeus. In particolare, l’aquila, dominatrice dei cieli e dei territori, nella mitologia dell’antica Grecia attributo di Zeus, rappresentava la parte in collina, dove sorgeva l’acropoli; il granchio, abitante naturale delle coste, degli stagni e dei fiumi, rappresentava la parte a valle e costiera. Con il passare del tempo, le dimensioni delle monete aumentarono e gli artisti ebbero più spazio a disposizione per rappresentare le figure animali, umane e divine seguendo gli stili dei periodi dell’arte greca. Così, da semplici e stilizzate, gli artisti passarono a un realismo sempre maggiore. In particolare, inizialmente ritrassero l'aquila di profilo (testa e collo), poi nella sua interezza in posizione stante con le ali chiuse o semiaperte come nella moneta raffigurata nel dipinto in questione e, infine, la mostrarono in volo, con maggiore dettaglio e realismo, nell'atto di ghermire una preda.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('chi');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("chi");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("chi");
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata un’aquila che divora un serpente. Al pari del granchio, l’aquila era un simbolo distintivo dell'antica Akragas e nella mitologia dell’antica Grecia era considerato attributo di Zeus. Con il passare del tempo, le dimensioni delle monete aumentarono e gli artisti ebbero più spazio a disposizione per rappresentare le figure animali, umane e divine seguendo gli stili dei periodi dell’arte greca. Così, da semplici e stilizzate, gli artisti passarono a un realismo sempre maggiore. In particolare, inizialmente ritrassero l'aquila di profilo (testa e collo), poi nella sua interezza in posizione stante con le ali chiuse o semiaperte e, infine, la mostrarono in volo, con maggiore dettaglio e realismo, nell'atto di ghermire una preda, come nella moneta raffigurata nel dipinto in questione nella quale l’aquila divora un serpente. Questa scena possiede un forte simbolismo, è ricca di significati e racchiude in sé i valori fondamentali della cultura greca e le aspirazioni della città di Akragas. Rappresenta la potenza, la protezione divina, la vittoria e la capacità di superare le avversità e simboleggia il trionfo del bene sul male, della luce sulle tenebre, della civiltà sulla barbarie, il potere e il dominio di Akragas sulle forze ostili, sia interne che esterne. Inoltre, in quanto simbolo di Zeus, l’aquila che divora un serpente simboleggiava la protezione di Akragas dai nemici e garantiva la vittoria nelle guerre.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('div');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
    if ( us) {
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale erano raffigurate due aquile che divorano il corpo capovolto di una lepre. L'aquila in primo piano, presenta le ali chiuse, la testa sollevata e il becco chiuso; quella in secondo piano ha le ali semiaperte e la testa abbassata. Al pari del granchio, l’aquila era un simbolo distintivo dell'antica Akragas e nella mitologia dell’antica Grecia era considerato attributo di Zeus. Con il passare del tempo, le dimensioni delle monete aumentarono e gli artisti ebbero più spazio a disposizione per rappresentare le figure animali, umane e divine seguendo gli stili dei periodi dell’arte greca. Così, da semplici e stilizzate, gli artisti passarono a un realismo sempre maggiore. In particolare, inizialmente ritrassero l'aquila di profilo (testa e collo), poi nella sua interezza in posizione stante con le ali chiuse o semiaperte e, infine, la mostrarono in volo, con maggiore dettaglio e realismo, nell'atto di ghermire una preda. In alcune monete le aquile sono due, come nella moneta raffigurata nel dipinto in questione, nella quale i rapaci divorano una lepre. La scena di due aquile che divorano una lepre possiede un forte simbolismo ed è un'allegoria ricca di significati che riflette l'identità e gli ideali della città di Akragas. Essa simboleggiava la potenza, la protezione divina e il desiderio di dominio, ma poteva anche essere interpretata in chiave più ampia, come una rappresentazione del ciclo della vita e della morte. L'immagine delle due aquile che divorano una lepre può essere interpretata in diversi modi: la forza e il dominio di Akragas sulle altre città-stato; protezione divina e di Zeus; il ciclo della vita e della morte, con le aquile che simboleggiavano la forza della natura e la lepre la fragilità dell'esistenza. Alcuni studiosi, infatti, hanno ipotizzato che questa raffigurazione possa essere un riferimento ad un passo del drammaturgo Eschilo, che parla di un presagio visto da un comandante prima di una battaglia, in cui due aquile combattevano per una lepre.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('divlep');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("divlep");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("divlep");
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata la testa la laureata di Zeus. Questa immagine era ricorrente sulle monete greche e rivestiva un significato profondo e poliedrico. Essa rappresentava: potere divino, sicurezza della protezione divina, garanzia di prosperità, legittimità conferita da Zeus al potere politico e sociale delle città-stato, come Akragas; e ancora simboleggiava saggezza e onore dei governanti, vittorie e trionfi, poiché l'alloro era associato alla vittoria, alla gloria e alla sapienza. La testa laureata di Zeus era, dunque, un simbolo complesso e potente, che racchiudeva in sé i valori fondamentali della cultura greca e le aspirazioni di città come Akragas.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ztest');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("ztest");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ztest");
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Agrigentum sulla quale era raffigurata la Triskeles (Trinacria).  La Triskeles (Trinacria). La “triskeles”, [s. f. dal gr. τρισκελής, agg., propr. «con tre gambe», comp. di τρι- «tre-» e σκέλος «gamba»] presente su molte monete di Akragas, è un simbolo antico e complesso che racchiude in sé molteplici significati. Al termine greco \"triskéles\" che si ricollega al significato geografico: \"treis\" (tre) e \"àkra\"(promontori), da cui deriva il termine latino \"trìquetra\" (a tre vertici). Essa è formata da tre gambe che si intrecciano in un punto centrale. Al centro si trova spesso una testa femminile o un gorgonèion (Gorgone, o Medusa), personaggio mitologico. In Sicilia, la triscele ha origini figurative remote. Essa, infatti, venne ritrovata su una ceramica di produzione indigena risalente al VII-VI secolo a.C., un Dinos (vaso priva di anse e con il fondo convesso utilizzato  per mescolare l'acqua al vino), oggi conservato presso il Museo Archeologico Regionale “Pietro Griffo” di Agrigento.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('trina');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
  x.style.top = "-6.7%";
  x.style.fontSize = "18px";
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce un serpente attorcigliato a una verga. Il serpente attorcigliato a una verga è un simbolo antico e complesso, presente in diverse culture, ma con significati particolarmente rilevanti nell'antica Grecia. Nel mondo greco, questo simbolo era associato principalmente a due figure divine: Ermes, messaggero degli dei e dio del commercio, e Asclepio, dio della medicina, il cui bastone era spesso rappresentato proprio con un serpente attorcigliato, simbolo di guarigione e medicina, energia vitale, saggezza e conoscenza, rinascita e trasformazione, equilibrio e armonia. Questa raffigurazione testimonia l'importanza del culto di questa divinità nella città di Akragas. Ancor oggi, il bastone di Asclepio è utilizzato come simbolo universale della medicina.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('escu');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("escu");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("escu");
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una quadriga in corsa condotta da un auriga. Nella simbologia della mitologia greca, la quadriga rappresenta potere e maestosità, movimento e velocità, divinità e mitologia, trionfo e vittoria. La quadriga, infatti, era il simbolo per eccellenza dell'agonismo, della competizione, della ricerca della gloria. Le gare di quadrighe erano gare di velocità ed eventi di grande importanza, che attiravano spettatori da tutta la Grecia. In tale ottica, la raffigurazione della quadriga nelle decorazioni pittoriche dei palchi del primo ordine, oltre ad essere un simbolo della città allevatrice di cavalli di pregio, presenta un chiaro riferimento al trionfo dell’atleta Esseneto nella gara dello stadion alle Olimpiadi di Elea del 412 a.C., raffigurata nel 1879 dal pittore messinese Luigi Queriau nel sipario del teatro agrigentino, andato perduto intorno alla metà del XX secolo. La medesima scena, seppur con alcune lievi modifiche, è stata riprodotta nel nuovo sipario donato nel 2006 al Teatro “Luigi Pirandello” dal regista e produttore di livello nazionale, di origine agrigentina, Francesco Bellomo.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('quad');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("quad");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("quad");
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurato un cavallo libero. Il cavallo libero, un'immagine ricorrente sulle monete, portava con sé una moltitudine di significati, profondamente radicati nella cultura e nella mitologia greca, come libertà e indipendenza, forza e potenza, nobiltà e aristocrazia, ricchezza e la prosperità, solarità e luce, vitalità e movimento.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('cavallo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("cavallo");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("cavallo");
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
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce un fulmine alato con la scritta ΑΚΡΑΓΑΝΤΙΝΩΝ, uno dei simboli presenti sulle monete dell’antica Akragas. Il fulmine alato con la scritta ΑΚΡΑΓΑΝΤΙΝΩΝ sulle monete di Akragas (l'odierna Agrigento) era un simbolo carico di significati, complesso e multiforme, che racchiudeva in sé i valori fondamentali della cultura greca e le aspirazioni della città di Akragas. Il fulmine rappresentava: il potere divino, in quanto era associato a Zeus, re degli dei nell'Olimpo; la forza e maestosità poiché simboleggiava la forza inarrestabile e la maestosità della natura, e per estensione, la potenza militare e politica di Akragas; protezione divina, in quanto arma di Zeus utilizzata per difendere i suoi fedeli. L'ala, invece, conferiva al fulmine un senso di velocità e potenza, sottolineando la rapidità con cui Zeus poteva intervenire e punire i suoi nemici. Essa poteva anche essere interpretata come un simbolo di ascesa e conquista, rappresentando l'ambizione di Akragas di espandersi e dominare le altre città-stato. La scritta ΑΚΡΑΓΑΝΤΙΝΩΝ, che significa \"degli Akragantini\", è l’etnico in caso genitivo che indica l’appartenenza della moneta alla città.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ful');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("ful");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ful");
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
function ak(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Agrigentum (verisimilmente epoca di Augusto, 27 a.C.-14 d.C.,), sulla quale figura la scritta AGRIGENTI su due righe, entro una ghirlanda.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ak');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("ak");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ak");
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
function don(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas, sulla quale è raffigurato il profilo destro del volto di Kore. Pindaro definì Akragas figlia di Persefone e secondo Cicerone Cerere e Proserpina furono le dee più venerate in Sicilia";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('don');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("don");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("don");
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
function leo(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo");
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
function pun(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto a tempera ad imitazione del bronzo, di forma circolare, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas, sulla quale è raffigurato il valore della moneta con cinque punti in rilievo o globetti.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('pun');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("pun");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("pun");
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
        cent("para");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("para");
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
function para1(hotSpotDiv, args) {
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
        cent("para1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("para1");
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
function par1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Palco di proscenio del primo ordine';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '160px';
  nuovoOggetto.style.height = '45px';
  nuovoOggetto.style.top = '15px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Palco di proscenio del primo ordine realizzato nel 1923 nell’ambito di un più ampio intervento voluto dall’Amministrazione comunale che ha determinato l’arretramento del proscenio, l’avanzamento della buca d’orchestra (o golfo mistico) sotto la cicloide dell’arco armonico e l’abbassamento della quota della buca d’orchestra ad un livello inferiore rispetto a quello precedente, per evitare che i musicisti con i propri strumenti ostacolassero la vista agli spettatori seduti in platea.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('par');
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
        cent("par1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("par1");
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
function par2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Palco di proscenio del primo ordine';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '160px';
  nuovoOggetto.style.height = '45px';
  nuovoOggetto.style.top = '15px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Palco di proscenio del primo ordine realizzato nel 1923 nell’ambito di un più ampio intervento voluto dall’Amministrazione comunale che ha determinato l’arretramento del proscenio, l’avanzamento della buca d’orchestra (o golfo mistico) sotto la cicloide dell’arco armonico e l’abbassamento della quota della buca d’orchestra ad un livello inferiore rispetto a quello precedente, per evitare che i musicisti con i propri strumenti ostacolassero la vista agli spettatori seduti in platea.";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('par2');
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
        cent("par2");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("par2");
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
function ligneo(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Fascia decorativa';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '140px';
  nuovoOggetto.style.height = '30px';
  nuovoOggetto.style.top = '30px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Fascia decorativa lignea realizzata ad imitazione del marmo, con cornice color oro, contenente un bassorilievo costituito da due festoni di frutta e fiori con fettucce interrotte da una testa di Fauno coronato da foglie di edera e di viti. La decorazione, come le altre sculture lignee del teatro, è stata realizzata tra il 1876 e il 1877 dallo scultore e decoratore palermitano Benedetto Alfano, su disegni del celebre architetto Giovan Battista Filippo Basile.";
  Oggetto2.style.left = "-20px";
  Oggetto2.style.width = "410px";
  Oggetto2.style.height = "110px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('lign');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-2.7%";
  x.style.top = "-14%";
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
        cent("ligneo");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ligneo");
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
function ligneo1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Fascia decorativa';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '140px';
  nuovoOggetto.style.height = '30px';
  nuovoOggetto.style.top = '30px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Fascia decorativa lignea realizzata ad imitazione del marmo, con cornice color oro, contenente un bassorilievo costituito da due festoni di frutta e fiori con fettucce interrotte da una testa di Fauno coronato da foglie di edera e di viti. La decorazione, come le altre sculture lignee del teatro, è stata realizzata tra il 1876 e il 1877 dallo scultore e decoratore palermitano Benedetto Alfano, su disegni del celebre architetto Giovan Battista Filippo Basile.";
  Oggetto2.style.left = "-20px";
  Oggetto2.style.width = "410px";
  Oggetto2.style.height = "110px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('lign1');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-2.7%";
  x.style.top = "-14%";
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
        cent("ligneo1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ligneo1");
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
function Sce(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Scena mitologica';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '120px';
  nuovoOggetto.style.height = '30px';
  nuovoOggetto.style.top = '30px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Scena mitologica che raffigura Apollo, dio delle arti, nel Parnaso in posizione solenne attorniato da due muse e da un putto alato che gli porge una coppa, quale gesto simbolico di celebrazione e abbondanza. La scena è ambientata su una nuvola, tipica raffigurazione di un ambiente divino o ultraterreno, caratteristico delle rappresentazioni mitologiche. Gli ornati delle superfici triangolari mistilinei sono decorati con motivi floreali e vegetali alla maniera raffaellesca. Il dipinto è stato realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno dell’illustre architetto palermitano Giovan Battista Filippo Basile (1875).";
  Oggetto2.style.left = "360px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('scena');
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
        cent("sce");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("sce");
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
function l(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Cartiglio su fondo color oro';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '45px';
  nuovoOggetto.style.top = '15px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Cartiglio su fondo color oro, costituito da un putto alato fitomorfo che sorregge una ghirlanda intrecciata da un nastro rosa, al centro della quale vi è il cognome del celebre compositore Giovanni Pacini (Catania, 11 febbraio 1796 – Pescia, 6 dicembre 1867). Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno dell’illustre architetto palermitano Giovan Battista Filippo Basile (1875).";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('l');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("l");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("l");
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
function c(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Cartiglio su fondo color oro';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '45px';
  nuovoOggetto.style.top = '15px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Cartiglio su fondo color oro, costituito da un putto alato fitomorfo che sorregge una ghirlanda intrecciata da un nastro rosa, al centro della quale vi è il cognome del celebre compositore Vincenzo Bellini (Catania 1801 - Puteaux, Parigi, 1835). Il dipinto è stato realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno dell’illustre architetto palermitano Giovan Battista Filippo Basile (1875).";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('c');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("c");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("c");
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
function r(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Cartiglio su fondo color oro';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '45px';
  nuovoOggetto.style.top = '15px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Cartiglio su fondo color oro, costituito da un putto alato fitomorfo che sorregge una ghirlanda intrecciata da un nastro rosa, al centro della quale vi è il cognome del celebre compositore Giuseppe Verdi (Giuseppe Fortunino Francesco Verdi, Le Roncole, 10 ottobre 1813 – Milano, 27 gennaio 1901). Il dipinto è stato realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno dell’illustre architetto palermitano Giovan Battista Filippo Basile (1875).";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('r');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("r");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("r");
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
f
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
/*ripetizioni medaglie*/
function leo1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo1");
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
function leo2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo2");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo2");
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
function leo3(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo3");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo3");
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
function leo4(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo4");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo4");
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
function leo5(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo5");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo5");
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
function leo6(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo6");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo6");
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
function leo7(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo7");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo7");
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
function leo8(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo8");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo8");
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
function leo9(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo9");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo9");
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
function leo10(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo10");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo10");
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
function leo11(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo11");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo11");
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
function leo12(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo12");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo12");
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
function leo13(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo13");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo13");
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
function leo14(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo14");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo14");
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
function leo15(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo15");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo15");
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
function leo16(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una medaglia';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso, posto al centro di ciascun palco del primo secondo ordine. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una testa di leone circondata da una ghirlanda anch’essa di colore verde. Nel mondo greco la testa di leone era una decorazione che aveva molteplici significati simbolici, come potenza, audacia, saggezza, coraggio, regalità, prestigio, protezione apotropaica. Il leone, infatti, era visto come un guardiano, un protettore. Nei templi, oltre alla loro funzione pratica ed estetica, conferiva sacralità agli edifici. Spesso il leone era associato a divinità come Apollo (nella religione greca e romana, il dio della musica, delle arti mediche, delle scienze, dell'intelletto e della profezia) e a Eracle, eroe e semidio della mitologia greca (Ercole per i Romani), incarnazione della forza fisica e del coraggio. La presenza della testa di leone tra le decorazioni pittoriche del Teatro “Pirandello” di Agrigento simboleggia, dunque, la potenza, il prestigio, le ambizioni e le gloriose origini greche della città e ne sottolinea l'identità culturale. Al contempo conferisce all’edificio protezione, sacralità e monumentalità all’edifico, tempio della cultura. ";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('leo');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("leo16");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("leo16");
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
function don1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas, sulla quale è raffigurato il profilo destro del volto di Kore. Pindaro definì Akragas figlia di Persefone e secondo Cicerone Cerere e Proserpina furono le dee più venerate in Sicilia";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('don');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("don1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("don1");
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
function don2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas, sulla quale è raffigurato il profilo destro del volto di Kore. Pindaro definì Akragas figlia di Persefone e secondo Cicerone Cerere e Proserpina furono le dee più venerate in Sicilia";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('don');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("don2");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("don2");
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
function don3(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas, sulla quale è raffigurato il profilo destro del volto di Kore. Pindaro definì Akragas figlia di Persefone e secondo Cicerone Cerere e Proserpina furono le dee più venerate in Sicilia";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('don');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("don3");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("don3");
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
function divlep1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale erano raffigurate due aquile che divorano il corpo capovolto di una lepre. L'aquila in primo piano, presenta le ali chiuse, la testa sollevata e il becco chiuso; quella in secondo piano ha le ali semiaperte e la testa abbassata. Al pari del granchio, l’aquila era un simbolo distintivo dell'antica Akragas e nella mitologia dell’antica Grecia era considerato attributo di Zeus. Con il passare del tempo, le dimensioni delle monete aumentarono e gli artisti ebbero più spazio a disposizione per rappresentare le figure animali, umane e divine seguendo gli stili dei periodi dell’arte greca. Così, da semplici e stilizzate, gli artisti passarono a un realismo sempre maggiore. In particolare, inizialmente ritrassero l'aquila di profilo (testa e collo), poi nella sua interezza in posizione stante con le ali chiuse o semiaperte e, infine, la mostrarono in volo, con maggiore dettaglio e realismo, nell'atto di ghermire una preda. In alcune monete le aquile sono due, come nella moneta raffigurata nel dipinto in questione, nella quale i rapaci divorano una lepre. La scena di due aquile che divorano una lepre possiede un forte simbolismo ed è un'allegoria ricca di significati che riflette l'identità e gli ideali della città di Akragas. Essa simboleggiava la potenza, la protezione divina e il desiderio di dominio, ma poteva anche essere interpretata in chiave più ampia, come una rappresentazione del ciclo della vita e della morte. L'immagine delle due aquile che divorano una lepre può essere interpretata in diversi modi: la forza e il dominio di Akragas sulle altre città-stato; protezione divina e di Zeus; il ciclo della vita e della morte, con le aquile che simboleggiavano la forza della natura e la lepre la fragilità dell'esistenza. Alcuni studiosi, infatti, hanno ipotizzato che questa raffigurazione possa essere un riferimento ad un passo del drammaturgo Eschilo, che parla di un presagio visto da un comandante prima di una battaglia, in cui due aquile combattevano per una lepre.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('divlep');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("divlep1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("divlep1");
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
function divlep2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale erano raffigurate due aquile che divorano il corpo capovolto di una lepre. L'aquila in primo piano, presenta le ali chiuse, la testa sollevata e il becco chiuso; quella in secondo piano ha le ali semiaperte e la testa abbassata. Al pari del granchio, l’aquila era un simbolo distintivo dell'antica Akragas e nella mitologia dell’antica Grecia era considerato attributo di Zeus. Con il passare del tempo, le dimensioni delle monete aumentarono e gli artisti ebbero più spazio a disposizione per rappresentare le figure animali, umane e divine seguendo gli stili dei periodi dell’arte greca. Così, da semplici e stilizzate, gli artisti passarono a un realismo sempre maggiore. In particolare, inizialmente ritrassero l'aquila di profilo (testa e collo), poi nella sua interezza in posizione stante con le ali chiuse o semiaperte e, infine, la mostrarono in volo, con maggiore dettaglio e realismo, nell'atto di ghermire una preda. In alcune monete le aquile sono due, come nella moneta raffigurata nel dipinto in questione, nella quale i rapaci divorano una lepre. La scena di due aquile che divorano una lepre possiede un forte simbolismo ed è un'allegoria ricca di significati che riflette l'identità e gli ideali della città di Akragas. Essa simboleggiava la potenza, la protezione divina e il desiderio di dominio, ma poteva anche essere interpretata in chiave più ampia, come una rappresentazione del ciclo della vita e della morte. L'immagine delle due aquile che divorano una lepre può essere interpretata in diversi modi: la forza e il dominio di Akragas sulle altre città-stato; protezione divina e di Zeus; il ciclo della vita e della morte, con le aquile che simboleggiavano la forza della natura e la lepre la fragilità dell'esistenza. Alcuni studiosi, infatti, hanno ipotizzato che questa raffigurazione possa essere un riferimento ad un passo del drammaturgo Eschilo, che parla di un presagio visto da un comandante prima di una battaglia, in cui due aquile combattevano per una lepre.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('divlep');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("divlep2");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("divlep2");
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
function ztest1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata la testa la laureata di Zeus. Questa immagine era ricorrente sulle monete greche e rivestiva un significato profondo e poliedrico. Essa rappresentava: potere divino, sicurezza della protezione divina, garanzia di prosperità, legittimità conferita da Zeus al potere politico e sociale delle città-stato, come Akragas; e ancora simboleggiava saggezza e onore dei governanti, vittorie e trionfi, poiché l'alloro era associato alla vittoria, alla gloria e alla sapienza. La testa laureata di Zeus era, dunque, un simbolo complesso e potente, che racchiudeva in sé i valori fondamentali della cultura greca e le aspirazioni di città come Akragas.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ztest');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("ztest1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ztest1");
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
function ztest2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata la testa la laureata di Zeus. Questa immagine era ricorrente sulle monete greche e rivestiva un significato profondo e poliedrico. Essa rappresentava: potere divino, sicurezza della protezione divina, garanzia di prosperità, legittimità conferita da Zeus al potere politico e sociale delle città-stato, come Akragas; e ancora simboleggiava saggezza e onore dei governanti, vittorie e trionfi, poiché l'alloro era associato alla vittoria, alla gloria e alla sapienza. La testa laureata di Zeus era, dunque, un simbolo complesso e potente, che racchiudeva in sé i valori fondamentali della cultura greca e le aspirazioni di città come Akragas.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ztest');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("ztest2");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ztest2");
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
function ztest3(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata la testa la laureata di Zeus. Questa immagine era ricorrente sulle monete greche e rivestiva un significato profondo e poliedrico. Essa rappresentava: potere divino, sicurezza della protezione divina, garanzia di prosperità, legittimità conferita da Zeus al potere politico e sociale delle città-stato, come Akragas; e ancora simboleggiava saggezza e onore dei governanti, vittorie e trionfi, poiché l'alloro era associato alla vittoria, alla gloria e alla sapienza. La testa laureata di Zeus era, dunque, un simbolo complesso e potente, che racchiudeva in sé i valori fondamentali della cultura greca e le aspirazioni di città come Akragas.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ztest');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("ztest3");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ztest3");
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
function gra1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale erano raffigurati un granchio e un piccolo pesce. Il granchio, insieme all’aquila, era un simbolo distintivo dell'antica Akragas. Entrambi sono stati oggetto di studio e interpretazione per secoli. Questi due animali, così diversi tra loro, racchiudono un simbolismo profondo e complesso che riflette l'identità e i valori di questa importante città della Magna Grecia. In particolare, il granchio, abitante naturale delle coste, degli stagni e dei fiumi, rappresentava la parte a valle e costiera dell’antica Akragas; l’aquila, dominatrice dei cieli e dei territori, nella mitologia dell’antica Grecia attributo di Zeus, rappresentava la parte in collina, dove sorgeva l’acropoli. Con il suo robusto esoscheletro e le sue pinze potenti, il granchio, era simbolo di forza, tenacia e capacità di adattamento. Queste caratteristiche rispecchiavano lo spirito degli abitanti di Akragas, che si erano affermati come una delle potenze economiche e politiche della Magna Grecia. Ciò è testimoniato anche dalla presenza di un grosso pesce sotto il granchio. Nel mondo antico, infatti, il pesce era simbolo di abbondanza e ricchezza. In altre monete, sotto il granchio, al posto del pesce, furono raffigurati un delfino, un gambero, conchiglia e seppie ma anche chicchi di grano, un fiore, un fiore con due viticci, volute, ecc...";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('gra');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("gra1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("gra1");
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
function gra2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale erano raffigurati un granchio e un piccolo pesce. Il granchio, insieme all’aquila, era un simbolo distintivo dell'antica Akragas. Entrambi sono stati oggetto di studio e interpretazione per secoli. Questi due animali, così diversi tra loro, racchiudono un simbolismo profondo e complesso che riflette l'identità e i valori di questa importante città della Magna Grecia. In particolare, il granchio, abitante naturale delle coste, degli stagni e dei fiumi, rappresentava la parte a valle e costiera dell’antica Akragas; l’aquila, dominatrice dei cieli e dei territori, nella mitologia dell’antica Grecia attributo di Zeus, rappresentava la parte in collina, dove sorgeva l’acropoli. Con il suo robusto esoscheletro e le sue pinze potenti, il granchio, era simbolo di forza, tenacia e capacità di adattamento. Queste caratteristiche rispecchiavano lo spirito degli abitanti di Akragas, che si erano affermati come una delle potenze economiche e politiche della Magna Grecia. Ciò è testimoniato anche dalla presenza di un grosso pesce sotto il granchio. Nel mondo antico, infatti, il pesce era simbolo di abbondanza e ricchezza. In altre monete, sotto il granchio, al posto del pesce, furono raffigurati un delfino, un gambero, conchiglia e seppie ma anche chicchi di grano, un fiore, un fiore con due viticci, volute, ecc...";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('gra');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("gra2");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("gra2");
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
function gra3(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale erano raffigurati un granchio e un piccolo pesce. Il granchio, insieme all’aquila, era un simbolo distintivo dell'antica Akragas. Entrambi sono stati oggetto di studio e interpretazione per secoli. Questi due animali, così diversi tra loro, racchiudono un simbolismo profondo e complesso che riflette l'identità e i valori di questa importante città della Magna Grecia. In particolare, il granchio, abitante naturale delle coste, degli stagni e dei fiumi, rappresentava la parte a valle e costiera dell’antica Akragas; l’aquila, dominatrice dei cieli e dei territori, nella mitologia dell’antica Grecia attributo di Zeus, rappresentava la parte in collina, dove sorgeva l’acropoli. Con il suo robusto esoscheletro e le sue pinze potenti, il granchio, era simbolo di forza, tenacia e capacità di adattamento. Queste caratteristiche rispecchiavano lo spirito degli abitanti di Akragas, che si erano affermati come una delle potenze economiche e politiche della Magna Grecia. Ciò è testimoniato anche dalla presenza di un grosso pesce sotto il granchio. Nel mondo antico, infatti, il pesce era simbolo di abbondanza e ricchezza. In altre monete, sotto il granchio, al posto del pesce, furono raffigurati un delfino, un gambero, conchiglia e seppie ma anche chicchi di grano, un fiore, un fiore con due viticci, volute, ecc...";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('gra');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("gra3");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("gra3");
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
function gra4(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale erano raffigurati un granchio e un piccolo pesce. Il granchio, insieme all’aquila, era un simbolo distintivo dell'antica Akragas. Entrambi sono stati oggetto di studio e interpretazione per secoli. Questi due animali, così diversi tra loro, racchiudono un simbolismo profondo e complesso che riflette l'identità e i valori di questa importante città della Magna Grecia. In particolare, il granchio, abitante naturale delle coste, degli stagni e dei fiumi, rappresentava la parte a valle e costiera dell’antica Akragas; l’aquila, dominatrice dei cieli e dei territori, nella mitologia dell’antica Grecia attributo di Zeus, rappresentava la parte in collina, dove sorgeva l’acropoli. Con il suo robusto esoscheletro e le sue pinze potenti, il granchio, era simbolo di forza, tenacia e capacità di adattamento. Queste caratteristiche rispecchiavano lo spirito degli abitanti di Akragas, che si erano affermati come una delle potenze economiche e politiche della Magna Grecia. Ciò è testimoniato anche dalla presenza di un grosso pesce sotto il granchio. Nel mondo antico, infatti, il pesce era simbolo di abbondanza e ricchezza. In altre monete, sotto il granchio, al posto del pesce, furono raffigurati un delfino, un gambero, conchiglia e seppie ma anche chicchi di grano, un fiore, un fiore con due viticci, volute, ecc...";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('gra');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("gra4");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("gra4");
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
function gra5(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale erano raffigurati un granchio e un piccolo pesce. Il granchio, insieme all’aquila, era un simbolo distintivo dell'antica Akragas. Entrambi sono stati oggetto di studio e interpretazione per secoli. Questi due animali, così diversi tra loro, racchiudono un simbolismo profondo e complesso che riflette l'identità e i valori di questa importante città della Magna Grecia. In particolare, il granchio, abitante naturale delle coste, degli stagni e dei fiumi, rappresentava la parte a valle e costiera dell’antica Akragas; l’aquila, dominatrice dei cieli e dei territori, nella mitologia dell’antica Grecia attributo di Zeus, rappresentava la parte in collina, dove sorgeva l’acropoli. Con il suo robusto esoscheletro e le sue pinze potenti, il granchio, era simbolo di forza, tenacia e capacità di adattamento. Queste caratteristiche rispecchiavano lo spirito degli abitanti di Akragas, che si erano affermati come una delle potenze economiche e politiche della Magna Grecia. Ciò è testimoniato anche dalla presenza di un grosso pesce sotto il granchio. Nel mondo antico, infatti, il pesce era simbolo di abbondanza e ricchezza. In altre monete, sotto il granchio, al posto del pesce, furono raffigurati un delfino, un gambero, conchiglia e seppie ma anche chicchi di grano, un fiore, un fiore con due viticci, volute, ecc...";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('gra');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("gra5");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("gra5");
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
function ap1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata un’aquila stante con ali chiuse, in una vista a tre quarti. Al pari del granchio, l’aquila era un simbolo distintivo dell'antica Akragas e nella mitologia dell’antica Grecia era considerato attributo di Zeus. Con l'aumentare delle dimensioni delle monete nel tempo, gli artisti ebbero più spazio per raffigurare figure umane, animali e divinità. Con il passare del tempo, le dimensioni delle monete aumentarono e gli artisti ebbero più spazio a disposizione per rappresentare le figure animali, umane e divine seguendo gli stili dei periodi dell’arte greca. Così, da semplici e stilizzate, gli artisti passarono a un realismo sempre maggiore. In particolare, inizialmente ritrassero l'aquila di profilo (testa e collo), poi nella sua interezza in posizione stante con le ali chiuse, come nella moneta raffigurata nel dipinto in questione, o semiaperte e, infine, la mostrarono in volo, con maggiore dettaglio e realismo, nell'atto di ghermire una preda.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ap');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("ap1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ap1");
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
function ap2(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata un’aquila stante con ali chiuse, in una vista a tre quarti. Al pari del granchio, l’aquila era un simbolo distintivo dell'antica Akragas e nella mitologia dell’antica Grecia era considerato attributo di Zeus. Con l'aumentare delle dimensioni delle monete nel tempo, gli artisti ebbero più spazio per raffigurare figure umane, animali e divinità. Con il passare del tempo, le dimensioni delle monete aumentarono e gli artisti ebbero più spazio a disposizione per rappresentare le figure animali, umane e divine seguendo gli stili dei periodi dell’arte greca. Così, da semplici e stilizzate, gli artisti passarono a un realismo sempre maggiore. In particolare, inizialmente ritrassero l'aquila di profilo (testa e collo), poi nella sua interezza in posizione stante con le ali chiuse, come nella moneta raffigurata nel dipinto in questione, o semiaperte e, infine, la mostrarono in volo, con maggiore dettaglio e realismo, nell'atto di ghermire una preda.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ap');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("ap2");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ap2");
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
function ap3(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata un’aquila stante con ali chiuse, in una vista a tre quarti. Al pari del granchio, l’aquila era un simbolo distintivo dell'antica Akragas e nella mitologia dell’antica Grecia era considerato attributo di Zeus. Con l'aumentare delle dimensioni delle monete nel tempo, gli artisti ebbero più spazio per raffigurare figure umane, animali e divinità. Con il passare del tempo, le dimensioni delle monete aumentarono e gli artisti ebbero più spazio a disposizione per rappresentare le figure animali, umane e divine seguendo gli stili dei periodi dell’arte greca. Così, da semplici e stilizzate, gli artisti passarono a un realismo sempre maggiore. In particolare, inizialmente ritrassero l'aquila di profilo (testa e collo), poi nella sua interezza in posizione stante con le ali chiuse, come nella moneta raffigurata nel dipinto in questione, o semiaperte e, infine, la mostrarono in volo, con maggiore dettaglio e realismo, nell'atto di ghermire una preda.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('ap');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("ap3");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("ap3");
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
function aqu1(hotSpotDiv, args) {
  hotSpotDiv.classList.add('custom-hotspot'); // Aggiungi una classe al hotspot per identificarlo
  var nuovoOggetto = document.createElement('div');
  nuovoOggetto.textContent = 'Dipinto di forma circolare di una moneta dell\'antica Akragas';
  nuovoOggetto.classList.add('info'); 
  nuovoOggetto.style.width = '125px';
  nuovoOggetto.style.height = '80px';
  nuovoOggetto.style.top = '-20px';
  var Oggetto2 = document.createElement('div');
  Oggetto2.classList.add('sc'); 
  Oggetto2.textContent = "Dipinto di forma circolare, ad imitazione del bronzo, circondato da una cornice dorata e da un filetto di colore rosso. Il dipinto, realizzato dai pittori milanesi Luigi Sacco e Antonio Tavella tra il 1876 e il 1879, su disegno del celebre architetto palermitano Giovan Battista Filippo Basile (1875), riproduce una faccia di una moneta dell’antica Akragas sulla quale era raffigurata la testa di un’aquila di profilo, con un folto piumaggio e con il becco chiuso. Entrambi i simboli sono stati oggetto di studio e interpretazione per secoli. Questi due animali, così diversi tra loro, racchiudono un simbolismo profondo e complesso che riflette l'identità e i valori di questa importante città della Magna Grecia. In particolare, il granchio, abitante naturale delle coste, degli stagni e dei fiumi, rappresentava la parte a valle e costiera; l’aquila, dominatrice dei cieli e dei territori, nella mitologia dell’antica Grecia attributo di Zeus, rappresentava la parte in collina, dove sorgeva l’acropoli. La raffigurazione di sole teste di animali era una caratteristica comune dell'arte greca arcaica, periodo a cui risalgono le prime monete di Akragas con la testa di aquila di profilo. Con il passare del tempo, le dimensioni delle monete aumentarono e gli artisti ebbero più spazio a disposizione per rappresentare le figure animali, umane e divine seguendo gli stili dei periodi dell’arte greca. Così, da semplici e stilizzate, gli artisti passarono a un realismo sempre maggiore. In particolare, l'aquila dapprima venne raffigurata nella sua interezza, inizialmente in posizione stante con le ali chiuse o semiaperte e successivamente in movimento nell’atto di divorare una lepre o un serpente, e con una maggiore attenzione ai dettagli e alla resa realistica dell'animale.";
  Oggetto2.style.left = "240px";
  Oggetto2.style.height = "260px";
  Oggetto2.style.bottom = "-115px";
  var Oggetto = document.createElement('div');
  Oggetto.classList.add('aqu');
  var x = document.createElement('p');
  x.classList.add('text-x');
  x.textContent = "x";
  x.style.right = "-4.2%";
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
        cent("aqu1");
      }
      selectedButton = hotSpotDiv;
      img = true;
      Tog();
    }else {
      cent("aqu1");
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