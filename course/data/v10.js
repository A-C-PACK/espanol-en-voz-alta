LESSONS["10"].vars = [
  {
    title: "En el metro", partner: "Oficial Rocío", place: "Metro Hidalgo · CDMX",
    goal: "You're at Hidalgo metro station. Ask a police officer how to get to three places by metro: which line, which direction, how many stops, and where to change.",
    board: {
      title: "Metro Hidalgo", sub: "Ciudad de México · Líneas 2 y 3",
      cols: [
        [{ h: "Líneas aquí", items: [["Línea 2 (azul): Tasqueña ↔ Cuatro Caminos"], ["Línea 3 (verde): Universidad ↔ Indios Verdes"]] }],
        [{ h: "Quieres ir a", items: [["Bellas Artes", "?"], ["El Zócalo", "?"], ["El Bosque de Chapultepec", "?"]] }]
      ],
      note: "One trip needs a transfer. Ask where to change lines."
    },
    words: [
      ["la línea", "line"], ["la dirección", "direction (end of the line)"], ["la estación", "station"], ["bajarse", "to get off"],
      ["transbordar", "to change lines"], ["el andén", "platform"], ["la siguiente", "the next one"], ["la tarjeta", "transit card"],
      ["recargar", "to top up (a card)"], ["la salida", "exit"], ["tomar", "to take"]
    ],
    phrases: [
      ["Disculpe, ¿cómo llego al Zócalo?", "Excuse me, how do I get to the Zócalo?"],
      ["¿Qué línea tomo?", "Which line do I take?"],
      ["¿En qué dirección?", "In which direction?"],
      ["¿Cuántas estaciones son?", "How many stations is it?"],
      ["¿Tengo que transbordar?", "Do I have to change lines?"]
    ],
    prompt: {
      role: `You are Oficial Rocío, a friendly police officer at Hidalgo metro station in Mexico City. I'm a visitor asking for directions. Use "usted" with me.`,
      infoTitle: "THE ROUTES FROM HIDALGO",
      info: `Bellas Artes: Línea 2 (blue), dirección Tasqueña, one station. Or walk 5 minutes east on Avenida Hidalgo.
Zócalo: Línea 2, dirección Tasqueña, three stations (Bellas Artes, Allende, Zócalo). Get off at Zócalo/Tenochtitlan.
Bosque de Chapultepec: Línea 3 (green), dirección Universidad, two stations to Balderas. Change (transbordar) to Línea 1 (pink), dirección Observatorio, four stations to Chapultepec.
A ride costs $5 with the card; you can top up (recargar) at the machines.`,
      lead: `Give directions in short steps ("Tome la línea dos, dirección Tasqueña."). Give one or two steps at a time and wait for me to check. Use "usted" commands.`,
      recast: `I say "¿Qué línea tomo por el Zócalo?" and you say "¿Para el Zócalo? Tome la línea dos."`
    }
  },
  {
    title: "Un pueblo pequeño", partner: "Don Pancho", place: "Santa Rosa · un pueblo de práctica",
    goal: "You just got off the bus in a small town with no street signs. Use landmarks to find three places: your hotel, an ATM, and the river.",
    board: {
      title: "Santa Rosa", sub: "Pueblo de práctica · estás en la parada del autobús",
      cols: [
        [{ h: "Buscas", items: [["Hotel Posada Rosa", "?"], ["Un cajero automático", "?"], ["El balneario (el río)", "?"]] }],
        [{ h: "Puntos de referencia", items: [["La avenida principal"], ["El mercado"], ["La iglesia y el kiosco"], ["La farmacia"], ["La casa azul"]] }]
      ],
      note: "There are no street names here. Listen for landmarks."
    },
    words: [
      ["el pueblo", "town, village"], ["el kiosco", "bandstand"], ["la iglesia", "church"], ["el balneario", "swimming spot, water park"],
      ["el río", "river"], ["el camino", "path"], ["la carretera", "highway"], ["la parada", "stop"],
      ["hasta el final", "all the way to the end"], ["a mano derecha", "on the right-hand side"], ["detrás de", "behind"], ["subir", "to go up"]
    ],
    phrases: [
      ["Disculpe, ¿cómo llego al Hotel Posada Rosa?", "Excuse me, how do I get to the Hotel Posada Rosa?"],
      ["¿Hay un cajero por aquí?", "Is there an ATM around here?"],
      ["¿Después del mercado?", "After the market?"],
      ["¿Detrás de la iglesia?", "Behind the church?"],
      ["¿Se puede ir caminando?", "Can you walk there?"]
    ],
    prompt: {
      role: `You are Don Pancho, an older man who sells newspapers next to the bus stop in Santa Rosa, a small town with no street signs. I just got off the bus. Use "usted" with me.`,
      infoTitle: "THE TOWN (only you know this)",
      info: `The bus stop is on the highway (carretera), at the south end of town. The main avenue (avenida principal) goes north from the bus stop, five blocks uphill, to the church and the kiosco.
- ATM: the only one is inside the OXXO, right next to the bus stop.
- Market: two blocks up the main avenue, on the right. The pharmacy is across from the market.
- Hotel Posada Rosa: three blocks up the main avenue, turn left at the bakery, half a block. It's a blue house.
- Balneario on the river: behind the church. Take the dirt path on the right of the church and walk about 10 minutes downhill.`,
      lead: `Give directions using landmarks, in short steps ("Suba por la avenida principal. Pase el mercado."). Give one or two steps at a time and wait for me to check. Use "usted" commands.`,
      recast: `I say "¿El hotel está después de la mercado?" and you say "Sí, después del mercado. Una cuadra más."`
    }
  },
  {
    title: "Tú das las indicaciones", partner: "Don Memo", place: "Un taxi · Querétaro",
    goal: "This time you have the directions. Guide a taxi driver to your friend's house, step by step, and answer his questions.",
    board: {
      title: "Casa de tu amiga", sub: "Querétaro, Qro. · desde el centro",
      cols: [
        [{ h: "Tu ruta", items: [["1. Avenida Universidad, hacia el norte"], ["2. Pase dos semáforos"], ["3. En el tercer semáforo, a la derecha"], ["4. Calle Pino, dos cuadras"]] }],
        [{ h: "La casa", items: [["Calle Pino 45"], ["Amarilla, a la izquierda"], ["Enfrente de un parque"], ["Junto a una tiendita"]] }]
      ],
      note: "Don Memo will make one mistake. Correct him."
    },
    words: [
      ["el semáforo", "traffic light"], ["la glorieta", "roundabout"], ["la avenida", "avenue"], ["la calle", "street"],
      ["hacia el norte", "toward the north"], ["seguir", "to keep going"], ["pasar", "to go past"], ["dar vuelta", "to turn"],
      ["parar", "to stop"], ["el número", "house number"], ["la tiendita", "corner store"], ["aquí está bien", "here is fine"]
    ],
    phrases: [
      ["Siga derecho por Avenida Universidad.", "Go straight on Avenida Universidad."],
      ["En el tercer semáforo, dé vuelta a la derecha.", "At the third light, turn right."],
      ["No, en el siguiente.", "No, at the next one."],
      ["Es la casa amarilla, a la izquierda.", "It's the yellow house on the left."],
      ["Aquí está bien, gracias.", "Here is fine, thanks."]
    ],
    prompt: {
      role: `You are Don Memo, a taxi driver in Querétaro. I'm your passenger and I'm giving you directions to my friend's house. You don't know the address. Use "usted" with me.`,
      infoTitle: "THE ROUTE (I have it; you don't)",
      info: `The correct route, so you can check my directions: from downtown, go north on Avenida Universidad. Pass two traffic lights. At the third light, turn right onto Calle Pino. Go two blocks. The house is number 45, yellow, on the left, across from a park and next to a small store. Make ONE mistake on purpose: try to turn right at the second light, so I have to correct you.`,
      lead: `Ask me where we're going, then follow my directions one step at a time. Ask short questions to check ("¿Aquí a la derecha?", "¿Sigo derecho?", "¿Cuál casa?"). Narrate what you see ("Ya pasamos un semáforo"). Don't give me the directions yourself.`,
      recast: `I say "En el tres semáforo, gire a derecha" and you say "¿En el tercer semáforo, a la derecha? Muy bien."`
    }
  }
];
