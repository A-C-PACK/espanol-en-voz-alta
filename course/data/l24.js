window.LESSONS = window.LESSONS || {};
LESSONS["24"] = {
  id: "24", level: "B1", title: "¡Perdí el autobús!", minutes: 32,
  cando: "I can handle most travel situations, including unexpected ones like a missed bus or a lost item.",
  scale: "Transactions to obtain goods and services",
  reg: "usted", partner: "Sr. Ramírez", place: "Terminal de autobuses · Oaxaca",
  scene: "I missed my bus at the bus terminal in Oaxaca and had to explain what happened to the ticket agent, Señor Ramírez, and find another way to get to Puerto Escondido",
  goal: "Your bus to Puerto Escondido left 20 minutes ago. Explain what happened, find out your options, deal with one more problem, and leave with a solution you can live with.",
  boardStep: ["Mira tu boleto y las salidas", "Señor Ramírez sees the same information. Decide what matters most to you: time, money, or comfort."],
  board: {
    title: "Terminal Oaxaca", sub: "Taquilla 3 · hoy, 9:50 am",
    cols: [
      [{ h: "Tu boleto", items: [["Oaxaca → Puerto Escondido"], ["Salida", "9:30 am"], ["Asiento", "14"], ["Pagaste", "$620"]] },
       { h: "Lo que pasó", items: [["El taxi llegó tarde"], ["Había mucho tráfico"], ["Llegaste a las 9:45"]] }],
      [{ h: "Próximas salidas", items: [["Directo 11:00 am", "$620"], ["Directo 2:30 pm", "$620"], ["Por Pochutla 12:15 pm", "$480"], ["Nocturno 10:30 pm", "$550"]] },
       { h: "Reglas", items: [["Cambio de boleto", "$150"], ["Sin reembolso"]] }]
    ],
    note: "Something else will go wrong at the window. Stay calm and keep negotiating."
  },
  dialogue: [
    ["c", "Buenos días. Tengo un problema: perdí el autobús de las nueve y media a Puerto Escondido.", "Good morning. I have a problem: I missed the 9:30 bus to Puerto Escondido."],
    ["m", "A ver, déjeme ver su boleto. Sí, ese ya salió. ¿Qué pasó?", "Let's see, let me see your ticket. Yes, that one already left. What happened?"],
    ["c", "El taxi llegó tarde y había mucho tráfico en el centro. Llegué a las diez para las diez.", "The taxi came late and there was a lot of traffic downtown. I got here at ten to ten."],
    ["m", "Uy, qué mala suerte. El boleto no es reembolsable, pero se puede cambiar.", "Oh, bad luck. The ticket isn't refundable, but it can be changed."],
    ["c", "¿Qué opciones tengo?", "What options do I have?"],
    ["m", "Hay un directo a las once, pero cobramos ciento cincuenta pesos por el cambio.", "There's a direct one at eleven, but we charge 150 pesos for the change."],
    ["c", "¿No hay manera de cambiarlo sin costo? No fue mi culpa.", "Is there no way to change it for free? It wasn't my fault."],
    ["m", "Lo siento, son las reglas de la compañía.", "I'm sorry, those are the company's rules."],
    ["c", "Entiendo. Entonces, ¿me puede cambiar al de las once?", "I understand. Then can you change me to the eleven o'clock?"],
    ["m", "Ay, perdón, el de las once ya está lleno. Me quedan lugares en el de las dos y media.", "Oh, sorry, the eleven o'clock is already full. I have seats on the 2:30."],
    ["c", "Es muy tarde para mí. ¿Y si me voy por Pochutla?", "That's too late for me. What if I go via Pochutla?"],
    ["m", "Sale a las doce y cuarto. Llega a Pochutla y de ahí toma una combi, como una hora más.", "It leaves at 12:15. It gets to Pochutla and from there you take a minibus, about an hour more."],
    ["c", "Está bien, prefiero ese. ¿Dónde guardo mi maleta mientras espero?", "OK, I prefer that one. Where can I leave my suitcase while I wait?"],
    ["m", "En la paquetería, al fondo a la derecha. Aquí tiene su boleto nuevo.", "At the luggage office, at the back on the right. Here's your new ticket."],
    ["c", "Muchas gracias por su ayuda.", "Thank you very much for your help."]
  ],
  core: [
    ["Tengo un problema: perdí el autobús.", "I have a problem: I missed the bus."],
    ["El taxi llegó tarde y había mucho tráfico.", "The taxi came late and there was a lot of traffic."],
    ["¿Qué opciones tengo?", "What options do I have?"],
    ["¿No hay manera de cambiarlo sin costo?", "Is there no way to change it for free?"],
    ["¿Y si me voy por otra ruta?", "What if I go by another route?"],
    ["Prefiero el de las doce, aunque tarda más.", "I prefer the twelve o'clock, even though it takes longer."],
    ["Entonces, ¿qué me recomienda hacer?", "So what do you recommend I do?"]
  ],
  hear: [
    ["Ya salió.", "It already left."],
    ["No es reembolsable.", "It's not refundable."],
    ["Ya está lleno.", "It's already full."],
    ["Me quedan dos lugares.", "I have two seats left."],
    ["Tiene que pagar la diferencia.", "You have to pay the difference."],
    ["Pase a la taquilla de enfrente.", "Go to the ticket window across the way."]
  ],
  extra: [
    ["Se me olvidó la mochila en el autobús.", "I left my backpack on the bus."],
    ["Se me perdió el boleto.", "I lost my ticket."],
    ["¿A qué hora llega, más o menos?", "What time does it arrive, more or less?"],
    ["¿Hay algún descuento?", "Is there any discount?"],
    ["¿Me puede dar un comprobante?", "Can you give me a receipt?"],
    ["¿Con quién puedo hablar?", "Who can I talk to?"],
    ["No es lo ideal, pero está bien.", "It's not ideal, but it's fine."],
    ["Tengo una reservación en el hotel esta noche.", "I have a hotel reservation tonight."],
    ["Voy a avisarle al hotel que llego tarde.", "I'll let the hotel know I'm arriving late."],
    ["¿Le parece si mejor…?", "(you'll hear) How about if instead…?"]
  ],
  vocab: [
    ["En la terminal", [["la taquilla", "ticket window"], ["la salida", "departure"], ["la llegada", "arrival"], ["el andén", "bay, platform"], ["la paquetería", "luggage office"], ["el directo", "direct (bus)"], ["la combi", "minibus (Mexico)"]]],
    ["Problemas", [["perder (el autobús)", "to miss (the bus)"], ["llegar tarde", "to arrive late"], ["estar lleno", "to be full"], ["cancelar", "to cancel"], ["el retraso", "delay"], ["se me olvidó", "I forgot / left behind"], ["se me perdió", "I lost"]]],
    ["Soluciones", [["cambiar el boleto", "to change the ticket"], ["el reembolso", "refund"], ["la diferencia", "the difference (in price)"], ["el cargo", "fee"], ["la ruta", "route"], ["por (Pochutla)", "via (Pochutla)"], ["mientras", "while"]]]
  ],
  qd: [
    ["Say you missed the bus.", "Perdí el autobús."],
    ["Explain the taxi came late and there was traffic.", "El taxi llegó tarde y había mucho tráfico."],
    ["Ask what options you have.", "¿Qué opciones tengo?"],
    ["Ask if there's a way to change it for free.", "¿No hay manera de cambiarlo sin costo?"],
    ["Suggest going via another route.", "¿Y si me voy por otra ruta?"],
    ["Say you left your backpack on the bus.", "Se me olvidó la mochila en el autobús."],
    ["Ask what they recommend you do.", "¿Qué me recomienda hacer?"]
  ],
  patterns: [
    ["[Pretérito] + y + [imperfecto]", "What happened + the background: <i>Llegué tarde porque había mucho tráfico.</i>"],
    ["Se me + [olvidó / perdió / cayó] + [cosa]", "Accidents that \"happened to you\": <i>Se me perdió el boleto. Se me olvidaron las llaves.</i>"],
    ["¿Y si + [presente]…?", "Suggest an alternative: <i>¿Y si me voy por Pochutla? ¿Y si tomo el nocturno?</i>"],
    ["Prefiero + [opción], aunque + [desventaja]", "<i>Prefiero el de las doce, aunque tarda más.</i>"]
  ],
  notes: [
    ["Terminales", "Long-distance buses in Mexico are comfortable and punctual. Companies like ADO sell tickets online and at the <i>taquilla</i>."],
    ["Combis y colectivos", "To reach smaller towns you often switch to a <i>combi</i> or <i>colectivo</i>, a shared van that leaves when it's full."],
    ["Paquetería", "Many terminals have a <i>paquetería</i> or <i>guarda equipaje</i> where you can leave bags for a small fee."],
    ["Stay friendly", "Agents often have some flexibility. Being calm and polite (<i>Entiendo, pero…</i>) gets better results than arguing."]
  ],
  prompt: {
    role: `You are Señor Ramírez, a ticket agent at the bus terminal in Oaxaca. It's 9:50 am. I come to your window because I missed my bus. Use "usted" with me. You're polite but you follow the company rules.`,
    infoTitle: "THE SITUATION",
    info: `My ticket: Oaxaca → Puerto Escondido, 9:30 am, seat 14, $620. The bus already left.
Rules: tickets are not refundable. A change costs $150. You can waive the fee only if I stay calm, explain clearly, and ask politely a second time.
Next departures to Puerto Escondido: direct 11:00 am ($620, about 7 hours), direct 2:30 pm ($620), via Pochutla 12:15 pm ($480 to Pochutla, then a 1-hour combi for $60), night bus 10:30 pm ($550).
Luggage storage (paquetería) is at the back on the right, $20 per bag.`,
    twist: `When I choose a bus, say it's already full and offer something worse. Later, mention one extra problem: my seat on the new bus is at the very back next to the bathroom, or I have to pay the difference.`,
    lead: `First ask what happened and let me explain. Give me the options one or two at a time and let me ask questions and compare. Don't solve the problem for me; let me decide.`,
    recast: `I say "Cuando llegué, el autobús ya salía" and you say "Ah, cuando llegó, el autobús ya había salido. Entiendo."`
  },
  twists: [
    ["Se me olvidó algo", "Harder", "You arrived on the bus, but left your backpack on it.", `Otra vez, por favor. New situation: I arrived in Oaxaca on the 7:00 am bus from Mexico City, and I left my backpack on the bus. You work at the lost-and-found window. Ask me questions to describe it and what's inside. Same rules.`],
    ["Todo cancelado", "Challenge", "A road is closed. All buses today are cancelled.", `Otra vez, por favor. Same terminal, but this time a road is blocked and all buses to the coast are cancelled today. Make me negotiate: a refund, a ticket for tomorrow, or a plane. Same rules.`]
  ],
  sa: [
    "I can explain what happened (preterite + imperfect)",
    "I can ask about and compare options",
    "I can politely push back once (¿No hay manera de…?)",
    "I can adapt when a second problem comes up",
    "I can choose a solution and give a reason"
  ]
};
