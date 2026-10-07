window.LESSONS = window.LESSONS || {};
LESSONS["13"] = {
  id: "13", level: "A2", title: "Un boleto, por favor", minutes: 28,
  cando: "I can buy a bus ticket and ask about schedules and prices.",
  scale: "Transactions to obtain goods and services",
  reg: "usted", partner: "Paty", place: "Terminal del Norte · CDMX",
  scene: "I bought a bus ticket from Mexico City to San Miguel de Allende at the ticket window, asking about times, prices, and seats",
  goal: "You're at the Terminal del Norte in Mexico City. Buy a ticket to San Miguel de Allende for tomorrow. Ask about times, prices, and the trip, choose a seat, and pay.",
  boardStep: ["Mira las salidas", "Paty uses these exact times and prices. Decide what kind of bus you want."],
  board: {
    title: "Salidas a San Miguel de Allende", sub: "Terminal del Norte, CDMX · mañana · precios en pesos",
    cols: [
      [{ h: "Primera clase", items: [["7:00 am", "$560"], ["10:30 am", "$560"], ["3:15 pm", "$560"]] },
       { h: "Lujo (asientos grandes)", items: [["9:00 am", "$720"], ["5:00 pm", "$720"]] }],
      [{ h: "Información", items: [["Duración", "4 h aprox."], ["Viaje redondo", "−10%"], ["Estudiantes / maestros", "−50% en vacaciones"], ["Pago", "efectivo o tarjeta"]] },
       { h: "Llegada", items: [["Central de Autobuses de San Miguel"]] }]
    ],
    note: "The bus you want might not have the seat you want."
  },
  dialogue: [
    ["m", "Buenos días, ¿a dónde va?", "Good morning, where are you going?"],
    ["c", "Buenos días. Quiero un boleto a San Miguel de Allende para mañana, por favor.", "Good morning. I want a ticket to San Miguel de Allende for tomorrow, please."],
    ["m", "¿A qué hora le gustaría salir?", "What time would you like to leave?"],
    ["c", "En la mañana. ¿A qué hora salen los autobuses?", "In the morning. What time do the buses leave?"],
    ["m", "Hay uno a las siete, uno de lujo a las nueve, y otro a las diez y media.", "There's one at seven, a luxury one at nine, and another at ten thirty."],
    ["c", "¿Cuánto cuesta el de las nueve?", "How much is the nine o'clock?"],
    ["m", "Setecientos veinte pesos. El de primera cuesta quinientos sesenta.", "Seven hundred twenty pesos. The first-class one costs five hundred sixty."],
    ["c", "¿Cuánto tiempo hace a San Miguel?", "How long does it take to San Miguel?"],
    ["m", "Unas cuatro horas.", "About four hours."],
    ["c", "Entonces, el de las diez y media, por favor. ¿Es directo?", "Then the ten thirty, please. Is it direct?"],
    ["m", "Sí, es directo. ¿Sencillo o redondo?", "Yes, it's direct. One way or round trip?"],
    ["c", "Sencillo, por favor. ¿Hay un asiento de ventanilla?", "One way, please. Is there a window seat?"],
    ["m", "Sí, el quince. ¿Me da su nombre?", "Yes, number fifteen. Can I have your name?"],
    ["c", "Sí, claro. ¿Puedo pagar con tarjeta?", "Yes, of course. Can I pay by card?"],
    ["m", "Sí. Sale del andén ocho. Llegue media hora antes.", "Yes. It leaves from bay eight. Arrive half an hour early."]
  ],
  core: [
    ["Quiero un boleto a San Miguel para mañana.", "I want a ticket to San Miguel for tomorrow."],
    ["¿A qué hora salen los autobuses?", "What time do the buses leave?"],
    ["¿Cuánto cuesta el de las nueve?", "How much is the nine o'clock one?"],
    ["¿Cuánto tiempo hace a San Miguel?", "How long does it take to San Miguel?"],
    ["Sencillo, por favor. / Redondo, por favor.", "One way, please. / Round trip, please."],
    ["¿Hay un asiento de ventanilla?", "Is there a window seat?"],
    ["¿De qué andén sale?", "Which bay does it leave from?"]
  ],
  hear: [
    ["¿A dónde va?", "Where are you going?"],
    ["¿Sencillo o redondo?", "One way or round trip?"],
    ["¿Ventanilla o pasillo?", "Window or aisle?"],
    ["Ya no hay lugares.", "There are no seats left."],
    ["¿Me da su nombre?", "Can I have your name?"],
    ["Llegue media hora antes.", "Arrive half an hour early."]
  ],
  extra: [
    ["¿Cuál es el más rápido?", "Which is the fastest one?"],
    ["¿Hay descuento para maestros?", "Is there a discount for teachers?"],
    ["¿El autobús tiene baño?", "Does the bus have a bathroom?"],
    ["¿Hace paradas?", "Does it make stops?"],
    ["¿A qué hora llega?", "What time does it arrive?"],
    ["¿Puedo cambiar el boleto después?", "Can I change the ticket later?"],
    ["¿Dónde documento la maleta?", "Where do I check my suitcase?"],
    ["Prefiero pasillo.", "I prefer the aisle."],
    ["¿Me lo puede escribir, por favor?", "Can you write it down for me, please?"],
    ["¿Trae identificación?", "(you'll hear) Do you have ID?"]
  ],
  vocab: [
    ["El boleto", [["el boleto", "ticket"], ["sencillo", "one-way"], ["redondo", "round trip"], ["la ida", "outbound trip"], ["el regreso", "return trip"], ["el asiento", "seat"], ["la ventanilla", "window"], ["el pasillo", "aisle"]]],
    ["La terminal", [["la central de autobuses", "bus station"], ["la taquilla", "ticket window"], ["el andén", "bay, platform"], ["la sala de espera", "waiting room"], ["documentar", "to check (luggage)"], ["la maleta", "suitcase"]]],
    ["El viaje", [["salir", "to leave"], ["llegar", "to arrive"], ["directo", "direct"], ["la parada", "stop"], ["primera clase", "first class"], ["de lujo", "luxury"], ["la duración", "length (of trip)"]]]
  ],
  qd: [
    ["Ask for a ticket to San Miguel for tomorrow.", "Quiero un boleto a San Miguel para mañana."],
    ["Ask what time the buses leave.", "¿A qué hora salen los autobuses?"],
    ["Ask how much the nine o'clock costs.", "¿Cuánto cuesta el de las nueve?"],
    ["Ask how long the trip takes.", "¿Cuánto tiempo hace a San Miguel?"],
    ["Say you want a round trip.", "Redondo, por favor."],
    ["Ask for a window seat.", "¿Hay un asiento de ventanilla?"],
    ["Ask which bay it leaves from.", "¿De qué andén sale?"]
  ],
  patterns: [
    ["el de las + [hora]", "Skip the noun: <i>el de las nueve</i> = the nine o'clock one. <i>¿Cuánto cuesta el de lujo?</i>"],
    ["¿A qué hora + [sale / llega]?", "<i>¿A qué hora sale? ¿A qué hora llega a San Miguel?</i>"],
    ["¿Cuánto tiempo hace + a + [lugar]?", "Mexican way to ask trip length: <i>¿Cuánto tiempo hace a Querétaro?</i>"],
    ["Un boleto + a + [destino] + para + [día]", "<i>a</i> for where, <i>para</i> for when: <i>un boleto a Puebla para el viernes.</i>"]
  ],
  notes: [
    ["Four terminals", "Mexico City has four bus stations: Norte, Sur, Oriente (TAPO), and Poniente. Buses to the north and Bajío leave from Norte."],
    ["Names on tickets", "Bus tickets in Mexico carry your name. Agents may ask for ID when you board."],
    ["Primera y lujo", "First-class buses are very comfortable. <i>Lujo</i> or <i>ejecutivo</i> adds bigger seats and fewer rows."],
    ["Descuentos", "Students and teachers get 50% off during school holidays, with an ID from their school."]
  ],
  prompt: {
    role: `You are Paty, a ticket agent at the Terminal del Norte bus station in Mexico City. I'm a traveler buying a ticket. Use "usted" with me.`,
    infoTitle: "TOMORROW'S BUSES TO SAN MIGUEL DE ALLENDE",
    info: `First class: 7:00 am, 10:30 am, 3:15 pm, $560. Luxury (bigger seats, snacks): 9:00 am, 5:00 pm, $720. All are direct, about 4 hours, with a bathroom. Round trip: 10% discount. Teachers and students: 50% off only during school holidays (not now). Cash or card. Bus leaves from bay (andén) 8. Arrive 30 minutes early. Suitcases are checked at the bus.`,
    twist: `When I ask for a seat, say the window seats on my bus are all taken. Offer an aisle seat or a different bus. Also ask me for my name and ID.`,
    lead: `Ask me where I'm going and when. Answer my questions about times and prices, one at a time. Make me choose: which bus, one way or round trip, window or aisle, and how I pay.`,
    recast: `I say "¿A qué hora sale el autobús a las nueve?" and you say "¿El de las nueve? Sale a las nueve en punto."`
  },
  twists: [
    ["Redondo con regreso", "Harder", "Buy a round trip and choose a return date and time too.", `Otra vez, por favor. This time I want a round-trip ticket. I'll come back on Sunday. Sunday return buses: 12:00, 4:00 and 7:30 pm. The 4:00 is full. Same rules.`],
    ["Por teléfono", "Challenge", "Call the bus company. No board to look at.", `Otra vez, por favor. This time we're on the phone and I can't see the schedule. Give me the times and prices only when I ask, a little faster than before. Same rules.`]
  ],
  sa: [
    "I can ask for a ticket to a place for a day",
    "I can ask about times, prices, and trip length",
    "I can choose one way or round trip",
    "I can ask for a seat and accept another option",
    "I can understand where and when to board"
  ]
};
