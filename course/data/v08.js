LESSONS["08"].vars = [
  {
    title: "En el supermercado", partner: "Jorge", place: "Supermercado El Ahorro · León",
    goal: "You can't find what you need in a big supermarket. Ask an employee where each item on your list is, and check what you hear.",
    board: {
      title: "Supermercado El Ahorro", sub: "León, Gto. · tu lista",
      cols: [
        [{ h: "Tu lista", items: [["La leche", "?"], ["El café", "?"], ["El jabón para trastes", "?"], ["El agua", "?"], ["Las tortillas", "?"]] }],
        [{ h: "Y también", items: [["El baño", "?"], ["Las cajas", "?"]] }]
      ],
      note: "Repeat key words to check: ¿En el pasillo cinco?"
    },
    words: [
      ["el pasillo", "aisle"], ["al fondo", "at the back"], ["la caja", "checkout"], ["los lácteos", "dairy"],
      ["la leche", "milk"], ["el jabón para trastes", "dish soap"], ["la limpieza", "cleaning products"], ["las bebidas", "drinks"],
      ["la tortillería", "tortilla counter"], ["junto a", "next to"], ["la entrada", "entrance"], ["la salida", "exit"]
    ],
    phrases: [
      ["Disculpe, ¿dónde está la leche?", "Excuse me, where's the milk?"],
      ["¿En qué pasillo está el café?", "Which aisle is the coffee in?"],
      ["¿Dónde encuentro el jabón para trastes?", "Where can I find dish soap?"],
      ["¿Al fondo, a la derecha?", "At the back, on the right?"],
      ["¿Junto a la panadería?", "Next to the bakery?"]
    ],
    prompt: {
      role: `You are Jorge, an employee at Supermercado El Ahorro in León, Guanajuato. You're stocking shelves. I'm a customer. Use "usted" with me.`,
      infoTitle: "WHERE THINGS ARE",
      info: `Frutas y verduras: at the entrance, on the left. Panadería: on the right of the entrance. Café and cereal: aisle 3. Cleaning products, including jabón para trastes: aisle 5. Drinks and water: aisle 7. Milk and cheese (lácteos): at the back, on the right, next to the meat. Tortillería: at the back, on the left, next to the panadería. Bathroom: next to customer service (atención a clientes), at the front. Cajas: at the front, by the exit.`,
      lead: `Answer where things are with short, clear directions (en el pasillo cinco, al fondo, a la derecha, junto a). Wait for my questions. After each answer, ask "¿Algo más?"`,
      recast: `I say "¿Dónde es la leche?" and you say "¿La leche? Está al fondo, a la derecha."`
    }
  },
  {
    title: "En el aeropuerto", partner: "Ana", place: "Aeropuerto de Cancún · Terminal 3",
    goal: "Your flight leaves in an hour. At the information desk, find your gate and three other places, and check the directions you hear.",
    board: {
      title: "Información", sub: "Aeropuerto de Cancún · Terminal 3",
      cols: [
        [{ h: "Tu vuelo", items: [["Puerta B12", "?"]] },
         { h: "Necesitas", items: [["Un baño", "?"], ["Un cajero automático", "?"], ["Una casa de cambio", "?"], ["Una farmacia", "?"]] }],
        [{ h: "Y también", items: [["¿Hay wifi?", "?"], ["¿Dónde se puede comer?", "?"]] }]
      ],
      note: "Ask if the places are upstairs or downstairs."
    },
    words: [
      ["la puerta", "gate"], ["la sala de espera", "waiting area"], ["la casa de cambio", "currency exchange"], ["el cajero automático", "ATM"],
      ["arriba", "upstairs"], ["abajo", "downstairs"], ["la planta alta", "upper floor"], ["las escaleras", "stairs"],
      ["la escalera eléctrica", "escalator"], ["el mostrador", "counter"], ["la contraseña", "password"], ["caminar", "to walk"]
    ],
    phrases: [
      ["Disculpe, ¿dónde está la puerta B12?", "Excuse me, where is gate B12?"],
      ["¿Arriba o abajo?", "Upstairs or downstairs?"],
      ["¿Dónde puedo cambiar dinero?", "Where can I exchange money?"],
      ["¿Está lejos de aquí?", "Is it far from here?"],
      ["¿Hay wifi gratis?", "Is there free wifi?"]
    ],
    prompt: {
      role: `You are Ana, who works at the information desk in Terminal 3 of the Cancún airport, after security. I'm a passenger. Use "usted" with me.`,
      infoTitle: "WHERE THINGS ARE",
      info: `Gate B12: upstairs (planta alta). Take the escalator, turn right, and walk about 10 minutes; it's at the end. Bathrooms: next to the escalator, on both floors. ATM: across from the café, on this floor. Currency exchange: there is none after security; only at arrivals. Pharmacy: upstairs, next to gate B5. Restaurants: upstairs, in the middle. Free wifi: yes, the network is "Aeropuerto Cancún", no password.`,
      lead: `Answer where things are with short, clear directions (arriba, a la derecha, al final, junto a, enfrente de). Wait for my questions. After each answer, ask "¿Algo más?"`,
      recast: `I say "¿Dónde es la puerta be doce?" and you say "¿La puerta B12? Está arriba."`
    }
  },
  {
    title: "En la universidad", partner: "Daniela", place: "Universidad · Guanajuato", reg: "tú",
    goal: "It's your first day on a university campus. Ask a student where your classroom and other places are, and check the directions you hear.",
    board: {
      title: "Universidad de Guanajuato", sub: "Campus · primer día",
      cols: [
        [{ h: "Buscas", items: [["Salón 12, edificio C", "?"], ["La biblioteca", "?"], ["La oficina de idiomas", "?"]] }],
        [{ h: "Y también", items: [["Los baños", "?"], ["Fotocopias", "?"], ["La cafetería", "?"]] }]
      ],
      note: "Students use tú with each other."
    },
    words: [
      ["el edificio", "building"], ["el salón", "classroom"], ["la biblioteca", "library"], ["la oficina", "office"],
      ["el pasillo", "hallway"], ["el sótano", "basement"], ["la planta baja", "ground floor"], ["las fotocopias", "photocopies"],
      ["al final de", "at the end of"], ["detrás de", "behind"], ["enfrente de", "across from"], ["las escaleras", "stairs"]
    ],
    phrases: [
      ["Oye, ¿dónde está el edificio C?", "Hey, where is building C?"],
      ["¿En qué piso está el salón doce?", "What floor is classroom 12 on?"],
      ["¿Al final del pasillo?", "At the end of the hallway?"],
      ["¿Dónde puedo sacar copias?", "Where can I make copies?"],
      ["¡Gracias, eres muy amable!", "Thanks, you're very kind!"]
    ],
    prompt: {
      role: `You are Daniela, 21, a student at the university in Guanajuato. You're sitting outside building A. I'm a new student and it's my first day. Use "tú" with me.`,
      infoTitle: "WHERE THINGS ARE",
      info: `Building C: behind building A; walk past the cafetería. Classroom 12: building C, ground floor (planta baja), at the end of the hallway. Library: building B, second floor. Language office (oficina de idiomas): building A, third floor; take the stairs, there's no elevator. Bathrooms: on every floor, next to the stairs. Photocopies: in the library basement (sótano). Cafetería: across from building A.`,
      lead: `Answer where things are with short, clear directions (detrás de, al final del pasillo, en el segundo piso). Be friendly and casual. After each answer, ask "¿Algo más?" or "¿Qué más buscas?"`,
      recast: `I say "¿Dónde es la biblioteca?" and you say "¿La biblioteca? Está en el edificio B."`
    }
  }
];
