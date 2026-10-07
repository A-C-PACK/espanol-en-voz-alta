window.LESSONS = window.LESSONS || {};
LESSONS["07"] = {
  id: "07", level: "A1", title: "Mi casa", minutes: 25,
  cando: "I can describe where I live in simple phrases.",
  scale: "Sustained monologue: describing",
  reg: "tú", partner: "Claudia", place: "Videollamada · Mérida",
  scene: "on a video call with Claudia from Mérida, planning a home exchange, I described my home and neighborhood",
  setup: "You're on a video call with Claudia in Mérida, planning a home exchange. She asks you to describe your home and neighborhood.",
  goal: "You're on a video call with Claudia from Mérida to plan a home exchange: she'll stay in your home, and you'll stay in hers. Describe your home and neighborhood, and talk for at least 30 seconds without stopping.",
  boardStep: ["Prepara tu descripción", "Claudia will ask these questions. Plan an answer for each."],
  board: {
    title: "Intercambio de Casas", sub: "Videollamada con Claudia · Mérida, Yuc.",
    cols: [
      [{ h: "Claudia va a preguntar", items: [["¿Dónde vives?"], ["¿Es casa o departamento?"], ["¿Cuántas recámaras tiene?"], ["¿Cómo es tu barrio?"], ["¿Qué hay cerca?"]] }],
      [{ h: "Tus frases", items: [["Vivo en…"], ["Es… (pequeña, cómoda)"], ["Tiene… (tres recámaras)"], ["Hay… (un parque)"], ["Está cerca de…"], ["Me gusta porque…"]] }]
    ],
    note: "Goal: talk about your home for 30 seconds without stopping."
  },
  dialogue: [
    ["m", "¡Hola! Cuéntame, ¿dónde vives?", "Hi! Tell me, where do you live?"],
    ["c", "Vivo en Denver, en un barrio tranquilo.", "I live in Denver, in a quiet neighborhood."],
    ["m", "¿Es una casa o un departamento?", "Is it a house or an apartment?"],
    ["c", "Es una casa. No es muy grande, pero es cómoda.", "It's a house. It's not very big, but it's comfortable."],
    ["m", "¿Cuántas recámaras tiene?", "How many bedrooms does it have?"],
    ["c", "Tiene tres recámaras y dos baños.", "It has three bedrooms and two bathrooms."],
    ["m", "¿Y cómo es la cocina?", "And what's the kitchen like?"],
    ["c", "La cocina es pequeña, pero tiene mucha luz.", "The kitchen is small, but it has lots of light."],
    ["m", "¿Hay jardín?", "Is there a yard?"],
    ["c", "Sí, hay un jardín pequeño atrás.", "Yes, there's a small yard in the back."],
    ["m", "¿Qué hay cerca de tu casa?", "What's near your house?"],
    ["c", "Hay un parque, un supermercado y una cafetería.", "There's a park, a supermarket, and a café."],
    ["m", "¿Te gusta tu barrio?", "Do you like your neighborhood?"],
    ["c", "Sí, me gusta mucho porque es tranquilo.", "Yes, I like it a lot because it's quiet."],
    ["m", "¡Qué bonito! Mi casa en Mérida es vieja, pero muy fresca.", "How nice! My house in Mérida is old, but very cool inside."]
  ],
  core: [
    ["Vivo en una casa.", "I live in a house."],
    ["Vivo en un departamento.", "I live in an apartment."],
    ["Es pequeña, pero cómoda.", "It's small but comfortable."],
    ["Tiene tres recámaras.", "It has three bedrooms."],
    ["Hay un parque cerca.", "There's a park nearby."],
    ["Está cerca del centro.", "It's near downtown."],
    ["Me gusta porque es tranquilo.", "I like it because it's quiet."]
  ],
  hear: [
    ["Cuéntame.", "Tell me."],
    ["¿Cómo es tu casa?", "What's your house like?"],
    ["¿Cuántos cuartos tiene?", "How many rooms does it have?"],
    ["¿Qué hay cerca?", "What's nearby?"],
    ["¿Está lejos del centro?", "Is it far from downtown?"],
    ["¿Y qué más?", "And what else?"]
  ],
  extra: [
    ["Mi casa tiene dos pisos.", "My house has two floors."],
    ["Vivo en el tercer piso.", "I live on the third floor."],
    ["Hay una cocina, una sala y un comedor.", "There's a kitchen, a living room and a dining room."],
    ["Tiene un jardín pequeño.", "It has a small yard."],
    ["Está lejos del centro.", "It's far from downtown."],
    ["Hay mucho tráfico.", "There's a lot of traffic."],
    ["Vivo con mi familia.", "I live with my family."],
    ["Vivo solo. / Vivo sola.", "I live alone. (m / f)"],
    ["Mi cuarto favorito es la cocina.", "My favorite room is the kitchen."],
    ["¿Y tu cuarto favorito? ¿Por qué?", "(you'll hear) And your favorite room? Why?"]
  ],
  vocab: [
    ["La casa", [["el departamento", "apartment (Mexico)"], ["la recámara", "bedroom (Mexico)"], ["el baño", "bathroom"], ["la cocina", "kitchen"], ["la sala", "living room"], ["el comedor", "dining room"], ["el jardín", "yard, garden"], ["el piso", "floor, story"], ["la cochera", "garage"]]],
    ["El barrio", [["el barrio, la colonia", "neighborhood"], ["el parque", "park"], ["la tienda", "store"], ["el supermercado", "supermarket"], ["la parada de autobús", "bus stop"], ["el centro", "downtown"]]],
    ["Describir", [["grande", "big"], ["pequeño, pequeña", "small"], ["viejo, vieja", "old"], ["cómodo, cómoda", "comfortable"], ["tranquilo, tranquila", "quiet"], ["ruidoso, ruidosa", "noisy"], ["cerca de", "near"], ["lejos de", "far from"]]]
  ],
  qd: [
    ["Say you live in an apartment.", "Vivo en un departamento."],
    ["Say it's small but comfortable.", "Es pequeño, pero cómodo."],
    ["Say it has two bedrooms.", "Tiene dos recámaras."],
    ["Say there's a park nearby.", "Hay un parque cerca."],
    ["Say it's near downtown.", "Está cerca del centro."],
    ["Say you like your neighborhood because it's quiet.", "Me gusta mi barrio porque es tranquilo."],
    ["Ask what her house is like.", "¿Cómo es tu casa?"]
  ],
  patterns: [
    ["Hay + [cosa]", "\"There is / there are\": <i>Hay un parque. Hay dos baños.</i>"],
    ["Tiene + [número] + [cuartos]", "Mi casa tiene tres recámaras."],
    ["Está + cerca de / lejos de + [lugar]", "Location uses <i>estar</i>: <i>Está cerca del centro.</i> (de + el = del)"],
    ["Es + [adjetivo]", "Description uses <i>ser</i>: <i>Es pequeña. Es tranquilo.</i>"]
  ],
  notes: [
    ["Recámara", "In Mexico a bedroom is a <i>recámara</i>. You'll also hear <i>cuarto</i>."],
    ["Colonia", "Mexican cities are divided into <i>colonias</i>. An address includes it: <i>Col. Centro</i>."],
    ["Departamento", "Mexicans say <i>departamento</i> (or <i>depa</i>) for apartment. <i>Piso</i> means a floor."],
    ["Mérida houses", "Old Mérida houses have high ceilings, tiled floors, and an inner patio to stay cool."]
  ],
  prompt: {
    role: `You are Claudia, 45, from Mérida, Yucatán. We're on a video call planning a home exchange: you'll stay in my home and I'll stay in yours. Use "tú" with me.`,
    infoTitle: "YOUR HOME (CLAUDIA)",
    info: `An old one-story house in the Santiago neighborhood, near downtown Mérida. Three bedrooms, two bathrooms, a big kitchen, an inner patio with plants, and a small pool. It's hot, so every room has a fan. Near a market, a park, and a church. Quiet at night, noisy on Sunday mornings because of the market.`,
    twist: `Ask me one question I probably didn't prepare: "¿Y tu cuarto favorito? ¿Por qué?" Also misunderstand one thing I say once (for example, think I said "grande" when I said "pequeña"), so I have to correct you.`,
    lead: `Ask me open questions and let me talk. Encourage longer answers: after a short answer, say "¿Y qué más?" or "Cuéntame más." Later I'll ask about your home; answer in 2 short sentences.`,
    recast: `I say "Mi casa es cerca del centro" and you say "Ah, está cerca del centro. ¡Qué bien!"`
  },
  twists: [
    ["Sin parar", "Harder", "Describe your home for 60 seconds without interruption.", `Otra vez, por favor. This time just say "Cuéntame de tu casa" and then listen. Don't interrupt for 60 seconds, then ask two follow-up questions. Same rules.`],
    ["Tu casa ideal", "Harder", "Describe your dream home instead.", `Otra vez, por favor. This time ask me about my dream home: where it is, what it has, and why. Same rules.`]
  ],
  sa: [
    "I can say what kind of home I live in",
    "I can say how many rooms it has (tiene / hay)",
    "I can describe it with adjectives (es…)",
    "I can say what's nearby (está cerca de…)",
    "I can talk for 30 seconds without stopping"
  ]
};
