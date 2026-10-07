window.LESSONS = window.LESSONS || {};
LESSONS["08"] = {
  id: "08", level: "A1", title: "¿Dónde está?", minutes: 25,
  cando: "I can ask where something is and understand a simple answer.",
  scale: "Information exchange",
  reg: "usted", partner: "Fernanda", place: "Hotel Casa Colonial · Puebla",
  scene: "I just checked in at a hotel in Puebla and asked the receptionist Fernanda where things are",
  goal: "You just checked in at Hotel Casa Colonial in Puebla. ChatGPT plays Fernanda, the receptionist. Find out where everything on your list is, and check the directions you hear.",
  boardStep: ["Tu lista", "You don't know where these are. Ask Fernanda."],
  board: {
    title: "Hotel Casa Colonial", sub: "Puebla, Pue. · Recepción",
    cols: [
      [{ h: "En el hotel", items: [["El baño", "?"], ["El elevador", "?"], ["El restaurante", "?"], ["La alberca", "?"], ["Tu cuarto: 304", "?"]] }],
      [{ h: "Cerca del hotel", items: [["Un cajero automático", "?"], ["Una farmacia", "?"], ["El zócalo", "?"], ["Una tienda", "?"]] }]
    ],
    note: "Repeat key words to check what you heard: ¿A la izquierda?"
  },
  dialogue: [
    ["c", "Disculpe, ¿dónde está el baño?", "Excuse me, where is the bathroom?"],
    ["m", "Está allí, a la derecha.", "It's over there, on the right."],
    ["c", "Gracias. ¿Y el elevador?", "Thanks. And the elevator?"],
    ["m", "Está al fondo, a la izquierda.", "It's at the back, on the left."],
    ["c", "¿Hay un cajero automático cerca?", "Is there an ATM nearby?"],
    ["m", "Sí, hay uno en la esquina, al lado de la farmacia.", "Yes, there's one on the corner, next to the pharmacy."],
    ["c", "¿En qué piso está el restaurante?", "What floor is the restaurant on?"],
    ["m", "Está en el segundo piso.", "It's on the second floor."],
    ["c", "¿Está lejos el zócalo?", "Is the main square far?"],
    ["m", "No, está muy cerca. A dos cuadras.", "No, it's very close. Two blocks away."],
    ["c", "¿A dos cuadras?", "Two blocks?"],
    ["m", "Sí, todo derecho por esta calle.", "Yes, straight down this street."],
    ["c", "Perfecto. Muchas gracias.", "Perfect. Thank you very much."],
    ["m", "Con mucho gusto.", "My pleasure."]
  ],
  core: [
    ["Disculpe, ¿dónde está el baño?", "Excuse me, where is the bathroom?"],
    ["¿Hay un cajero automático cerca?", "Is there an ATM nearby?"],
    ["¿Está lejos?", "Is it far?"],
    ["¿A la derecha o a la izquierda?", "To the right or to the left?"],
    ["¿En qué piso está?", "What floor is it on?"],
    ["¿A dos cuadras?", "Two blocks? (checking)"],
    ["Muchas gracias.", "Thank you very much."]
  ],
  hear: [
    ["Está allí.", "It's over there."],
    ["A la derecha.", "On the right."],
    ["A la izquierda.", "On the left."],
    ["Todo derecho.", "Straight ahead."],
    ["Al fondo.", "At the back, at the end."],
    ["A dos cuadras.", "Two blocks away."]
  ],
  extra: [
    ["¿Dónde están los elevadores?", "Where are the elevators?"],
    ["¿Dónde hay una farmacia?", "Where is there a pharmacy?"],
    ["¿Está cerca?", "Is it close?"],
    ["Está en el segundo piso.", "It's on the second floor."],
    ["Está al lado de la recepción.", "It's next to reception."],
    ["Está enfrente del hotel.", "It's across from the hotel."],
    ["Está en la esquina.", "It's on the corner."],
    ["¿Me lo puede mostrar en el mapa?", "Can you show me on the map?"],
    ["No tenemos alberca.", "(you'll hear) We don't have a pool."],
    ["Con mucho gusto.", "(you'll hear) My pleasure."]
  ],
  vocab: [
    ["Lugares", [["el baño", "bathroom"], ["el elevador", "elevator"], ["la escalera", "stairs"], ["la recepción", "reception"], ["la alberca", "swimming pool (Mexico)"], ["el cajero automático", "ATM"], ["la farmacia", "pharmacy"], ["el zócalo", "main square"], ["la tienda", "store"]]],
    ["¿Dónde?", [["aquí", "here"], ["allí", "there"], ["a la derecha", "on the right"], ["a la izquierda", "on the left"], ["todo derecho", "straight ahead"], ["al fondo", "at the back"], ["al lado de", "next to"], ["enfrente de", "across from"], ["en la esquina", "on the corner"]]],
    ["Pisos y distancia", [["la planta baja", "ground floor"], ["el primer piso", "first floor up"], ["el segundo piso", "second floor"], ["la cuadra", "block"], ["cerca", "near"], ["lejos", "far"]]]
  ],
  qd: [
    ["Get her attention and ask where the bathroom is.", "Disculpe, ¿dónde está el baño?"],
    ["Ask if there's an ATM nearby.", "¿Hay un cajero automático cerca?"],
    ["Ask if it's far.", "¿Está lejos?"],
    ["Ask what floor the restaurant is on.", "¿En qué piso está el restaurante?"],
    ["You heard \"a la izquierda\". Check it.", "¿A la izquierda?"],
    ["Ask if it's to the right or left.", "¿A la derecha o a la izquierda?"],
    ["Thank her.", "Muchas gracias."]
  ],
  patterns: [
    ["¿Dónde está + [el / la lugar]?", "For a specific place: <i>¿Dónde está la recepción?</i>"],
    ["¿Hay + [un / una lugar] + cerca?", "For any one: <i>¿Hay una farmacia cerca?</i>"],
    ["Está + [lugar / dirección]", "Está a la derecha. · Está al lado de la tienda."],
    ["¿[palabra clave]?", "Repeat key words with a question tone to check: <i>¿A la izquierda? ¿Dos cuadras?</i>"]
  ],
  notes: [
    ["Disculpe", "Start with <i>Disculpe</i> to get a stranger's attention politely."],
    ["Planta baja", "The ground floor is <i>planta baja (PB)</i>. The <i>primer piso</i> is one floor up."],
    ["El zócalo", "The main square of many Mexican cities is called the <i>zócalo</i>."],
    ["Cuadras", "Directions are usually given in blocks: <i>a tres cuadras</i> = three blocks away."]
  ],
  prompt: {
    role: `You are Fernanda, the receptionist at Hotel Casa Colonial in Puebla. I'm a guest who just checked in. Use "usted" with me.`,
    infoTitle: "WHERE THINGS ARE",
    info: `Bathroom: to the right of reception. Elevator: at the back, on the left. Restaurant: second floor. Pool: the hotel has none. Room 304: third floor; take the elevator, then turn left. ATM: on the corner, next to the pharmacy. Pharmacy: on the corner, one block away. Zócalo: two blocks, straight down this street. Convenience store (OXXO): across from the hotel.`,
    twist: `If I ask for the pool, say the hotel doesn't have one. Once, give two directions at once a little fast ("al fondo a la izquierda, y después a la derecha"), so I need to check or ask you to repeat.`,
    lead: `Answer where things are with short, clear directions (a la derecha, al fondo, en el segundo piso). Wait for my questions. After each answer, ask "¿Algo más?"`,
    recast: `I say "¿Dónde es el baño?" and you say "¿El baño? Está a la derecha."`
  },
  twists: [
    ["En el centro comercial", "Harder", "You're in a mall looking for four things.", `Otra vez, por favor. New place: you work at the information desk of a shopping mall. I need the bathrooms, a phone store, the food court, and the exit to the taxis. Make up where they are. Same rules.`],
    ["Tú das direcciones", "Harder", "Switch roles: a tourist asks you where things are.", `Otra vez, por favor. Switch roles: you are a tourist asking me where things are in the hotel. Use the same locations, and I'll give the directions. Same rules.`]
  ],
  sa: [
    "I can get someone's attention politely",
    "I can ask where something is (¿Dónde está…?)",
    "I can ask if something is nearby (¿Hay… cerca?)",
    "I can understand simple directions (derecha, izquierda, todo derecho)",
    "I can check what I heard by repeating it"
  ]
};
