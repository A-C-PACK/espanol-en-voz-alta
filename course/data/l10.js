window.LESSONS = window.LESSONS || {};
LESSONS["10"] = {
  id: "10", level: "A2", title: "¿Cómo llego?", minutes: 28,
  cando: "I can ask for and give directions using a map or landmarks.",
  scale: "Information exchange",
  reg: "usted", partner: "Sra. Elena", place: "Centro · mapa de práctica",
  scene: "in a Mexican town center I asked Señora Elena for directions, then gave her directions using a map we both had",
  goal: "You're standing at the corner of Juárez and Allende, next to the main square. ChatGPT plays Señora Elena, a local. Get directions to two places, then give her directions to two places.",
  boardStep: ["Mira el mapa", "You and Señora Elena have the same map. You are at the red dot."],
  board: {
    title: "Centro", sub: "Mapa de práctica · el norte está arriba",
    svg: `<svg viewBox="0 0 420 320" role="img" aria-label="Map: three streets west to east (Hidalgo, Juárez, Morelos) and three north to south (Allende, Zaragoza, Guerrero). You are at Juárez and Allende.">
  <rect class="st" x="30" y="40" width="360" height="20"/>
  <rect class="st" x="30" y="150" width="360" height="20"/>
  <rect class="st" x="30" y="260" width="360" height="20"/>
  <rect class="st" x="50" y="20" width="20" height="280"/>
  <rect class="st" x="200" y="20" width="20" height="280"/>
  <rect class="st" x="350" y="20" width="20" height="280"/>
  <rect class="bk" x="74" y="64" width="122" height="82" rx="4"/>
  <rect class="bk" x="224" y="64" width="122" height="82" rx="4"/>
  <rect class="bk" x="74" y="174" width="122" height="82" rx="4"/>
  <rect class="bk" x="224" y="174" width="122" height="82" rx="4"/>
  <rect class="park" x="86" y="74" width="98" height="58" rx="4"/>
  <text class="lm" x="135" y="107" text-anchor="middle">Jardín Principal</text>
  <text class="sl" x="135" y="53.5" text-anchor="middle">CALLE HIDALGO</text>
  <text class="sl" x="285" y="163.5" text-anchor="middle">CALLE JUÁREZ</text>
  <text class="sl" x="135" y="273.5" text-anchor="middle">CALLE MORELOS</text>
  <text class="sl" transform="translate(63.5 225) rotate(-90)" text-anchor="middle">ALLENDE</text>
  <text class="sl" transform="translate(213.5 225) rotate(-90)" text-anchor="middle">ZARAGOZA</text>
  <text class="sl" transform="translate(363.5 225) rotate(-90)" text-anchor="middle">GUERRERO</text>
  <circle class="dot" cx="285" cy="76" r="4"/><text class="lm" x="285" y="96" text-anchor="middle">La Parroquia</text>
  <circle class="dot" cx="338" cy="136" r="4"/><text class="lm" x="328" y="140" text-anchor="end">Banco</text>
  <circle class="dot" cx="186" cy="184" r="4"/><text class="lm" x="176" y="188" text-anchor="end">Farmacia</text>
  <circle class="dot" cx="135" cy="244" r="4"/><text class="lm" x="135" y="232" text-anchor="middle">Mercado</text>
  <circle class="dot" cx="234" cy="212" r="4"/><text class="lm" x="243" y="216">Hotel Real</text>
  <circle class="dot" cx="338" cy="246" r="4"/><text class="lm" x="328" y="250" text-anchor="end">Museo</text>
  <circle class="you" cx="80" cy="141" r="6"/>
  <text class="youl" x="78" y="163.5">Usted está aquí</text>
  <path class="n" d="M400 52 L400 30 M394 38 L400 30 L406 38"/><text class="sl" x="400" y="64" text-anchor="middle">N</text>
</svg>`,
    note: "Part 1: ask for directions. Part 2: Elena asks you."
  },
  dialogue: [
    ["c", "Disculpe, ¿cómo llego al museo?", "Excuse me, how do I get to the museum?"],
    ["m", "¿Al museo? Mire, siga todo derecho por la calle Juárez.", "To the museum? Look, go straight along Juárez Street."],
    ["c", "¿Todo derecho por Juárez?", "Straight along Juárez?"],
    ["m", "Sí. En la segunda esquina, en Guerrero, dé vuelta a la derecha.", "Yes. At the second corner, at Guerrero, turn right."],
    ["c", "¿A la derecha en Guerrero?", "Right on Guerrero?"],
    ["m", "Exacto. Camine una cuadra. El museo está en la esquina, a la derecha.", "Exactly. Walk one block. The museum is on the corner, on the right."],
    ["c", "¿Está lejos?", "Is it far?"],
    ["m", "No, son como cinco minutos caminando.", "No, it's about five minutes on foot."],
    ["c", "¿Y hay una farmacia cerca?", "And is there a pharmacy nearby?"],
    ["m", "Sí, en la esquina de Juárez y Zaragoza, enfrente del jardín.", "Yes, at the corner of Juárez and Zaragoza, across from the square."],
    ["c", "Perfecto. Muchas gracias.", "Perfect. Thank you very much."],
    ["m", "De nada. Oiga, ¿usted sabe dónde está el banco?", "You're welcome. Say, do you know where the bank is?"],
    ["c", "Sí. Siga por Juárez dos cuadras. El banco está a la izquierda, antes de Guerrero.", "Yes. Go along Juárez two blocks. The bank is on the left, before Guerrero."],
    ["m", "¡Muchas gracias!", "Thank you so much!"]
  ],
  core: [
    ["Disculpe, ¿cómo llego al museo?", "Excuse me, how do I get to the museum?"],
    ["¿Está lejos?", "Is it far?"],
    ["Siga todo derecho.", "Go straight ahead."],
    ["Dé vuelta a la derecha.", "Turn right."],
    ["Dé vuelta a la izquierda.", "Turn left."],
    ["En la segunda esquina.", "At the second corner."],
    ["Está enfrente del jardín.", "It's across from the square."]
  ],
  hear: [
    ["Mire…", "Look… (to get your attention)"],
    ["Camine dos cuadras.", "Walk two blocks."],
    ["Hasta el semáforo.", "Up to the traffic light."],
    ["Está en la esquina.", "It's on the corner."],
    ["Como a cinco minutos.", "About five minutes away."],
    ["No tiene pérdida.", "You can't miss it."]
  ],
  extra: [
    ["¿Cómo llego a la parroquia?", "How do I get to the church?"],
    ["¿Por dónde está el mercado?", "Whereabouts is the market?"],
    ["¿Me lo puede mostrar en el mapa?", "Can you show me on the map?"],
    ["Cruce la calle.", "Cross the street."],
    ["Siga por la calle Juárez.", "Continue along Juárez Street."],
    ["Está entre el banco y el hotel.", "It's between the bank and the hotel."],
    ["Está al lado del mercado.", "It's next to the market."],
    ["¿Se puede ir caminando?", "Can you walk there?"],
    ["Oiga, ¿sabe dónde está la parroquia?", "Excuse me, do you know where the church is?"],
    ["¿Seguro? Creo que no…", "(you'll hear) Are you sure? I don't think so…"]
  ],
  vocab: [
    ["Moverse", [["siga", "continue, go (seguir)"], ["dé vuelta", "turn (dar vuelta)"], ["camine", "walk (caminar)"], ["cruce", "cross (cruzar)"], ["tome", "take (tomar)"]]],
    ["La calle", [["la calle", "street"], ["la avenida", "avenue"], ["la esquina", "corner"], ["la cuadra", "block"], ["el semáforo", "traffic light"], ["el jardín, la plaza", "town square"], ["la parroquia", "parish church"]]],
    ["Posición", [["todo derecho", "straight ahead"], ["a la derecha", "on the right"], ["a la izquierda", "on the left"], ["enfrente de", "across from"], ["al lado de", "next to"], ["entre", "between"], ["en la esquina de", "on the corner of"], ["hasta", "up to, until"]]]
  ],
  qd: [
    ["Ask how to get to the museum.", "Disculpe, ¿cómo llego al museo?"],
    ["Ask if it's far.", "¿Está lejos?"],
    ["Tell someone to go straight ahead.", "Siga todo derecho."],
    ["Tell someone to turn left.", "Dé vuelta a la izquierda."],
    ["Say \"at the second corner\".", "En la segunda esquina."],
    ["Say the pharmacy is across from the square.", "La farmacia está enfrente del jardín."],
    ["Check: \"right on Guerrero?\"", "¿A la derecha en Guerrero?"]
  ],
  patterns: [
    ["¿Cómo llego a + [lugar]?", "a + el = al: <i>¿Cómo llego al museo?</i> · <i>¿Cómo llego a la plaza?</i>"],
    ["[Siga / Dé vuelta / Camine] + …", "Directions use <i>usted</i> commands: <i>Siga todo derecho. Dé vuelta a la izquierda.</i>"],
    ["en la + [primera / segunda] + esquina", "<i>En la segunda esquina, dé vuelta a la derecha.</i>"],
    ["Está + enfrente de / al lado de / entre…", "de + el = del: <i>Está enfrente del jardín.</i>"]
  ],
  notes: [
    ["Dé vuelta", "Mexicans say <i>dé vuelta</i> or <i>da vuelta</i> for \"turn\". <i>Gire</i> and <i>doble</i> are understood too."],
    ["El jardín", "In many Mexican towns the main square is called <i>el jardín</i>, with the <i>parroquia</i> next to it."],
    ["Ahí nomás", "Locals may say <i>ahí nomás</i>, \"just right there\", even when it's a few blocks away."],
    ["Ask twice", "If directions get long, ask a second person. It's normal and polite."]
  ],
  prompt: {
    role: `You are Señora Elena, a friendly local in the town center. I'm a visitor standing at the corner of Juárez and Allende, next to the Jardín Principal. Use "usted" with me.`,
    infoTitle: "THE MAP (we both have it; north is up)",
    info: `Three streets run west to east: Hidalgo (north), Juárez (middle), Morelos (south). Three streets run north to south: Allende (west), Zaragoza (middle), Guerrero (east). They make four blocks.
- Northwest block: Jardín Principal (the main square). I'm at its southwest corner, Juárez and Allende.
- Northeast block: La Parroquia (church) on Hidalgo. Banco on Juárez, at the corner of Guerrero.
- Southwest block: Farmacia at the corner of Juárez and Zaragoza. Mercado on Morelos.
- Southeast block: Hotel Real on Zaragoza. Museo at the corner of Morelos and Guerrero.`,
    twist: `PART 1: I'll ask you how to get to two places. Give directions that are correct for this map. PART 2: Then ask me how to get to La Parroquia and then the Hotel Real from where I am, and follow my directions. If my directions don't match the map, say "¿Seguro? Creo que no…" and let me fix them.`,
    lead: `Give directions in short steps ("Siga todo derecho por Juárez. En la segunda esquina, dé vuelta a la derecha."). Give one or two steps at a time and wait for me to check. Use "usted" commands.`,
    recast: `I say "¿Cómo llego a el museo?" and you say "¿Al museo? Mire…"`
  },
  twists: [
    ["Desde el mercado", "Harder", "Start at the market. Ask for the bank and the church.", `Otra vez, por favor. This time I'm standing at the Mercado on Morelos. I'll ask how to get to the Banco and the Parroquia, then you ask me how to get to the Museo. Same rules.`],
    ["Sin mapa", "Challenge", "Don't look at the map. Listen, then repeat the route back.", `Otra vez, por favor. I won't look at the map. Give me directions to the Museo and I'll repeat them back to check. Same rules.`]
  ],
  sa: [
    "I can ask how to get somewhere",
    "I can understand step-by-step directions",
    "I can check directions by repeating them",
    "I can give directions with siga / dé vuelta / camine",
    "I can say where a place is (enfrente de, al lado de)"
  ]
};
