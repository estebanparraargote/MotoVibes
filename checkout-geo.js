/* ══════════════════════════════════════
   GEO — Regiones, Ciudades y Comunas de Chile
   checkout-geo.js
══════════════════════════════════════ */

const CHILE_GEO = {
  "Arica y Parinacota": {
    "Arica": ["Arica", "Camarones"],
    "Parinacota": ["Putre", "General Lagos"]
  },
  "Tarapacá": {
    "Iquique": ["Iquique", "Alto Hospicio"],
    "Tamarugal": ["Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
  },
  "Antofagasta": {
    "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal"],
    "El Loa": ["Calama", "Ollagüe", "San Pedro de Atacama"],
    "Tocopilla": ["Tocopilla", "María Elena"]
  },
  "Atacama": {
    "Copiapó": ["Copiapó", "Caldera", "Tierra Amarilla"],
    "Chañaral": ["Chañaral", "Diego de Almagro"],
    "Huasco": ["Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
  },
  "Coquimbo": {
    "Elqui": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña"],
    "Choapa": ["Illapel", "Canela", "Los Vilos", "Salamanca"],
    "Limarí": ["Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
  },
  "Valparaíso": {
    "Valparaíso": ["Valparaíso", "Casablanca", "Juan Fernández", "Quintero", "Viña del Mar"],
    "Isla de Pascua": ["Isla de Pascua"],
    "Los Andes": ["Los Andes", "Calle Larga", "Rinconada", "San Esteban"],
    "Petorca": ["La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar"],
    "Quillota": ["Quillota", "Calera", "La Cruz", "Nogales", "Hijuelas"],
    "San Antonio": ["San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo"],
    "San Felipe de Aconcagua": ["San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María"],
    "Marga Marga": ["Quilpué", "Villa Alemana", "Limache", "Olmué"]
  },
  "Metropolitana de Santiago": {
    "Santiago": ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central",
                 "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana",
                 "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú",
                 "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura",
                 "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón",
                 "Vitacura"],
    "Cordillera": ["Puente Alto", "Pirque", "San José de Maipo"],
    "Chacabuco": ["Colina", "Lampa", "Tiltil"],
    "Maipo": ["San Bernardo", "Buin", "Calera de Tango", "Paine"],
    "Melipilla": ["Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro"],
    "Talagante": ["Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
  },
  "O'Higgins": {
    "Cachapoal": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras",
                  "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco",
                  "Rengo", "Requínoa", "San Vicente"],
    "Cardenal Caro": ["Pichilemu", "La Estrella", "Litueche", "Marchigüe", "Navidad", "Paredones"],
    "Colchagua": ["San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla",
                  "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
  },
  "Maule": {
    "Talca": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue",
              "Río Claro", "San Clemente", "San Rafael"],
    "Cauquenes": ["Cauquenes", "Chanco", "Pelluhue"],
    "Curicó": ["Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia",
                "Teno", "Vichuquén"],
    "Linares": ["Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre",
                "Yerbas Buenas"]
  },
  "Ñuble": {
    "Chillán": ["Chillán", "Chillán Viejo", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay"],
    "Itata": ["Quirihue", "Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Ránquil", "Trehuaco"],
    "Punilla": ["San Carlos", "Coihueco", "Ñiquén", "San Fabián", "San Nicolás"]
  },
  "Biobío": {
    "Concepción": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco",
                   "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén"],
    "Arauco": ["Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa"],
    "Biobío": ["Los Ángeles", "Alto Biobío", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento",
               "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel"]
  },
  "La Araucanía": {
    "Cautín": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro",
               "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén",
               "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol"],
    "Malleco": ["Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco",
                "Purén", "Renaico", "Traiguén", "Victoria"]
  },
  "Los Ríos": {
    "Valdivia": ["Valdivia", "Corral", "Futrono", "La Unión", "Lago Ranco", "Lanco", "Los Lagos",
                 "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Río Bueno"],
    "Ranco": ["La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
  },
  "Los Lagos": {
    "Puerto Montt": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos",
                     "Llanquihue", "Maullín", "Puerto Varas"],
    "Chiloé": ["Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón",
               "Queilén", "Quellón", "Quemchi", "Quinchao"],
    "Osorno": ["Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa",
               "San Pablo"],
    "Palena": ["Chaitén", "Futaleufú", "Hualaihué", "Palena"]
  },
  "Aysén": {
    "Coyhaique": ["Coyhaique", "Lago Verde"],
    "Aysén": ["Puerto Aysén", "Cisnes", "Guaitecas"],
    "Capitán Prat": ["Cochrane", "O'Higgins", "Tortel"],
    "General Carrera": ["Chile Chico", "Río Ibáñez"]
  },
  "Magallanes": {
    "Magallanes": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio"],
    "Antártica Chilena": ["Cabo de Hornos", "Antártica"],
    "Tierra del Fuego": ["Porvenir", "Primavera", "Timaukel"],
    "Última Esperanza": ["Puerto Natales", "Torres del Paine"]
  }
};

