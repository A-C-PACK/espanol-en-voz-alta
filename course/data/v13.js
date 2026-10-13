LESSONS["13"].vars = [
  {
    title: "El tren a Querétaro", partner: "Sr. Lozano", place: "Estación Buenavista · CDMX",
    goal: "Buy a ticket for the suburban and intercity train. Ask about times, travel classes, luggage, and connections to Querétaro.",
    board: {
      title: "Tren Ciudad de México – Querétaro", sub: "Estación Buenavista · horario de hoy",
      cols: [
        [{ h: "Salidas", items: [["8:00 am", "llega 10:05"], ["12:30 pm", "llega 2:35"], ["6:45 pm", "llega 8:50"]] }],
        [{ h: "Precios", items: [["Clase turista", "$480"], ["Clase preferente", "$750"], ["Niños y mayores", "−50%"]] },
         { h: "Equipaje", items: [["1 maleta", "incluida"], ["Maleta extra", "$150"]] }]
      ],
      note: "You have two suitcases and a backpack. Ask about luggage."
    },
    words: [
      ["el tren", "train"], ["la estación", "station"], ["el vagón", "train car"], ["la clase turista", "economy class"],
      ["la clase preferente", "premium class"], ["el equipaje", "luggage"], ["la maleta extra", "extra bag"], ["incluido", "included"],
      ["el horario", "timetable"], ["la conexión", "connection"], ["abordar", "to board"], ["puntual", "on time"]
    ],
    phrases: [
      ["¿Cuál es la diferencia entre turista y preferente?", "What's the difference between economy and premium?"],
      ["¿Cuántas maletas puedo llevar?", "How many suitcases can I take?"],
      ["¿Cuánto cuesta una maleta extra?", "How much is an extra suitcase?"],
      ["¿A qué hora llega a Querétaro?", "What time does it arrive in Querétaro?"],
      ["¿Con cuánto tiempo tengo que llegar?", "How early do I have to arrive?"]
    ],
    prompt: {
      role: `You are Señor Lozano, a ticket agent at Buenavista train station in Mexico City. I'm buying a train ticket to Querétaro. Use "usted" with me.`,
      infoTitle: "TODAY'S TRAINS (practice timetable)",
      info: `Departures: 8:00 am (arrives 10:05), 12:30 pm (arrives 2:35), 6:45 pm (arrives 8:50). Economy $480; premium $750 (bigger seat, a snack, and a power outlet). Children and seniors pay half. One suitcase is included; extra suitcases are $150 each; backpacks are free. Board 20 minutes before. The 12:30 economy is almost full: only seats facing backwards are left.`,
      lead: `Ask me when I want to travel and how many people. Answer my questions one at a time. Make me decide about the class and my luggage. Give me the total at the end.`,
      recast: `I say "¿Cuánto es por la maleta extra?" and you say "¿La maleta extra? Son ciento cincuenta pesos."`
    }
  },
  {
    title: "La lancha a Isla Mujeres", partner: "Güero", place: "Muelle · Cancún", reg: "tú",
    goal: "At a busy dock in Cancún, buy ferry tickets to Isla Mujeres for you and a friend. Compare two companies and ask about the last boat back.",
    board: {
      title: "Ferry a Isla Mujeres", sub: "Puerto Juárez, Cancún · cada 30 minutos",
      cols: [
        [{ h: "Ultramar", items: [["Ida", "$200"], ["Redondo", "$350"], ["Último regreso", "8:30 pm"]] }],
        [{ h: "Lancha local", items: [["Ida", "$120"], ["Redondo", "$200"], ["Último regreso", "6:00 pm"]] },
         { h: "Ojo", items: [["Hay viento hoy"]] }]
      ],
      note: "The cheaper boat has a catch. Ask the right questions."
    },
    words: [
      ["el ferry", "ferry"], ["la lancha", "small boat"], ["el muelle", "dock, pier"], ["la ida", "one way (there)"],
      ["el último", "the last one"], ["el viento", "wind"], ["marearse", "to get seasick"], ["el chaleco salvavidas", "life jacket"],
      ["cada media hora", "every half hour"], ["tardar", "to take (time)"], ["el oleaje", "waves"], ["valer la pena", "to be worth it"]
    ],
    phrases: [
      ["Dos boletos redondos, por favor.", "Two round-trip tickets, please."],
      ["¿Cada cuánto sale?", "How often does it leave?"],
      ["¿A qué hora es el último regreso?", "What time is the last boat back?"],
      ["¿Cuánto tarda en llegar?", "How long does it take?"],
      ["¿Se mueve mucho con el viento?", "Does it rock a lot with the wind?"]
    ],
    prompt: {
      role: `You are Güero, 25, a friendly guy selling tickets for a local boat (lancha) at Puerto Juárez dock in Cancún. You use "tú" with tourists. There's also a big company, Ultramar, next to you.`,
      infoTitle: "THE BOATS",
      info: `Your lancha: one way $120, round trip $200, 25 minutes, leaves every hour, last return 6:00 pm. It's small and today is windy, so it moves a lot (only admit it if I ask). Ultramar ferry: one way $200, round trip $350, 20 minutes, leaves every 30 minutes, last return 8:30 pm, big and stable. You want me to buy from you, but you're honest when I ask directly.`,
      lead: `Call me over and offer your boat. Answer my questions one at a time. Let me compare with Ultramar and decide.`,
      recast: `I say "¿Cuánto tarda para llegar en la isla?" and you say "¿A la isla? Tarda veinticinco minutos."`
    }
  },
  {
    title: "Con la tarjeta de metro", partner: "Doña Chela", place: "Estación del Metrobús · CDMX", reg: "usted",
    goal: "Your transit card doesn't work. Ask a helpful older woman how to buy and top up a card, how much it costs, and which bus to take.",
    board: {
      title: "Metrobús · Estación Insurgentes", sub: "Ciudad de México · máquina de recarga",
      cols: [
        [{ h: "Tarjeta de Movilidad Integrada", items: [["Tarjeta nueva", "$15"], ["Viaje en Metrobús", "$6"], ["Viaje en Metro", "$5"], ["Recarga mínima", "$10"]] }],
        [{ h: "Quiere ir a", items: [["Museo de Antropología"], ["Coyoacán"]] },
         { h: "Problema", items: [["La máquina no da cambio"]] }]
      ],
      note: "You only have a $200 bill. That's a problem."
    },
    words: [
      ["la tarjeta", "card"], ["recargar", "to top up"], ["el saldo", "balance (credit)"], ["la máquina", "machine"],
      ["el billete", "bill (money)"], ["la moneda", "coin"], ["el cambio", "change"], ["el torniquete", "turnstile"],
      ["la línea", "line"], ["bajarse", "to get off"], ["la taquilla", "ticket booth"], ["prestar", "to lend"]
    ],
    phrases: [
      ["Disculpe, mi tarjeta no funciona.", "Excuse me, my card doesn't work."],
      ["¿Dónde puedo comprar una tarjeta?", "Where can I buy a card?"],
      ["¿Cuánto cuesta un viaje?", "How much does one trip cost?"],
      ["Solo tengo un billete de doscientos.", "I only have a 200-peso bill."],
      ["¿Qué línea tomo para Coyoacán?", "Which line do I take to Coyoacán?"]
    ],
    prompt: {
      role: `You are Doña Chela, 70, a kind woman waiting at the Insurgentes Metrobús station in Mexico City. I ask you for help. You use "tú" with me in a motherly way; I use "usted" with you.`,
      infoTitle: "WHAT YOU KNOW",
      info: `My card has no balance (no tiene saldo). A new card costs $15; a Metrobús trip $6; Metro $5. The machine only takes coins and small bills ($20, $50) and gives no change. The ticket booth at the Metro station next door gives change. To get to Coyoacán: take Metrobús Line 1 south to "Dr. Gálvez", then a pesero, or better, go by Metro Line 3 to "Coyoacán" and walk 15 minutes. To the Anthropology Museum: Metrobús Line 7 on Reforma, get off at "Gandhi".
You offer to pay my first trip with your card if I don't have change.`,
      lead: `Explain things one step at a time and check that I understand ("¿Sí me entiende?"). Let me ask questions. If I say thank you, say something kind.`,
      recast: `I say "Mi tarjeta no tiene dinero" and you say "Ah, no tiene saldo. Hay que recargarla."`
    }
  }
];
