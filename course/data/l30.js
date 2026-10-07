window.LESSONS = window.LESSONS || {};
LESSONS["30"] = {
  id: "30", level: "B1", title: "Paso a paso", minutes: 32,
  cando: "I can ask for and follow detailed instructions.",
  scale: "Information exchange",
  reg: "usted", partner: "Don Arturo", place: "Casa rentada · Guanajuato",
  scene: "I arrived at a rented house in Guanajuato and the owner, Don Arturo, explained by phone how to get in and how to use the water heater, the drinking water, and the trash, step by step",
  setup: "You've just arrived at night at a rented house in Guanajuato. You call the owner, Don Arturo, who explains step by step how to get in and use the water heater.",
  goal: "You've just arrived at a rented house and the owner explains everything by phone. Follow his instructions to get in, ask questions when something isn't clear, check each step, and repeat the key steps back to him.",
  boardStep: ["Mira la casa", "Don Arturo will explain each thing. You don't know the details yet."],
  board: {
    title: "Casa del Callejón", sub: "Guanajuato, Gto. · llegada, 9 pm",
    cols: [
      [{ h: "Necesitas saber", items: [["Cómo abrir la caja de la llave"], ["Cómo prender el calentador"], ["Dónde está el agua para tomar"], ["Qué hacer con la basura"], ["La contraseña del wifi"]] }],
      [{ h: "Para pedir y confirmar", items: [["¿Qué hago primero?"], ["¿Y después de eso?"], ["A ver si entendí: …"], ["¿Me lo puede repetir más despacio?"], ["¿Cuál botón, el rojo o el negro?"]] }]
    ],
    note: "One step won't work the first time. Explain what you see."
  },
  dialogue: [
    ["c", "Buenas noches, don Arturo. Ya estoy en la puerta. ¿Cómo abro la caja de la llave?", "Good evening, Don Arturo. I'm at the door. How do I open the key box?"],
    ["m", "Mire, a la derecha de la puerta hay una cajita negra. Ponga el código: cuatro, siete, dos, uno.", "Look, to the right of the door there's a little black box. Enter the code: four, seven, two, one."],
    ["c", "¿Cuatro, siete, dos, uno? Ya está. ¿Y luego?", "Four, seven, two, one? Done. And then?"],
    ["m", "Jale la palanca hacia abajo y ahí está la llave.", "Pull the lever down and the key is there."],
    ["c", "Listo, ya entré. Oiga, ¿cómo funciona el agua caliente?", "Ready, I'm in. Say, how does the hot water work?"],
    ["m", "El calentador está en el patio. Primero abra la llave del gas, la amarilla.", "The water heater is in the patio. First open the gas valve, the yellow one."],
    ["c", "¿La llave amarilla? Ok. ¿Qué hago después?", "The yellow valve? OK. What do I do after that?"],
    ["m", "Gire la perilla a «piloto», apriétela y presione el botón rojo varias veces.", "Turn the knob to 'pilot', hold it down and press the red button several times."],
    ["c", "Ya lo hice, pero no prende.", "I did it, but it won't light."],
    ["m", "Siga apretando la perilla treinta segundos. Ya que prenda, suéltela despacio.", "Keep holding the knob for thirty seconds. Once it lights, let go slowly."],
    ["c", "¡Ya prendió! A ver si entendí: abro el gas, giro a piloto, aprieto y presiono el botón rojo.", "It lit! Let's see if I understood: I open the gas, turn it to pilot, hold it and press the red button."],
    ["m", "Exacto. Y no tome agua de la llave. Hay un garrafón en la cocina.", "Exactly. And don't drink tap water. There's a big water jug in the kitchen."],
    ["c", "Muy bien. ¿Y la basura? ¿Cuándo pasa el camión?", "Very good. And the trash? When does the truck come?"],
    ["m", "Martes y viernes, a las siete de la mañana. Cuando oiga la campana, saque las bolsas.", "Tuesdays and Fridays, at seven in the morning. When you hear the bell, take the bags out."],
    ["c", "Perfecto. Muchas gracias por la paciencia.", "Perfect. Thank you so much for your patience."]
  ],
  core: [
    ["¿Cómo abro la caja de la llave?", "How do I open the key box?"],
    ["¿Qué hago primero? ¿Y después?", "What do I do first? And after that?"],
    ["¿Cuál, el botón rojo o el negro?", "Which one, the red button or the black one?"],
    ["Ya lo hice, pero no prende.", "I did it, but it won't light."],
    ["A ver si entendí: primero…, luego…", "Let's see if I understood: first…, then…"],
    ["¿Me lo puede repetir más despacio?", "Can you repeat that more slowly?"],
    ["¿Cuándo pasa el camión de la basura?", "When does the garbage truck come?"]
  ],
  hear: [
    ["Ponga el código…", "Enter the code…"],
    ["Jale la palanca.", "Pull the lever."],
    ["Gire la perilla.", "Turn the knob."],
    ["Apriete y no suelte.", "Press and don't let go."],
    ["Ya que prenda, …", "Once it lights, …"],
    ["Cuando oiga la campana, …", "When you hear the bell, …"]
  ],
  extra: [
    ["¿Dónde exactamente?", "Where exactly?"],
    ["¿Hacia la derecha o hacia la izquierda?", "To the right or to the left?"],
    ["¿Cuánto tiempo lo dejo?", "How long do I leave it?"],
    ["¿Qué pasa si no funciona?", "What happens if it doesn't work?"],
    ["Ahorita le mando una foto.", "I'll send you a photo right now."],
    ["No veo ningún botón rojo.", "I don't see any red button."],
    ["Espere, ¿antes o después de abrir el gas?", "Wait, before or after opening the gas?"],
    ["¿Se lo leo para confirmar?", "Shall I read it back to confirm?"],
    ["Ya quedó, gracias.", "It's all set, thanks."],
    ["Si huele a gas, cierre la llave y abra las ventanas.", "(you'll hear) If it smells of gas, close the valve and open the windows."]
  ],
  vocab: [
    ["Instrucciones (usted)", [["ponga", "put, enter"], ["jale", "pull"], ["empuje", "push"], ["gire", "turn"], ["apriete", "press, hold down"], ["suelte", "let go"], ["presione", "press"], ["saque", "take out"]]],
    ["La casa", [["la caja de seguridad", "lockbox"], ["la palanca", "lever"], ["el calentador, el boiler", "water heater"], ["la llave del gas", "gas valve"], ["la perilla", "knob"], ["el piloto", "pilot light"], ["el garrafón", "large water jug"], ["el camión de la basura", "garbage truck"]]],
    ["Ordenar y confirmar", [["primero", "first"], ["luego, después", "then, after"], ["antes de + inf.", "before…"], ["ya que, cuando + subj.", "once, when…"], ["hasta que + subj.", "until…"], ["a ver si entendí", "let's see if I got it"], ["exacto", "exactly"]]]
  ],
  qd: [
    ["Ask how to open the key box.", "¿Cómo abro la caja de la llave?"],
    ["Ask what you do first, and after that.", "¿Qué hago primero? ¿Y después?"],
    ["Check which one: the red button or the black one.", "¿Cuál, el botón rojo o el negro?"],
    ["Say you did it, but it won't light.", "Ya lo hice, pero no prende."],
    ["Repeat the steps back to check.", "A ver si entendí: primero…, luego…"],
    ["Ask them to repeat it more slowly.", "¿Me lo puede repetir más despacio?"],
    ["Ask when the garbage truck comes.", "¿Cuándo pasa el camión de la basura?"]
  ],
  patterns: [
    ["[Ponga / Gire / Jale] + …", "Formal commands: <i>-ar → -e</i> (gire), <i>-er/-ir → -a</i> (ponga, abra). Listen for them."],
    ["¿Qué hago + [primero / después / si…]?", "Ask for the next step: <i>¿Qué hago si no prende?</i>"],
    ["Cuando / Ya que / Hasta que + [subjuntivo]", "Future time: <i>Cuando oiga la campana… Ya que prenda… Hasta que salga agua caliente.</i>"],
    ["A ver si entendí: primero…, luego…, y al final…", "Read the steps back. It's the best way to check."]
  ],
  notes: [
    ["El calentador", "Many Mexican homes have a gas water heater with a pilot light. If the pilot goes out, there's no hot water until you relight it."],
    ["El garrafón", "Most households buy 20-liter jugs of purified water (<i>garrafones</i>). A truck sells them in the street."],
    ["La campana", "In many towns the garbage truck rings a bell. When you hear it, you take your bags out to the truck."],
    ["Guanajuato", "The city is full of narrow alleys (<i>callejones</i>) and stairs. Taxis often can't reach the door, so instructions matter."]
  ],
  prompt: {
    role: `You are Don Arturo, 66, the owner of a small rented house in an alley in Guanajuato. I just arrived at 9 pm and I call you on the phone. Use "usted" with me. You're patient and detailed.`,
    infoTitle: "THE HOUSE AND THE INSTRUCTIONS",
    info: `Lockbox: small black box to the right of the door, code 4-7-2-1, pull the lever down.
Water heater (in the patio): 1) open the yellow gas valve, 2) turn the knob to "piloto", 3) hold the knob down and press the red button several times, 4) keep holding 30 seconds after it lights, 5) release slowly and turn to "encendido". If it smells of gas: close the valve, open windows, call you.
Drinking water: 20-liter jug in the kitchen; the water truck passes Mondays, $40 per jug.
Trash: Tuesdays and Fridays at 7 am, when you hear the bell, take the bags to the truck at the corner.
Wifi: "CasaCallejon", password "guanajuato1810".`,
    twist: `The water heater doesn't light the first time, because I don't hold the knob long enough. Make me describe what I see so you can help. Also give one instruction a bit too fast so I have to ask you to repeat.`,
    lead: `Give instructions one step at a time and wait for me to say I've done it. Use "usted" commands. Answer my questions with details. Ask me to repeat the water heater steps at the end.`,
    recast: `I say "¿Qué hago después de abro el gas?" and you say "¿Después de abrir el gas? Gire la perilla a piloto."`
  },
  twists: [
    ["Una receta", "Harder", "Learn to make salsa verde by phone from a Mexican friend.", `Otra vez, por favor. New situation: you're my friend Doña Mague, and you teach me by phone to make salsa verde: boil tomatillos and serrano chiles, blend with garlic, onion, cilantro and salt. Give quantities and times. Make me ask how many, how long, and what it should look like. Same rules.`],
    ["Sin ver", "Challenge", "Follow instructions to a place with no map, and repeat them back.", `Otra vez, por favor. This time explain how to walk from the house to the Mercado Hidalgo through the alleys (at least 6 steps, with landmarks like a blue door, a little shrine, and stairs). I have to repeat them all back without mistakes. Same rules.`]
  ],
  sa: [
    "I can ask for instructions and the order of steps",
    "I can understand formal commands (ponga, gire, jale)",
    "I can say when a step doesn't work and describe what I see",
    "I can ask for clarification (¿cuál?, ¿cuánto tiempo?)",
    "I can repeat the steps back to check"
  ]
};