/* ══════════════════════════════════════
   POBLAR REGIONES
══════════════════════════════════════ */
const selRegion  = document.getElementById('sel-region');
const selCiudad  = document.getElementById('sel-ciudad');
const selComuna  = document.getElementById('sel-comuna');
const inpTel     = document.getElementById('inp-telefono');

Object.keys(CHILE_GEO).forEach(region => {
  const opt = document.createElement('option');
  opt.value = region;
  opt.textContent = region;
  selRegion.appendChild(opt);
});

/* ══════════════════════════════════════
   REGIÓN → CIUDADES
══════════════════════════════════════ */
selRegion.addEventListener('change', () => {
  const region = selRegion.value;

  // Reset ciudad y comuna
  selCiudad.innerHTML = '<option value="">Selecciona una ciudad</option>';
  selComuna.innerHTML = '<option value="">Primero elige ciudad</option>';
  selComuna.disabled = true;

  if (!region) {
    selCiudad.disabled = true;
    return;
  }

  const ciudades = Object.keys(CHILE_GEO[region]);
  ciudades.forEach(ciudad => {
    const opt = document.createElement('option');
    opt.value = ciudad;
    opt.textContent = ciudad;
    selCiudad.appendChild(opt);
  });

  selCiudad.disabled = false;
});

/* ══════════════════════════════════════
   CIUDAD → COMUNAS
══════════════════════════════════════ */
selCiudad.addEventListener('change', () => {
  const region = selRegion.value;
  const ciudad = selCiudad.value;

  selComuna.innerHTML = '<option value="">Selecciona una comuna</option>';

  if (!ciudad) {
    selComuna.disabled = true;
    return;
  }

  const comunas = CHILE_GEO[region][ciudad];
  comunas.forEach(comuna => {
    const opt = document.createElement('option');
    opt.value = comuna;
    opt.textContent = comuna;
    selComuna.appendChild(opt);
  });

  selComuna.disabled = false;
});

/* ══════════════════════════════════════
   TELÉFONO — prefijo fijo +569, max 8 dígitos
══════════════════════════════════════ */
inpTel.addEventListener('input', () => {
  // Solo dígitos
  inpTel.value = inpTel.value.replace(/\D/g, '').slice(0, 9);
});

inpTel.addEventListener('keydown', e => {
  const allowed = ['Backspace','Delete','ArrowLeft','ArrowRight','Tab','Home','End'];
  if (!allowed.includes(e.key) && !/^\d$/.test(e.key)) {
    e.preventDefault();
  }
  // Primer dígito debe ser 9
  if (inpTel.value.length === 0 && /^\d$/.test(e.key) && e.key !== '9') {
    e.preventDefault();
  }
});

// Al enviar el form, el valor real del teléfono incluye el prefijo
document.getElementById('checkout-form').addEventListener('submit', () => {
  inpTel.value = '+56' + inpTel.value;
}, { capture: true });
